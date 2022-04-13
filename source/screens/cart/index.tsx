// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useApolloClient } from '@apollo/client';
import { PythonApi } from '@services/api';
import Cart from '@components/Cart';
import translate from '../../locales';
import Header from '../../components/Header';
import { useCart } from '../../hooks/cart';

const CartScreen: React.FC = ({ navigation, route }: any) => {
  const { updateCart, cart } = useCart();
  const apolloClient = useApolloClient();
  const { paymentMethod, cardSelected } = route.params || {
    paymentMethod: null,
    cardSelected: null,
  };

  return (
    <>
      <Header
        backButton
        title={translate('cart')}
        navigation={navigation}
        icons={
          cart?.items?.length > 0
            ? [
                {
                  icon: 'delete-empty-outline',
                  color: 'black',
                  title: translate('clean_cart'),
                  action: async () => {
                    await PythonApi.Cart.clearAllItems(cart.items);
                    apolloClient.refetchQueries({
                      include: ['GetMyCart', 'GetOwnedStatus'],
                    });
                  },
                },
              ]
            : []
        }
      />
      <Cart
        isLoading={!cart}
        setRefetch={updateCart}
        paymentMethod={paymentMethod}
        cardSelected={cardSelected}
      />
    </>
  );
};

export default CartScreen;
