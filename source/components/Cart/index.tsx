import React, { useEffect, useState } from 'react';
import { Alert, Animated, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { PythonApi } from '@services/api';
import Toast from 'react-native-toast-message';
import DataPlaceholder from '@components/DataPlaceholder';
import Delivery from '@components/Cart/Delivery';
import { gql, useQuery } from '@apollo/client';
import CartProductList from './CartProductList';
import Tip from './Tip';
import Summary from './Summary';
import Coupon from './Coupon';
import PaymentMethodInfo from './Dialogs/SelectPaymentMethod/PaymentMethod/PaymentMethodInfo';
import PurchaseData from './Dialogs/PurchaseData';
import EmptyCart from './EmptyCart';

import translate from '../../locales';

import {
  ChooseText,
  PaymentMethodContainer,
  PaymentMethodHeader,
  PaymentMethodText,
  Purchase,
  PurchaseButton,
  PurchaseButtonText,
} from './styles';
import { useCart } from '../../hooks/cart';

interface ICart {
  paymentMethod: string;
  cardSelected: object;
}

const cartQuery = gql`
  query GetMyCart {
    self {
      id
      ... on Photographer {
        contactInfo {
          phoneNumber
          taxPayerId
          address {
            street
            city
            country
            state
            neighbourhood
            number
            zipCode
          }
        }
      }
      carts {
        active {
          id
          status
          discount
          tips
          user {
            username
          }
          total
          subtotal
          currency
          coupon {
            id
            discount
          }
          # photographers
          items {
            __typename
            price
            frame {
              size
              material
              price
            }
            product {
              __typename
              ... on Photo {
                id
                file {
                  thumbnail
                }
                price
              }
              ... on Sequence {
                id
                images {
                  id
                  file {
                    thumbnail
                  }
                }
                price
              }
              ... on Bundle {
                id
                price
                sequences {
                  images {
                    file {
                      thumbnail
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Cart: React.FC<ICart> = ({ paymentMethod, cardSelected }) => {
  const shakeAnimationAddress = new Animated.Value(0);
  const shakeAnimationPayment = new Animated.Value(0);
  const { data, loading, error, refetch } = useQuery(cartQuery, {
    fetchPolicy: 'network-only',
  });
  const cart = data?.self?.carts?.active;
  const addressUser = data?.self?.contactInfo?.address;
  const [purchase, showPuchaseDialog] = useState(false);
  const [loadingSend, setLoadingSend] = useState(false);
  const [tip, setTip] = useState(cart?.tips || 0);
  // const [selectedCreditCard, setSelectedCreditCard] = useState();

  const navigation = useNavigation();

  // Define a página alvo e o payload para a navegação após o checkout
  const successNavigation = (paymentMethod: string, response: object) => {
    if (paymentMethod === 'BANK_SLIP') {
      return {
        target: 'BankSlip',
        payload: {
          bankSlipUrl: response.data.boleto_url,
          expirationDate: response.data.boleto_expiration_date,
          barCode: response.data.boleto_barcode,
        },
      };
    }

    if (paymentMethod === 'PIX') {
      return {
        target: 'PaymentPix',
        payload: {
          pixQrCode: response.data.pix_qr_code,
          cart,
        },
      };
    }

    if (paymentMethod === 'CREDIT_CARD') {
      return {
        target: 'Profile',
        payload: undefined,
      };
    }

    return {
      target: 'Cart',
      payload: undefined,
    };
  };

  // Atualiza a gorjeta na API
  useEffect(() => {
    const applyTip = async (tipValue: number) => {
      await PythonApi.Cart.applyTip(tipValue);
      refetch();
    };

    applyTip(tip);
  }, [tip]);

  const hasPhysicalItem = items => {
    const itemsWithFrames = items?.filter(item => item.frame !== null);
    return itemsWithFrames.length > 0;
  };

  const startShake = (typeAnimation: Animated.Value) => {
    Animated.sequence([
      Animated.timing(typeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(typeAnimation, {
        toValue: -10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(typeAnimation, {
        toValue: 10,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(typeAnimation, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <>
      {cart?.items?.length > 0 ? (
        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
          <CartProductList items={cart.items} refetch={refetch} />
          <Tip tip={tip} setTip={setTip} />
          <Animated.View
            style={{ transform: [{ translateX: shakeAnimationAddress }] }}
          >
            {hasPhysicalItem(cart.items) && <Delivery address={addressUser} />}
          </Animated.View>

          <Summary
            cartFinalPrice={cart.total}
            cartFullPrice={cart.subtotal}
            cartDiscount={cart.discount}
            cartCoupon={cart.coupon?.discount}
            cartFramesPrice={cart.total_frames}
            cartShippingPrice={cart.freight}
            cartTippings={cart.tips}
            cartItemsNumber={cart.items.length}
          />

          <Coupon activeCoupon={cart.coupon?.id} refetch={refetch} />
          <Animated.View
            style={{ transform: [{ translateX: shakeAnimationPayment }] }}
          >
            <PaymentMethodContainer
              onPress={() => {
                navigation.navigate('SelectPaymentMethod');
              }}
            >
              <PaymentMethodHeader>
                <PaymentMethodText>
                  {translate('payment_method')}
                </PaymentMethodText>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    width: '100%',
                  }}
                >
                  {paymentMethod && (
                    <PaymentMethodInfo
                      type={paymentMethod}
                      viewOnly
                      cardType={paymentMethod === 'CREDIT_CARD' ? 'Credit' : ''}
                      cardBrand={
                        paymentMethod === 'CREDIT_CARD'
                          ? cardSelected.card_brand
                          : ''
                      }
                      cardLastNumbers={
                        paymentMethod === 'CREDIT_CARD'
                          ? cardSelected.last4_digits
                          : ''
                      }
                      style={{ flex: 2 }}
                    />
                  )}
                  <ChooseText>{translate('choose')}</ChooseText>
                </View>
              </PaymentMethodHeader>
            </PaymentMethodContainer>
          </Animated.View>
          <Purchase>
            <PurchaseButton
              disabled={loadingSend}
              onPress={async () => {
                try {
                  if (hasPhysicalItem(cart.items) && !cart.delivery_address) {
                    startShake(shakeAnimationAddress);
                    Toast.show({
                      type: 'error',
                      text1: translate('registerYourShippingAddress'),
                    });

                    return;
                  }

                  if (!paymentMethod) {
                    startShake(shakeAnimationPayment);
                    Toast.show({
                      type: 'error',
                      text1: 'Selecione uma forma de pagamento para prosseguir',
                    });

                    return;
                  }
                  setLoadingSend(true);
                  const response = await PythonApi.Cart.checkout(
                    paymentMethod,
                    cardSelected?._id,
                  );
                  refetch();
                  // Precisa de tradução

                  setLoadingSend(false);
                  if (paymentMethod === 'CREDIT_CARD') {
                    Toast.show({
                      type: 'success',
                      text1:
                        'Pagamento realizado com sucesso! Sua foto estará disponível na aba "Compras" do seu perfil em minutos.',
                    });
                  }

                  refetch(true);

                  const successNav = successNavigation(paymentMethod, response);
                  navigation.navigate(successNav.target, successNav.payload);
                } catch (error) {
                  if (error.response) {
                    Toast.show({
                      type: 'error',
                      text1: error.response.data.description,
                    });
                  } else {
                    setLoadingSend(false);
                    Alert.alert(translate('generic_error'));
                  }
                }
              }}
            >
              <PurchaseButtonText>
                {!loadingSend
                  ? translate('finalize_order')
                  : translate('finalizing_order')}
              </PurchaseButtonText>
            </PurchaseButton>
          </Purchase>
          <PurchaseData
            visible={purchase}
            changeVisibility={showPuchaseDialog}
            navigation={navigation}
          />
        </ScrollView>
      ) : (
        <>
          {loading ? (
            <DataPlaceholder type="sequenceFeed" />
          ) : (
            <EmptyCart navigation={navigation} />
          )}
        </>
      )}
    </>
  );
};

export default Cart;
