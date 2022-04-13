// components/Avatar/index.tsx
import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { CoverImage } from './styles';
import CoverImagePlaceholder from '../../assets/placeholders/Cover2.png';

interface IUserData {
  img: string;
  onPress: () => void;
  children: any;
}

const Cover = ({ img, children, onPress, customCover }: IUserData) => {
  const [error, setError] = useState(false);

  const renderCover = () => (
    <CoverImage
      onError={() => setError(true)}
      source={
        customCover
          ? { uri: `data:image/jpeg;base64,${customCover}` }
          : !error && img
          ? { uri: img }
          : CoverImagePlaceholder
      }
    >
      {children}
    </CoverImage>
  );

  return onPress ? (
    <TouchableOpacity onPress={onPress}>{renderCover()}</TouchableOpacity>
  ) : (
    renderCover()
  );
};

export default Cover;
