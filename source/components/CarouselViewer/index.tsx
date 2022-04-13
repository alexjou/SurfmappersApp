import React, { useRef } from 'react';
import { Dimensions, FlatList } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import PhotoViewer from '@components/PhotoViewer';

import { Container, ThumbnailList, ThumbnailView, Thumbnail } from './styles';

const CarouselViewer = ({ items, setFocusedPhoto, focusedPhoto }) => {
  const sliderWidth = Dimensions.get('window').width;
  const carouselRef = useRef<any>(null);

  const onChangeSelectedItem = (item, index) => {
    setFocusedPhoto({
      index,
      photo: item,
    });
    carouselRef.current.snapToItem(index);
  };

  return (
    <Container>
      <Carousel
        ref={carouselRef}
        data={items}
        firstItem={focusedPhoto?.index}
        renderItem={({ item }) => (
          <PhotoViewer
            source={item?.isOwned ? item?.file?.highRes : item?.file?.watermarked}
            allowTagging
          />
        )}
        onSnapToItem={() => {
          const index = carouselRef?.current?.currentIndex;
          setFocusedPhoto({
            photo: items[index],
            index
          });
        }}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        layout="default"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        enableSnap
        disableIntervalMomentum
        shouldOptimizeUpdates
        removeClippedSubviews={false}
      />
      {items.length > 1 && (
        <ThumbnailList>
          <FlatList
            maxToRenderPerBatch={10}
            data={items}
            horizontal
            initialNumToRender={10}
            keyExtractor={item => item?.id}
            renderItem={({ item, index }: any) => (
              <ThumbnailView
                onPress={() => onChangeSelectedItem(item, index)}
                isSelected={index === focusedPhoto?.index}
              >
                <Thumbnail source={{ uri: item?.file?.thumbnail }} />
              </ThumbnailView>
            )}
            windowSize={10}
          />
        </ThumbnailList>
      )}
    </Container>
  );
};

export default CarouselViewer;
