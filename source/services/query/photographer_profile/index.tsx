import { gql } from '@apollo/client';

export const GET_PHOTOGRAPHER_PROFILE = gql`
  query GetPhotographerProfile($username: String) {
    user(username: $username) {
      id
      username
      name
      location {
        state
        city
      }
      isPhotographer
      followers {
        id
        username
      }
      following {
        id
        username
      }
      profileImg
      albums {
        id
        author {
          id
          name
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
`;
