// eslint-disable-next-line no-use-before-define
import {
  API_BASE_URL,
  API_BASE_URL_GRAPHQL,
  CLIENT_ID,
  CLIENT_SECRET,
} from '@env';
import React from 'react';
import _ from 'lodash';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import cachePolicies from './cachePolicies';

const customFetch = (uri, options) => {
  let refreshingPromise = null;
  let resp = null;
  const initialRequest = fetch(uri, options);
  return initialRequest
    .then(response => {
      resp = response;
      return response.ok ? response.json : response.text();
    })
    .then(async response => {
      if (resp.ok) {
        return resp;
      }

      const json = JSON.parse(response);
      const errors = _.get(json, 'errors', []);
      const message = errors.length ? errors[0].message : '';
      const typeErrors = ['invalid signature', 'jwt expired'];

      if (
        _.filter(typeErrors, typeError => message.includes(typeError)).length
      ) {
        if (!refreshingPromise) {
          const token = await AsyncStorage.getItem('@Surfmappers:accessToken');
          const refreshToken = await AsyncStorage.getItem(
            '@Surfmappers:refreshToken',
          );
          refreshingPromise = fetch(
            `${API_BASE_URL}/refresh-token?${new URLSearchParams({
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
            })}`,
            {
              method: 'POST',
              body: JSON.stringify({
                token,
                refresh_token: refreshToken,
              }),
            },
          ).then(refresh_token_repsonse => {
            if (refresh_token_repsonse.ok) {
              return refresh_token_repsonse.json().then(async refreshJSON => {
                await AsyncStorage.multiSet([
                  ['@Surfmappers:accessToken', refreshJSON.access_token],
                  ['@Surfmappers:refreshToken', refreshJSON.refresh_token],
                ]);

                return refreshJSON;
              });
            }
            // TODO Realizar logout do APP.
            return refresh_token_repsonse.text().then(async text => {
              await AsyncStorage.multiRemove([
                '@Surfmappers:user',
                '@Surfmappers:accessToken',
                '@Surfmappers:refreshToken',
              ]);

              throw Error(text);
            });
          });
        }

        return refreshingPromise.then(refreshJSON => {
          refreshingPromise = null;

          options.headers = {
            ...options.headers,
            access_token: refreshJSON.access_token,
            refresh_token: refreshJSON.refresh_token,
            user: refreshJSON.user,
          };

          return fetch(uri, options);
        });
      }
      return resp;
    });
};

const httpLink = createHttpLink({
  uri: `${API_BASE_URL_GRAPHQL}/api/graphql`,
  fetch: customFetch,
});

const authLink = setContext(async (_, { headers }) => {
  const [accessToken, user] = await AsyncStorage.multiGet([
    '@Surfmappers:accessToken',
    '@Surfmappers:user',
  ]);

  let authorizationHeader = {};
  if (accessToken[1]) {
    authorizationHeader = {
      Authorization: `Bearer ${accessToken[1]}`,
    };
  }

  return {
    headers: {
      ...headers,
      ...authorizationHeader,
      client_id: CLIENT_ID,
      user: user[1],
    },
  };
});

// Initialize Apollo Client
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: cachePolicies,
});

const GraphQlProvider = ({ children }: any) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default GraphQlProvider;
