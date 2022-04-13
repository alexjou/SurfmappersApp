// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { gql, useLazyQuery } from '@apollo/client';
import UserCard from '@components/Cards/UserCard';
import { Line, SearchContainer } from '../styles';

// import { Container } from './styles';

interface Props {
  data: any;
}

const PhotographerSearchTab: React.FC<Props> = ({ searchQuery }: any) => {
  const query = gql`
    query SearchUsers($searchQuery: String) {
      allContactSuggestions(searchQuery: $searchQuery) {
        id
        name
        username
        images {
          avatar
        }
        contactInfo {
          address {
            city
            state
          }
        }
        isPhotographer
      }
    }
  `;

  const queryOptions = {
    variables: { searchQuery },
  };

  const [getQuery, { data, loading, error }] = useLazyQuery(query);

  useEffect(() => {
    if (searchQuery?.length >= 3) {
      getQuery(queryOptions);
    }
  }, [searchQuery]);

  useEffect(() => {
    getQuery(queryOptions);
  }, []);

  return (
    <SearchContainer>
      {/*      <RecentText>Recentes</RecentText>
      <Line/> */}
      {!loading && data && (
        <FlatList
          bounces={false}
          data={data?.allContactSuggestions}
          renderItem={({ item }) => <UserCard user={item} />}
          keyExtractor={album => album.id}
          ItemSeparatorComponent={() => <Line />}
        />
      )}
    </SearchContainer>
  );
};

export default PhotographerSearchTab;
