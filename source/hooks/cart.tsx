import React, { createContext, useContext, useEffect, useMemo } from 'react';
import { PythonApi } from '@services/api';
import { useLazyQuery, gql, useApolloClient } from '@apollo/client';
import { Alert } from 'react-native';
import { get } from 'lodash';
import { ITEMS_TYPES } from '../constants/ItemsTypes';

interface Cart {
  delivery_address: {};
  items: [];
  total_items: number;
}

interface Frame {
  material: string;
  size: string;
}

interface CartState {
  length: number;
  cart: Cart;
}

interface CartContextData extends CartState {
  productsTypes: any;

  updateCart(): void;

  changeProductType(): void;

  removeItemFromCart(type: string, productId: string): void;

  length: number;
  cart: Record<string, unknown>;

  saveAddress(): void;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

const cartQuery = gql`
  query GetCartLength {
    self {
      id
      carts {
        active {
          id
          items {
            __typename
          }
        }
      }
    }
  }
`;

const CartProvider: React.FC = ({ children }) => {
  const [getCartLength, { data }] = useLazyQuery(cartQuery, {
    fetchPolicy: 'network-only',
  });
  const cart = data?.self?.carts?.active;

  const apolloClient = useApolloClient();

  useEffect(() => {
    getCartLength();
  }, [getCartLength]);

  const value = useMemo(() => {
    const updateCart = () => getCartLength();

    const removeItemFromCart = async (type: string, id: string) => {
      try {
        switch (type) {
          case ITEMS_TYPES.SEQUENCE:
            await PythonApi.Cart.removeSequence(id);
            break;
          case ITEMS_TYPES.PACKAGE:
            await PythonApi.Cart.removeBundle(id);
            break;
          default:
            await PythonApi.Cart.removeItem(id);
        }

        updateCart();
      } catch (e) {
        Alert.alert('Não foi possível deletar o item!');
      }
    };

    const saveAddress = async (address: any) => {
      await PythonApi.Cart.saveAddress(address);
      getCartLength();
    };

    const changeProductType = async (productId: string, productType: Frame) => {
      try {
        let payload = {};
        if (productType.size) {
          payload = {
            frame: {
              size: productType.size,
              type: productType?.material?.toLowerCase(),
            },
          };
        }

        await PythonApi.Cart.addPhoto(productId, payload);

        apolloClient.refetchQueries({
          include: ['GetCartLength', 'IsSequenceInCart', 'IsPhotoInCart'],
        });
      } catch (error) {
        Alert.alert(
          get(error, 'data.title', 'Não foi possível trocar a moldura!'),
        );
      }
    };

    return {
      length: cart?.items?.length,
      updateCart,
      cart,
      changeProductType,
      saveAddress,
      removeItemFromCart,
    };
  }, [data, cart, apolloClient, getCartLength]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('userCart must be used within an CartProvider');
  }

  return context;
}

export { CartProvider, useCart };
