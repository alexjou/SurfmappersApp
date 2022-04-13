// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect } from 'react';
import { gql, useLazyQuery } from '@apollo/client';
import { ActivityIndicator, Alert, FlatList, Text, View } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';

import SessionThumbnail from '@components/SessionThumbnail';
import HeaderProfileView from '@components/ProfleScreenComponents/HeaderProfileView';
import InformationsAndEditView from '@components/ProfleScreenComponents/InformationsAndEditView';
import FollowersView from '@components/ProfleScreenComponents/FollowersView';
import AppointmentSection from '@components/UserPageComponents/AppointmentSection';
import PortifolioView from '@components/UserPageComponents/PortifolioView';

import Header from '@components/Header';
import {
  Container,
  FollowButton,
  FollowButtonText,
  SeparatorLine,
  SessionView,
  ViewChatAndFollowButtons,
  EmptyList,
} from './styles';
import translate from '../../locales';
import { useFollow } from '../../hooks/follow';
import { useAuth } from '../../hooks/auth';
import { showUnloggedUserAlert } from '@utils/alert';

type ParamList = {
  UserPageScreen: {
    data: string;
  };
};

const UserPage = ({ navigation }: any) => {
  const route = useRoute<RouteProp<ParamList, 'UserPageScreen'>>();
  const { user } = useAuth();
  const { follow, followings, loading: loadingFollow } = useFollow();

  const userQuery = gql`
    query GetPhotographerProfile($username: String) {
      user(username: $username) {
        __typename
        id
        username
        name
        images {
          avatar
          cover
        }
        social {
          followers {
            username
          }
          following {
            username
          }
        }
        contactInfo {
          address {
            city
            state
          }
        }
      }
    }
  `;

  const albumsQuery = gql`
    query GetPhotographerAlbums(
      $username: String
      $cursor: String
      $limit: Int
    ) {
      user(username: $username) {
        id
        ... on Photographer {
          id
          albums {
            feed(cursor: $cursor, limit: $limit) {
              hasMore
              cursor
              albums {
                id
                author {
                  id
                  name
                }
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
                slug
                cover {
                  file {
                    highRes
                  }
                }
                spot {
                  id
                  name
                }
                liked
                date(format: "dddd, D MMMM  YYYY [•] HH[h]")
              }
            }
          }
        }
      }
    }
  `;

  const username = route.params?.data || route.params?.username;

  const [
    getUserInfo,
    { loading: userLoading, data: userData, error: userError },
  ] = useLazyQuery(userQuery, {
    variables: {
      username,
    },
  });

  const [
    getUserAlbums,
    { loading: albumsLoading, data: albumsData, error: albumsError, fetchMore },
  ] = useLazyQuery(albumsQuery, {
    variables: {
      username,
      limit: 10,
    },
  });

  const isFollowing = followings.find(user => user._id === userData?.user?.id);

  const onFollowButtonClick = useCallback(() => {
    if (!user) {
      // Prevent default action
      showUnloggedUserAlert(navigation);
      return;
    }
    follow(userData?.user?.username, isFollowing);
  }, [userData, isFollowing]);

  useEffect(() => {
    if (username) {
      getUserInfo();
      getUserAlbums();
    }
  }, [username, getUserAlbums, getUserInfo]);

  const feed = albumsData?.user?.albums?.feed;

  return (
    <Container>
      <Header
        backButton
        title={username}
        navigation={navigation}
        icons={[
          {
            icon: 'cart-outline',
            onlyLogged: true,
            color: 'black',
            route: 'Cart',
          },
          { icon: 'dots-vertical', color: 'black' },
        ]}
      />
      <FlatList
        data={feed?.albums}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <SessionView>
            <SessionThumbnail
              session={{
                title: item?.spot?.name,
                date: item.date,
                cover: item?.cover?.file.highRes,
                slug: item.slug,
                taggedUsers: item?.taggedUsers.map(item => item.user)
              }}
              author={item.author.name}
              liked={item?.liked}
              navigation={navigation}
            />
          </SessionView>
        )}
        ListEmptyComponent={
          <EmptyList>
            {albumsLoading ? (
              <Text>Loading...</Text>
            ) : (
              <Text>Esse usuário não possui nenhum álbum.</Text>
            )}
          </EmptyList>
        }
        ListHeaderComponent={
          !userLoading &&
          userData && (
            <>
              <HeaderProfileView user={userData?.user} />
              <ViewChatAndFollowButtons>
                {/* <Chat2Button><Chat2Icon /></Chat2Button> */}
                <FollowButton
                  follow={isFollowing}
                  onPress={onFollowButtonClick}
                >
                  {!loadingFollow ? (
                    <FollowButtonText follow={isFollowing}>
                      {isFollowing
                        ? translate('following')
                        : translate('follow')}
                    </FollowButtonText>
                  ) : (
                    <ActivityIndicator />
                  )}
                </FollowButton>
              </ViewChatAndFollowButtons>
              <InformationsAndEditView
                from="UserPage"
                name={userData?.user?.name}
                username={userData?.user?.username}
                city={userData?.user?.contactInfo.address?.city}
                state={userData?.user?.contactInfo.address?.state}
              />
              <AppointmentSection />
              <FollowersView
                from="UserPage"
                followers={userData?.user?.social.followers.length}
                following={userData?.user?.social.following.length}
              />
              <SeparatorLine />
              {userData?.user?.albums && <PortifolioView user={user} />}
            </>
          )
        }
        onEndReachedThreshold={0.8}
        onEndReached={() => {
          if (feed.hasMore) {
            fetchMore({
              variables: {
                cursor: feed.cursor,
              },
            });
          }
        }}
        contentContainerStyle={{ paddingBottom: 30 }}
      />
    </Container>
  );
};

export default UserPage;
