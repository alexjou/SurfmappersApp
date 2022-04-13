import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { gql, useQuery } from '@apollo/client';
import ProfileHeaderEdit from '@components/ProfileHeaderEdit';
import HeaderWithMenu from '@components/HeaderWithMenu';
import { launchImageLibrary } from 'react-native-image-picker';
import ProfileEditorSurfer from './ProfileEditorSurfer';
import ProfileEditorPhotographer from './ProfileEditorPhotographer';

const ProfileEditor: React.FC = () => {
  const query = gql`
    query GetProfileSettings {
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
          cover
        }
        email
        name
        ... on Photographer {
          birthdate
          contactInfo {
            phoneNumber
            taxPayerId
            socialNetworks {
              instagram
              facebook
              twitter
              flickr
            }
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
          settings {
            currency
            favoriteBeaches
            equipment
            shirtSize
            albumDefaults {
              allowPromotions
              photoPrice
              discounts {
                quantity
                percentage
              }
            }
            skills {
              type
              techniques
            }
          }
        }
      }
    }
  `;

  const { data, loading } = useQuery(query, {
    fetchPolicy: 'network-only'
  });

  const [customAvatar, setCustomAvatar] = useState();
  const [customCover, setCustomCover] = useState();

  return (
    <ScrollView>
      <HeaderWithMenu user={data?.self} />
      <ProfileHeaderEdit
        user={data?.user}
        customAvatar={customAvatar}
        customCover={customCover}
        onCoverPress={async () => {
          const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxWidth: 1200,
          });
          setCustomCover(result?.assets[0]?.base64);
        }}
        onAvatarPress={async () => {
          const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxWidth: 400,
          });
          setCustomAvatar(result?.assets[0]?.base64);
        }}
      />
      {!loading && data?.self.__typename === 'Photographer' ? (
        <ProfileEditorPhotographer user={data?.self} />
      ) : (
        <ProfileEditorSurfer />
      )}
    </ScrollView>
  );
};

export default ProfileEditor;
