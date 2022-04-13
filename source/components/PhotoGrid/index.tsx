/* eslint-disable no-undef */
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native';
import { LoadingIndicator } from '@components/LoadingIndicator';
import Thumbnail from './Thumbnail';
import { Container } from './styles';

interface IGridProps {
  items: [];
  fetchMore: Function;
  loadingMore: boolean;
  isUserCollection: boolean;
}

const PhotoGrid: React.FC<IGridProps> = ({
  items,
  fetchMore,
  loadingMore,
  isUserCollection,
  headerComponent,
}: any) => {
  const navigation = useNavigation();

  return (
    <Container>
      <FlatList
        bounces={false}
        data={items}
        onEndReachedThreshold={0.8}
        onEndReached={fetchMore}
        numColumns={3}
        // listKey={Math.random().toString()}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        ListHeaderComponent={headerComponent}
        ListFooterComponent={() => (loadingMore ? <LoadingIndicator /> : null)}
        // progressViewOffset={50}
        contentContainerStyle={{ paddingBottom: 40 }}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <Thumbnail
            image={item?.images?.[0]?.file.thumbnail || item?.file?.thumbnail} // Aguardando implementação de sequências
            sizeIndicator={item?.images?.length}
            onPress={() => {
              navigation.navigate('PhotoPreview', {
                id: item?.id,
                typeName: item?.__typename,
                isUserCollection,
              });
            }}
          />
        )}
      />
    </Container>
  );
};

export default PhotoGrid;
