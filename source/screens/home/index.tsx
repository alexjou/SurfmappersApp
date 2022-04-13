/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { FlatList, Linking, Platform } from 'react-native';
import { gql, useQuery } from '@apollo/client';

import DataPlaceholder from '@components/DataPlaceholder';
import { LoadingIndicator } from '@components/LoadingIndicator';
import Header from '../../components/Header';
import SessionThumbnail from '../../components/SessionThumbnail';

import { Container, Content } from './styles';
import { useAuth } from '../../hooks/auth';

const Home = ({ navigation }: any) => {
  const { user } = useAuth();

  const loggedUserQuery = gql`
    query LoggedHomeFeed($cursor: String, $limit: Int) {
      customFeed(cursor: $cursor, limit: $limit) {
        cursor
        hasMore
        albums {
          id
          taggedUsers {
            count
            user {
              id
              name
              username
              images {
                avatar
              }
            }
          }
          spot {
            id
            name
          }
          date(format: "dddd, D MMMM  YYYY [•] HH[h]")
          id
          slug
          cover {
            file {
              highRes
            }
          }
          author {
            id
            username
          }
        }
      }
    }
  `;

  const publicQuery = gql`
    query PublicHomeFeed($cursor: String, $limit: Int, $coordinates: [Float]) {
      allAlbums(cursor: $cursor, limit: $limit, coordinates: $coordinates) {
        cursor
        hasMore
        albums {
          id
          taggedUsers {
            count
            user {
              id
              name
              username
              images {
                avatar
              }
            }
          }
          spot {
            id
            name
          }
          date(format: "dddd, D MMMM  YYYY [•] HH[h]")
          slug
          cover {
            file {
              highRes
            }
          }
          author {
            id
            username
          }
        }
      }
    }
  `;

  const query = user ? loggedUserQuery : publicQuery;

  const coordinates = !user && [-22.9836210655, -43.2027158558];
  const queryOptions = {
    // notifyOnNetworkStatusChange: true,
    variables: {
      limit: 10,
      coordinates,
    },
  };

  const { loading, data, fetchMore } = useQuery(query, queryOptions);

  const feed = data?.customFeed || data?.allAlbums;

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      navigateHandler(url);
    });

    if (Platform.OS === 'ios') {
      Linking.addEventListener('url', handleOpenURL);
    }

    return () => {
      if (Platform.OS === 'ios') {
        Linking.removeEventListener('url', handleOpenURL);
      }
    };
  }, []);

  const handleOpenURL = (event: any) => {
    navigateHandler(event.url);
  };

  const navigateHandler = async (url: any) => {
    if (url) {
      const { navigate } = navigation;
      const route = url.replace(/.*?:\/\//g, '');
      const id = route.match(/\/([^\/]+)\/?$/)[1];
      const param = route.split('/')[2];
      if (id.includes('-')) {
        navigate('Session', { slug: id });
      } else {
        navigate('PhotoPreview', { itemId: id, deepLinkType: param });
      }
    }
  };

  return (
    <>
      <Header
        backButton={false}
        navigation={navigation}
        icons={[
          {
            icon: 'cart-outline',
            onlyLogged: true,
            color: 'black',
            route: 'Cart',
          },
        ]}
      />
      <Container>
        <Content>
          {!data && <DataPlaceholder type="feed" />}

          <FlatList
            bounces={false}
            data={feed?.albums}
            contentContainerStyle={{ paddingBottom: 16 }}
            showsVerticalScrollIndicator={false}
            ListFooterComponent={() => (
              <>{feed?.hasMore && <LoadingIndicator />}</>
            )}
            onEndReachedThreshold={0.8}
            onEndReached={() => {
              if (feed?.hasMore) {
                fetchMore({
                  variables: {
                    cursor: feed.cursor,
                  },
                });
              }
            }}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <SessionThumbnail
                session={{
                  title: item.spot.name,
                  date: item.date,
                  cover: item?.cover?.file?.highRes,
                  thumbnail: item?.cover?.file?.thumbnail,
                  slug: item.slug,
                  taggedUsers: (item?.taggedUsers || []).map(
                    taggedUser => taggedUser?.user,
                  ),
                }}
                author={item.author.username}
                liked={item.liked}
                navigation={navigation}
              />
            )}
          />
        </Content>
      </Container>
    </>
  );
};

export default Home;
