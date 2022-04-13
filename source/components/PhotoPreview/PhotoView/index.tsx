// eslint-disable-next-line no-use-before-define
import React, { useRef } from 'react';
import { Dimensions, FlatList } from 'react-native';
import translate from '@locales/index';
import Carousel from 'react-native-snap-carousel';

import {
  Container,
  LoadingIcon,
  MarkedSurferName,
  MarkedSurfersButton,
  Photo,
  PhotoPreview,
  PhotoSequenceView,
  PlusIcon,
  SurfingIcon,
  TagSurferButton,
  TagSurferButtonText,
  ThumbNail,
  ThumbNailView,
  ViewLoading,
  ViewMarkedSurfers,
} from './styles';

interface IPhotoViewProps {
  photoUrl: string;
  photoId: string;
  taggedSurfers: object[];
  sequence: [];
  setFocusedPhoto: Function;
  isOwned: boolean;

  setModalIsVisible(boolean: boolean): void;
}

const PhotoView = ({
  photoUrl,
  taggedSurfers,
  setModalIsVisible,
  sequence,
  setFocusedPhoto,
  isOwned,
  photoId,
}: IPhotoViewProps) => {
  const carouselRef = useRef<any>(null);

  const renderItem = ({ item, index }) => {
    const getPhotoUrl = () => {
      return item?.isOwned ? item?.file.highRes : item?.file.watermarked;
    };

    const itemPhotoUrl = photoUrl ? photoUrl : getPhotoUrl();

    return (
      <PhotoPreview>
        {itemPhotoUrl?.length > 0 ? (
          <Photo source={{ uri: itemPhotoUrl }} />
        ) : (
          <ViewLoading>
            <LoadingIcon />
          </ViewLoading>
        )}
        <ViewMarkedSurfers>
          {taggedSurfers && taggedSurfers.length ? (
            <MarkedSurfersButton>
              <SurfingIcon />
              <MarkedSurferName>
                {taggedSurfers.map((user: any, index: any) => (
                  <MarkedSurferName key={index}>
                    {user?.name},{' '}
                  </MarkedSurferName>
                ))}
              </MarkedSurferName>
            </MarkedSurfersButton>
          ) : null}
          {!isOwned && (
            <TagSurferButton onPress={() => setModalIsVisible(true)}>
              <PlusIcon />
              <TagSurferButtonText>
                {translate('tag_surfer')}
              </TagSurferButtonText>
            </TagSurferButton>
          )}
        </ViewMarkedSurfers>
      </PhotoPreview>
    );
  };

  const onChangeSelectedItem = (item, index) => {
    setFocusedPhoto({ ...item });
    carouselRef.current.snapToItem(index);
  };

  const renderItemThumbNail = ({ item, index }: any) => (
    <ThumbNailView
      onPress={() => onChangeSelectedItem(item, index)}
      isSelected={item.id === photoId}
    >
      <ThumbNail source={{ uri: item.file.thumbnail }} />
    </ThumbNailView>
  );

  const keyExtractor = item => item.id.toString();

  const sliderWidth = Dimensions.get('window').width;

  return (
    <Container>
      <Carousel
        ref={carouselRef}
        data={sequence?.images ? sequence?.images : []}
        renderItem={renderItem}
        onSnapToItem={() => {
          const index = carouselRef?.current?.currentIndex;
          setFocusedPhoto(sequence?.images[index]);
        }}
        sliderWidth={sliderWidth}
        itemWidth={sliderWidth}
        layout="default"
        inactiveSlideOpacity={1}
        inactiveSlideScale={1}
        enableSnap
        disableIntervalMomentum
        shouldOptimizeUpdates
        removeClippedSubviews
      />

      {sequence?.images ? (
        <PhotoSequenceView>
          <FlatList
            maxToRenderPerBatch={10}
            data={sequence.images}
            horizontal
            initialNumToRender={10}
            keyExtractor={keyExtractor}
            renderItem={renderItemThumbNail}
            windowSize={10}
          />
        </PhotoSequenceView>
      ) : (
        renderItem({ item: null })
      )}
    </Container>
  );
};

export default PhotoView;
