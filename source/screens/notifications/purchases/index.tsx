// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { FlatList } from 'react-native';
import EmptyNotifications from '@components/EmptyNotifications';
import { useNavigation } from '@react-navigation/native';
import { PurchaseItem } from '../../../components';

interface IPurchases {
  _id: string;
  name: string;
  status: string;
  total: number;
}

interface DataPurchases {
  count: number;
  purchases: IPurchases[];
}

const query = gql`
  query GetMyPurchases($cursor: String) {
    self {
      id
      carts {
        purchases(cursor: $cursor) {
          cursor
          hasMore
          carts {
            id
            total
            status
            finished
            paymentMethod
            items {
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
      }
    }
  }
`;

const Purchases = () => {
  const navigation = useNavigation();

  const { data, fetchMore } = useQuery(query);
  const purchases = data?.self?.carts.purchases;

  return (
    <FlatList
      bounces={false}
      showsVerticalScrollIndicator={false}
      data={purchases?.carts}
      keyExtractor={item => item.id}
      ListEmptyComponent={EmptyNotifications}
      onEndReachedThreshold={0.8}
      onEndReached={() => {
        console.log('reached', purchases?.hasMore);
        if (purchases?.hasMore) {
          fetchMore({
            variables: {
              cursor: purchases?.cursor,
            },
          });
        }
      }}
      renderItem={({ item }) => (
        <PurchaseItem
          key={item.id}
          onPress={() =>
            navigation.navigate('PurchasesDetails', {
              id: item.id,
              typeName: item.__typename,
            })
          }
          status={item.status}
          total={item.total}
          name={item.name}
          thumbnail={
            item.items?.[0]?.product?.file?.thumbnail ||
            item.items?.[0]?.product?.images?.[0]?.file?.thumbnail
          }
          paymentMethod={item.paymentMethod}
          // isRead={}
        />
      )}
    />
  );
};

export default Purchases;
