import { gql } from '@apollo/client';

export const GET_SESSION = gql`
  query FindSingleAlbum($slug: String) {
    album(slug: $slug) {
      id
      username
      allLikes {
        id
      }
      spot {
        id
        name
        location {
          name
          state
          city
        }
      }
      date(format: "dddd, D MMMM  YYYY [•] HH[h]")
      author {
        id
        username
        name
      }
      images {
        id
        file {
          thumbnail
        }
      }
    }
  }
`;
