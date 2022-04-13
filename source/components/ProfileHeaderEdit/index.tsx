// eslint-disable-next-line no-use-before-define
import React from 'react';

import Avatar from '@components/Avatar';
import Cover from '@components/Cover';
import { TouchableOpacity } from 'react-native';
import {
  Container,
  CoverView,
  EditIconAvatar,
  EditIconCover,
  ViewAvatarProfile,
} from './styles';

interface Props {
  user: {
    profileImg: string;
    coverImg: string;
    isPhotographer: boolean;
  };
  onCoverPress: () => void;
  onAvatarPress: () => void;
}

const ProfileHeaderEdit = ({
  user,
  onCoverPress,
  onAvatarPress,
  customAvatar,
  customCover,
}: Props) => {
  const renderAvatar = () => (
    <ViewAvatarProfile>
      <Avatar user={user} customAvatar={customAvatar} size="lg" />
      <EditIconAvatar />
    </ViewAvatarProfile>
  );
  return (
    <Container>
      <Cover user={user} onPress={onCoverPress} customCover={customCover}>
        <CoverView>
          {onAvatarPress ? (
            <TouchableOpacity onPress={onAvatarPress}>
              {renderAvatar()}
            </TouchableOpacity>
          ) : (
            renderAvatar()
          )}
          <EditIconCover />
        </CoverView>
      </Cover>
    </Container>
  );
};

export default ProfileHeaderEdit;
