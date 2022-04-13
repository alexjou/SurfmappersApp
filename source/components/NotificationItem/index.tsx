import React from 'react';
import { Linking, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Notification } from 'hooks/notifications';
import {
  Container,
  ContainerImage,
  ContainerText,
  Image,
  ItemText,
  ItemTextDate,
} from './styles';

const NotificationItem = ({
  message,
  date,
  thumbnail,
  target,
  read,
}: Notification) => {
  const navigation = useNavigation();

  const navigateToTarget = target => {
    // External URL navigation
    if (target.__typename === 'ExternalLink') {
      Linking.openURL(target.url).catch(err =>
        console.error('Unable to open URL'),
      );

      return;
    }

    // Internal screens navigation
    const screenName = typename => {
      if (typename === 'Bundle') return 'BundleDetails';
      if (typename === 'Album') return 'Session';
      if (typename === 'Photo') return 'PhotoPreview';
      if (
        target.__typename === 'Photographer' ||
        target.__typename === 'Surfer'
      )
        return 'UserPageScreen';
    };

    const screenParams = target => {
      if (target.__typename === 'Bundle') return { item: {id: target.id} };
      if (target.__typename === 'Album') return { slug: target.slug };
      if (target.__typename === 'Photo') return { id: target.id, typename: target.__typename };
      if (
        target.__typename === 'Photographer' ||
        target.__typename === 'Surfer'
      )
        return { username: target.username };
    };

    if (target?.__typename) {
      navigation.navigate(screenName(target.__typename), screenParams(target));
    }
  };

  return (
    <Pressable onPress={() => navigateToTarget(target)}>
      <Container read={read}>
        <ContainerText>
          <ItemText>{message}</ItemText>
          <ItemTextDate>{date}</ItemTextDate>
        </ContainerText>
        <ContainerImage>
          <Image
            source={{ uri: thumbnail }}
            // resizeMethod="scale"
            // resizeMode="contain"
          />
        </ContainerImage>
      </Container>
    </Pressable>
  );
};

export default NotificationItem;
