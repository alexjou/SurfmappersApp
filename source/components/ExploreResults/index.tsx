// eslint-disable-next-line no-use-before-define
import React from 'react';
import { FlatList, Text } from 'react-native';
import DataPlaceholder from '@components/DataPlaceholder';
import { LoadingIndicator } from '@components/LoadingIndicator';
import ExploreThumbnail from '../ExploreThumbnail';
import { Container } from './styles';

const ExploreResults = ({
  navigation,
  headerComponent,
  data,
  fetchMore,
  loadingMore,
}: any) => {
  console.log('allAlbums', data?.allAlbums?.albums);
  return (
    <Container>
      <FlatList
        bounces={false}
        // refreshing={loadingMore}
        onEndReachedThreshold={0.5}
        onEndReached={() => {
          if (data.allAlbums.hasMore && !loadingMore && data) {
            fetchMore({
              variables: {
                cursor: data.allAlbums.cursor,
              },
            });
          }
        }}
        data={data?.allAlbums?.albums}
        numColumns={3}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={headerComponent}
        ListFooterComponent={loadingMore ? <LoadingIndicator /> : null}
        ListEmptyComponent={
          <>
            {data?.allAlbums?.albums.length === 0 && !loadingMore && (
              <Text style={{ padding: 20, textAlign: 'center' }}>
                Nenhum album encontrado na região
              </Text>
            )}
          </>
        }
        renderItem={({ item: { slug, cover, date, spot } }) => (
          <>
            {slug && (
              <ExploreThumbnail
                navigation={navigation}
                slug={slug}
                cover={cover?.file.thumbnail}
                name={spot.name}
                date={date}
              />
            )}
          </>
        )}
      />
    </Container>
  );
};

export default ExploreResults;
