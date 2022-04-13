import { gql } from '@apollo/client';

export const GET_USER_PHOTOS = gql`
  query getUserPhotos {
    self {
      id
      name
      boughtPhotos {
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
      taggedPhotos {
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
`;
