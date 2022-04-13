import { gql } from '@apollo/client';

export const GET_USER = gql`
  query GetSingleAlbum {
    self {
      id
      username
      email
      name
      isPhotographer
    }
  }
`;
