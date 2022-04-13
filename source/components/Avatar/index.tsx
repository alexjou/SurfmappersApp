// components/Avatar/index.tsx
import React, { useCallback, useState } from 'react';
import { RoundImage } from './styles';
import PhotographerAvatar from '../../assets/placeholders/PhotographerAvatar.png';
import SurferAvatar from '../../assets/placeholders/SurferAvatar.png';

interface IUserData {
  img: string;
  size: 'md' | 'sm' | 'lg';
  type: string;
}

const Avatar = ({ user, customAvatar, size }: IUserData) => {
  const [error, setError] = useState(false);

  const placeholder =
    user?.__typename === 'Photographer' ? PhotographerAvatar : SurferAvatar;

  const getSize = useCallback(() => {
    if (size === 'lg') {
      return 146;
    }
    if (size === 'md') {
      return 74;
    }
    return 56;
  }, [size]);

  console.log('customAvatar', customAvatar);
  return (
    <RoundImage
      size={getSize()}
      onError={() => setError(true)}
      source={
        customAvatar
          ? { uri: `data:image/jpeg;base64,${customAvatar}` }
          : !error && user?.images.avatar
          ? { uri: user.images.avatar }
          : placeholder
      }
    />
  );
};

export default Avatar;
