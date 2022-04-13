// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FlatList } from 'react-native';
import { useQuery, gql } from '@apollo/client';
import { get } from 'lodash';
import BundleNotificationItem from '@components/NotificationItem/BundleNotificationItem';
import NotificationItem from '@components/NotificationItem';
import EmptyNotifications from '@components/EmptyNotifications';
import { NOTIFICATIONS_TYPES } from '../../../constants/ItemsTypes';
import { LoadingIndicator } from '@components/LoadingIndicator';

const notificationsQuery = gql`
  query GetMyNotifications($cursor: String, $limit: Int) {
    self {
      id
      notifications(cursor: $cursor, limit: $limit) {
        cursor
        hasMore
        feed {
          id
          message
          read
          thumbnail
          date(format: "DD/MM/YYYY")
          target {
            __typename
            ... on Photo {
              id
            }
            ... on Album {
              id
              slug
            }
            ... on ExternalLink {
              url
            }
            ... on Photographer {
              id
              username
            }
            ... on Surfer {
              id
              username
            }
            ... on Bundle {
              id
              photographer {
                id
                name
              }
              album {
                id
                spot {
                  id
                  name
                }
              }
              price
            }
          }
        }
      }
    }
  }
`;

const Interactivity = () => {
  const { data, loading, fetchMore } = useQuery(notificationsQuery, {
    variables: {
      limit: 10,
    },
  });

  return (
    <FlatList
      // refreshing={loading}
      // onRefresh={reload}
      data={data?.self?.notifications?.feed}
      // ListEmptyComponent={EmptyNotifications}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <NotificationItem {...item} />}
      onEndReachedThreshold={0.2}
      onEndReached={() => {
        console.log("reached")
        if (!loading && data?.self?.notifications?.hasMore) {
          console.log("hasMore")
          fetchMore({
            variables: {
              cursor: data?.self?.notifications?.cursor,
            },
          });
        }
      }}
      // bounces={false}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<LoadingIndicator />}
    />
  );
};

export default Interactivity;
