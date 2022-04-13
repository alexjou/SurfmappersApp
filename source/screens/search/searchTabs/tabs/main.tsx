// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { gql, useLazyQuery } from '@apollo/client';
import SpotCard from '@components/Cards/SpotCard';
import UserCard from '@components/Cards/UserCard';
import CompactSessionCard from '@components/Cards/CompactSessionCard';
import { Line, SearchContainer } from '../styles';

// import { Container } from './styles';

interface Props {
  data: any;
}

const Main: React.FC<Props> = ({ searchQuery }: any) => {
  const query = gql`
    query getMainSearch($searchQuery: String) {
      allEntities(searchQuery: $searchQuery) {
        ... on Photographer {
          __typename
          id
          name
          username
          images {
            avatar
          }
          isPhotographer
        }
        ... on Surfer {
          __typename
          id
          name
          username
          images {
            avatar
          }
          isPhotographer
        }
        ... on Spot {
          __typename
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
        ... on Album {
          __typename
          id
          slug
          spot {
            id
            name
          }
          cover {
            file {
              thumbnail
            }
          }
          author {
            id
            username
          }
          date(format: "dddd, DD/MMMM/YYYY - hh[h]")
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

  console.log(data);

  return (
    <SearchContainer>
      {!loading && data && (
        <FlatList
          bounces={false}
          data={data.allEntities}
          renderItem={({ item }) => {
            if (item.__typename === 'Spot') {
              return <SpotCard spot={item} />;
            }
            if (
              item.__typename === 'Surfer' ||
              item.__typename === 'Photographer'
            ) {
              return <UserCard user={item} />;
            }
            if (item.__typename === 'Album') {
              return (
                <CompactSessionCard
                  thumbnailImg={item.cover.file.thumbnail}
                  authorUsername={item.author.username}
                  title={item.spot.name}
                  date={item.date}
                  slug={item.slug}
                />
              );
            }
          }}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={() => <Line />}
        />
      )}
    </SearchContainer>
  );
};

export default Main;
