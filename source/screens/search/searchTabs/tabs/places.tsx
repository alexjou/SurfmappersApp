// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import SpotCard from '@components/Cards/SpotCard';
import { gql, useLazyQuery } from '@apollo/client';
import { Line, SearchContainer } from '../styles';

interface Props {
  searchQuery: string;
}

const Places: React.FC<Props> = ({ searchQuery }: any) => {
  const query = gql`
    query SearchSpots($searchQuery: String) {
      allSpots(searchQuery: $searchQuery) {
        name
        id
        location {
          city
          state
        }
        coordinates {
          lat
          long
        }
      }
    }
  `;

  const queryOptions = {
    variables: { searchQuery },
  };

  const [getQuery, { data, loading, error }] = useLazyQuery(query);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      getQuery(queryOptions);
    }
  }, [searchQuery]);

  useEffect(() => {
    getQuery(queryOptions);
  }, []);

  return (
    <SearchContainer>
      {!loading && data && (
        <FlatList
          bounces={false}
          data={data.allSpots}
          renderItem={({ item }) => <SpotCard spot={item} />}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Line />}
        />
      )}
    </SearchContainer>
  );
};

export default Places;
