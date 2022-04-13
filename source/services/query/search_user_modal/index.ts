import { gql } from '@apollo/client';

export const GET_SEARCH_MODAL = gql`
  query GetContactSuggestions($searchQuery: String) {
    allContactSuggestions(searchQuery: $searchQuery) {
      id
      username
      images {
        avatar
      }
      name
    }
  }
`;
