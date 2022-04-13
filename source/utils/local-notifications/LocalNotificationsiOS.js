import { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import PushNotificationIos from '@react-native-community/push-notification-ios';
import { Platform } from "react-native";

const LocalNotificationsiOS = () => {
  useEffect(() => {
    if (Platform.OS === 'ios') {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        if (remoteMessage) {
          PushNotificationIos.addNotificationRequest({
            id: remoteMessage.messageId,
            body: remoteMessage.notification.body,
            title: remoteMessage.notification.title,
            userInfo: remoteMessage.data,
          });
        }
      });

      return unsubscribe;
    }
  }, []);

  return null;
};

export default LocalNotificationsiOS;
