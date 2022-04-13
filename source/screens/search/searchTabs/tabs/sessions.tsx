// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import { FlatList } from 'react-native';
import { gql, useLazyQuery } from '@apollo/client';
import CompactSessionCard from '@components/Cards/CompactSessionCard';

import { Line, SearchContainer } from '../styles';

interface Props {
  data: any;
}

const Sessions: React.FC<Props> = ({ searchQuery }: any) => {
  const query = gql`
    query SearchSessions($searchQuery: String, $cursor: String) {
      allAlbums(searchQuery: $searchQuery, cursor: $cursor) {
        cursor
        hasMore
        albums {
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

  const [getQuery, { data, loading, error, fetchMore }] = useLazyQuery(query);

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
      {data?.allAlbums && !loading && (
        <FlatList
          bounces={false}
          onEndReached={() => {
            console.log(data.allAlbums.cursor);
            fetchMore({
              variables: {
                cursor: data.allAlbums.cursor,
              },
            });
          }}
          data={data.allAlbums.albums}
          renderItem={({ item }) => (
            <CompactSessionCard
              thumbnailImg={item.cover.file.thumbnail}
              authorUsername={item.author.username}
              title={item.spot.name}
              date={item.date}
              slug={item.slug}
            />
          )}
          keyExtractor={album => album.id}
          ItemSeparatorComponent={() => <Line />}
        />
      )}
    </SearchContainer>
  );
};

export default Sessions;
