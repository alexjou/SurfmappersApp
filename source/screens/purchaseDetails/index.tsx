import Header from '@components/Header';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { ScrollView } from 'react-native';
import CartProductList from '@components/Cart/CartProductList';
import { gql, useQuery } from '@apollo/client';
import {
  Container,
  Date,
  DetailsTitle,
  GridContainer,
  Img,
  Line,
  PhotographerName,
  Text,
} from './styles';
import translate from '@locales/';
import { getTitleAtStatus } from '@components/PurchaseItem/getTitleStatus';

const PurchaseDetails: React.FC = ({ route }: any) => {
  const navigation = useNavigation();
  const { id, typeName } = route.params;

  const getCartQuery = gql`
    query GetPurchasedCart($id: ID) {
      cart(id: $id) {
        id
        total
        status
        finished
        paymentMethod
        discount
        albums {
          id
          author {
            username
          }
          spot {
            name
          }
        }
        created(format: "DD/MM/YYYY")
        items {
          price
          product {
            ... on Photo {
              id
              file {
                thumbnail
              }
            }
            ... on Sequence {
              id
              images {
                id
                file {
                  thumbnail
                }
              }
            }
          }
        }
      }
    }
  `;

  const queryOptions = {
    variables: {
      id,
    },
    // fetchPolicy: 'cache-and-network'
  };

  const { loading, data, error, refetch } = useQuery(
    getCartQuery,
    queryOptions,
  );

  const cart = data?.cart;

  return (
    <ScrollView>
      <Header
        backButton
        title={translate('cartDetails')}
        navigation={navigation}
        icons={[]}
      />
      <Container>
        <Line />
        <Date>{getTitleAtStatus(cart?.status)}</Date>
        <Text size={16}>{cart?.albums[0]?.spot.name}</Text>
        <DetailsTitle>{translate('photographer')}</DetailsTitle>
        <PhotographerName>{cart?.albums[0]?.author.username}</PhotographerName>
        <DetailsTitle>{translate('purchasedDate')}</DetailsTitle>
        <Text size={16}>{cart?.created}</Text>
        <DetailsTitle>{translate('metodPayment')}</DetailsTitle>
        <Text size={16}>{cart?.paymentMethod}</Text>
        <DetailsTitle>{translate('purchaseValue')}</DetailsTitle>
        <Text size={16}>R$ {cart?.total}</Text>
        <DetailsTitle>{translate('discount')}</DetailsTitle>
        <Text size={16}>R$ {cart?.discount}</Text>

        <Line />
      </Container>
      <CartProductList items={cart?.items} finished={true} refetch={refetch} />
    </ScrollView>
  );
};

export default PurchaseDetails;
