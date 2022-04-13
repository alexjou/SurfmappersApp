/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
// import translate from '../../locales';
import AlbumSections from '@components/AlbumSections';
import ProfileHeader from '@components/ProfileHeader';
import theme from '@styles/theme/theme';
import { gql, useQuery } from '@apollo/client';
import HeaderWithMenu from '@components/HeaderWithMenu';
import {
  ChangeLabelButton,
  Container,
  LabelIcon,
  LabelText,
  PurchasesAndMarkingView,
} from './styles';
import { useAuth } from '../../hooks/auth';
import translate from '../../locales';

// Considerando que a segunda query é razoavelmente pesada, os dados
// dessa página são buscados em duas queries para melhor performance,
const userQuery = gql`
  query getProfileHeader {
    self {
      __typename
      id
      username
      name
      allNames {
        first
        last
      }
      images {
        avatar
      }
      social {
        followers {
          id
        }
        following {
          id
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

const photosQuery = gql`
  query GetProfilePhotos {
    self {
      id
      photos {
        bought {
          id
          __typename
          title
          images {
            id
            file {
              thumbnail
            }
            isInCart
            isOwned
          }
        }
        tagged {
          id
          __typename
          title
          images {
            ... on Photo {
              id
              file {
                thumbnail
              }
              isInCart
              isOwned
            }
          }
        }
      }
    }
  }
`;

const Profile = ({ navigation }: any) => {
  const [currentTab, setCurrentTab] = useState('PURCHASES');

  const {
    user: { username },
  } = useAuth();
  // console.log(username);
  const queryVariables = {
    variables: {
      username,
    },
  };

  const { loading: userLoading, data: userData } = useQuery(
    userQuery,
    queryVariables,
  );
  const { loading: photosLoading, data: photosData } = useQuery(
    photosQuery,
    queryVariables,
  );

  const isPurchases = currentTab === 'PURCHASES';
  const tabData = isPurchases
    ? photosData?.self?.photos?.bought
    : photosData?.self?.photos?.tagged

  let imagesIds = [];

  tabData?.forEach(
    photos =>
      (imagesIds = imagesIds.concat(photos.images.map(image => image.id))),
  );
    console.log(userData);

  return (
    <Container>
      {userData && !userLoading && (
        <HeaderWithMenu user={userData.self} navigation={navigation} />
      )}
      <AlbumSections
        isUserCollection={currentTab === 'PURCHASES'}
        imagesIds={imagesIds}
        sections={photosData && !photosLoading && tabData}
        headerComponent={
          userData &&
          !userLoading && (
            <>
              <ProfileHeader
                user={userData.self}
                boughtPhotosTotal={photosData?.self?.photos?.bought?.length}
              />
              <PurchasesAndMarkingView>
                <ChangeLabelButton
                  onPress={() => setCurrentTab('PURCHASES')}
                  isSelected={currentTab === 'PURCHASES'}
                >
                  <LabelIcon
                    size={24}
                    name="view-dashboard"
                    isSelected={currentTab === 'PURCHASES'}
                    color={
                      currentTab === 'PURCHASES'
                        ? theme.colors.primary_blue
                        : '#797979'
                    }
                  />
                  <LabelText isSelected={currentTab === 'PURCHASES'}>
                    {translate('purchases')}
                  </LabelText>
                </ChangeLabelButton>
                <ChangeLabelButton
                  onPress={() => setCurrentTab('TAGGED')}
                  isSelected={currentTab === 'TAGGED'}
                >
                  <LabelIcon
                    size={28}
                    name="snowboard"
                    isSelected={currentTab === 'TAGGED'}
                    color={
                      currentTab === 'TAGGED'
                        ? theme.colors.primary_blue
                        : '#797979'
                    }
                  />
                  <LabelText isSelected={currentTab === 'TAGGED'}>
                    {translate('tags')}
                  </LabelText>
                </ChangeLabelButton>
              </PurchasesAndMarkingView>
            </>
          )
        }
      />
    </Container>
  );
};

export default Profile;
