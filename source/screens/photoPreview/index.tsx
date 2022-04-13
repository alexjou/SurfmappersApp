// eslint-disable-next-line no-use-before-define
import React from 'react';
import { gql, useQuery } from '@apollo/client';

import Header from '@components/Header';
import PhotoPreview from '@components/PhotoPreview';

import translate from '@locales/index';

import { Container } from './styles';

const photoQuery = gql`
  query GetSinglePhoto($id: ID) {
    photo(id: $id) {
      id
      isOwned
      isInCart
      liked
      price
      taggedUsers {
        id
        images {
          avatar
        }
      }
      file {
        highRes
        watermarked
        thumbnail
        raw
      }
    }
  }
`;

const sequenceQuery = gql`
  query GetSingleSequence($id: ID) {
    sequence(id: $id) {
      id
      price
      images {
        id
        price
        taggedUsers {
          id
          images {
            avatar
          }
        }
        isInCart
        isOwned
        file {
          highRes
          watermarked
          thumbnail
        }
      }
    }
  }
`;

const photoListQuery = gql`
  query GetPhotoList($ids: [ID]) {
    photoList(ids: $ids) {
      id
      isOwned
      isInCart
      liked
      price
      file {
        highRes
        watermarked
        thumbnail
        raw
      }
    }
  }
`;

const userCollectionQuery = gql`
  query GetUserCollectionPreview {
    self {
      id
      photos {
        bought {
          id
          __typename
          images {
            __typename
            id
            isOwned
            isInCart
            file {
              thumbnail
              highRes
              watermarked
              raw
            }
          }
        }
      }
    }
  }
`;

type ParamType = 'sequence' | 'photo';

const PhotoScreen = ({ route, navigation }: any) => {
  const { id, typeName, isUserCollection } = route.params;
  console.log(id, typeName);

  const type: ParamType = route.params.deepLinkType;

  const handleTypes = (type: string, isUserCollection: boolean) => {
    if (isUserCollection) {
      const flattenedBoughtPhotos = data =>
        data?.self?.photos?.bought?.reduce((acc, item) => ({
          images: [...acc.images, ...item.images],
        }));

      return {
        getItems: flattenedBoughtPhotos,
        query: userCollectionQuery,
      };
    }
    if (type === 'Photo') {
      return {
        getItems: data => data?.photo,
        query: photoQuery,
      };
    }
    if (type === 'Sequence') {
      return {
        getItems: data => data?.sequence,
        query: sequenceQuery,
      };
    }
    return {
      getItems: data => data?.photoList,
      query: photoListQuery,
    };
  };

  const typeHelper = handleTypes(typeName, isUserCollection);
  const { query } = typeHelper;

  const queryOptions = {
    variables: {
      id,
      ids: id,
    },
    // fetchPolicy: 'cache-and-network'
  };

  const { loading, data, error, refetch } = useQuery(query, queryOptions);

  const items = data && typeHelper.getItems(data);

  return (
    <Container>
      <Header
        backButton
        title={translate(typeName?.toLowerCase())}
        navigation={navigation}
        icons={[
          {
            icon: 'cart-outline',
            color: 'black',
            route: 'Cart',
            onlyLogged: true,
          },
          {
            icon: 'dots-vertical',
            color: 'black',
          },
        ]}
      />
      <PhotoPreview
        item={items}
        focusedPhotoId={id}
        refetch={refetch}
      />
    </Container>
  );
};

export default PhotoScreen;
