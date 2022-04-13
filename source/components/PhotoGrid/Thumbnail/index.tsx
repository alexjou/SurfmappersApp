import React from 'react';
import {
  IconImagesView,
  IconText,
  ImagesIcon,
  ThumbnailButton,
  ThumbnailImage,
} from './styles';

const Thumbnail = ({ image, onPress, sizeIndicator }: any) => {
  return (
    <>
      {image ? (
        <ThumbnailButton onPress={onPress}>
          {sizeIndicator ? (
            <>
              <IconImagesView>
                <IconText>{sizeIndicator}</IconText>
                <ImagesIcon />
              </IconImagesView>
              <ThumbnailImage source={{ uri: image }} />
            </>
          ) : (
            <ThumbnailImage source={{ uri: image }} />
          )}
        </ThumbnailButton>
      ) : (
        /* Loading state */
        <ThumbnailButton>
          <IconImagesView>
            <ImagesIcon />
          </IconImagesView>
        </ThumbnailButton>
      )}
    </>
  );
};

export default Thumbnail;
