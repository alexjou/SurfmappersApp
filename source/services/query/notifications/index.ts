import { gql } from '@apollo/client';

export const GET_NOTIFICATIONS = gql`
  query GetMyNotifications {
    self {
      id
      notifications {
        feed {
          id
          message
          read
          thumbnail
          date(format: "DD/MM/YYYY")
          target {
            __typename
            ... on Photo {
              id
            }
            ... on Album {
              id
              slug
            }
            ... on ExternalLink {
              url
            }
            ... on Photographer {
              id
              username
            }
            ... on Surfer {
              id
              username
            }
            ... on Bundle {
              id
              photographer {
                id
                name
              }
              album {
                id
                spot {
                  id
                  name
                }
              }
              price
            }
          }
        }
      }
    }
  }
`;
