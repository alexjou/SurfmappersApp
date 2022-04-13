import { gql } from '@apollo/client';

export const GET_SEARCH = gql`
  query GetSpots($searchQuery: String) {
    allSpots(searchQuery: $searchQuery) {
      name
      id
      location {
        city
      }
    }
  }
`;

export const GET_ALBUMS_SPOT = gql`
  query SearchQuery($searchQuery: String, $sort: String) {
    allAlbums(searchQuery: $searchQuery, sort: $sort) {
      id
      spot {
        id
        name
      }
      date(format: "dddd, D MMMM  YYYY [•] HH[h]")
      slug
      cover {
        file {
          thumbnail
        }
      }
      author {
        id
        username
      }
      images {
        id
        file {
          thumbnail
          boughtThumbnail
          highRes
        }
      }
    }
  }
`;
