import React from 'react';
import translate from '@locales/index';
import {
  Container,
  Photo,
  LoadingView,
  LoadingIcon,
  PlusIcon,
  TaggedUsersMenu,
  AddTagButton,
  TagSurferButtonText,
} from './styles';

const PhotoViewer = ({ source, allowTagging }) => {
  const isValidSrc = source?.length > 0;
  return (
    <Container>
      {isValidSrc ? (
        <Photo
          source={{ uri: source }}
          fadeDuration={100}
        />
      ) : (
        <LoadingView>
          <LoadingIcon />
        </LoadingView>
      )}
    </Container>
  );
};

export default PhotoViewer;
