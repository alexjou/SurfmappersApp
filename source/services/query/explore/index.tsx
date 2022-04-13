import { gql } from '@apollo/client';

export const GET_EXPLORE = gql`
  query FindSessionsByCoordinates($coordinates: [Float]) {
    allAlbums(coordinates: $coordinates) {
      id
      cover {
        file {
          thumbnail
        }
      }
      date(format: "dddd, D MMMM  YYYY [•] HH[h]")
      author {
        id
        name
      }
      spot {
        id
        name
        coordinates {
          long
          lat
        }
      }
      slug
    }
  }
`;
