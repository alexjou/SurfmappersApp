import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';
import notifee, { EventType } from '@notifee/react-native';
import { useNavigation } from '@react-navigation/native';
import { NOTIFICATION_TYPES } from '../../constants/ItemsTypes';

const LocalNotificationsAndroid = () => {
  const navigation = useNavigation();

  const handleClickNotification = notification => {
    const { action_id: id, type } = notification;
    switch (type) {
      case NOTIFICATION_TYPES.TAGGED_USER:
        navigation.navigate('PhotoPreview', {
          id,
          typeName: 'Photo',
        });
        break;
      case NOTIFICATION_TYPES.PHOTO_PURCHASED:
        navigation.navigate('PhotoPreview', {
          id,
          typeName: 'Photo',
        });
        break;
      case NOTIFICATION_TYPES.BUNDLE:
        navigation.navigate('BundleDetails', {
          item: { id }, // Refatorar para enviar somente o id
        });
        break;
      case NOTIFICATION_TYPES.FINISH_ORDER:
        navigation.navigate('PurchasesScreen', {
          item: { id, photos_values: [] }, // Refatorar para a tela receber apenas o id
        });
        break;
      case NOTIFICATION_TYPES.SESSION:
        navigation.navigate('Session', {
          slug: id,
        });
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    if (Platform.OS === 'android') {
      try {
        messaging()
          .getInitialNotification()
          .then(remoteMessage => {
            if (remoteMessage) {
              const { data } = remoteMessage;
              if (data.type && data.action_id) {
                handleClickNotification(data);
              }
            }
          });

        notifee.onForegroundEvent(({ type, detail }) => {
          switch (type) {
            case EventType.DISMISSED:
              console.log('User dismissed notification', detail.notification);
              break;
            case EventType.PRESS:
              const { data } = detail.notification;
              if (data.type && data.action_id) {
                handleClickNotification(data);
              }
              break;
          }
        });
      } catch (e) {
        console.log('Notificação');
      }

      const unsubscribe = messaging().onMessage(async remoteMessage => {
        if (remoteMessage) {
          const channelId = await notifee.createChannel({
            id: 'default',
            name: 'Padrão',
          });

          await notifee.displayNotification({
            title: remoteMessage.notification?.title,
            body: remoteMessage.notification?.body,
            data: remoteMessage.data,
            android: {
              channelId,
              smallIcon: remoteMessage.notification?.android?.imageUrl,
            },
          });
        }
      });

      return unsubscribe;
    }
  }, []);

  return null;
};

export default LocalNotificationsAndroid;
