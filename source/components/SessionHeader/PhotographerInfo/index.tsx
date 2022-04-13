import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import translate from '@locales/index';

import { ActivityIndicator, Alert } from 'react-native';
import {
  CameraIcon,
  CameraView,
  Container,
  FollowButton,
  FollowButtonText,
  NamePhotographer,
  ProfileButton,
  ViewChatAndFollowButtons,
} from './styles';
import { useFollow } from '../../../hooks/follow';
import { useAuth } from '../../../hooks/auth';
import {showUnloggedUserAlert} from "@utils/alert";

const PhotographerInfo = ({ user }) => {
  const navigation = useNavigation();

  const { user: userLogged } = useAuth();
  const { follow, followings, loading } = useFollow();

  const isFollowing = followings.find(
    follower => follower.username === user?.username,
  );

  const onFollowButtonClick = useCallback(() => {
    if (!userLogged) {
      // Prevent default action
      showUnloggedUserAlert(navigation);
      return;
    }
    follow(user?.username, isFollowing);
  }, [user, isFollowing]);

  return (
    <Container>
      <ProfileButton
        onPress={() =>
          navigation.navigate('UserPageScreen', { data: user?.username })
        }
      >
        <CameraView>
          <CameraIcon />
        </CameraView>
        <NamePhotographer>{user?.username}</NamePhotographer>
      </ProfileButton>
      <ViewChatAndFollowButtons>
        {/* <Chat2Button>
			<Chat2Icon />
			</Chat2Button> */}
        <FollowButton follow={isFollowing} onPress={onFollowButtonClick}>
          {!loading ? (
            <FollowButtonText follow={isFollowing}>
              {isFollowing ? translate('following') : translate('follow')}
            </FollowButtonText>
          ) : (
            <ActivityIndicator />
          )}
        </FollowButton>
      </ViewChatAndFollowButtons>
    </Container>
  );
};

export default PhotographerInfo;
