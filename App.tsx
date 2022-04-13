// eslint-disable-next-line no-use-before-define
import React, { useEffect, useRef } from 'react';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import ApolloProvider from '@services/graphqlClient';
import {
  AppState,
  Platform,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { setLanguageToI18n } from '@locales/index';
import AppRoutes from '@routes/index';
import { ThemeProvider } from 'styled-components';
import theme from '@styles/theme/theme';
import messaging from '@react-native-firebase/messaging';
import Toast, { BaseToast } from 'react-native-toast-message';
import { icons } from 'react-native-toast-message/src/assets/index';
import { PERMISSIONS, request } from 'react-native-permissions';
import * as Sentry from '@sentry/react-native';
import Tracking from '@utils/Tracking';
import linking from './linking';
import RNBootSplash from 'react-native-bootsplash';

if (!__DEV__) {
  Sentry.init({
    dsn: 'https://74530a6b2ba840b2a576ff9e11ae10a2@o176107.ingest.sentry.io/6067380',
    tracesSampleRate: 1,
  });
}

const App = () => {
  const routeNameRef = useRef();
  const navigationRef = useRef();

  useEffect(() => {
    requestNotificationsPermission();
    Tracking.init();
    AppState.addEventListener('change', requestTrackingPermission);
    return AppState.removeEventListener('change', requestTrackingPermission);
  }, []);

  const toastConfig = {
    success: ({ text1, props, ...rest }: any) => (
      <BaseToast
        {...rest}
        style={{
          borderLeftColor: '#378c31',
          backgroundColor: '#378c31',
          height: 60,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          color: '#FFF',
          fontWeight: '300',
          fontSize: 12,
          marginLeft: -20,
        }}
        leadingIcon={icons.success}
        trailingIcon={null}
        text1NumberOfLines={3}
        text1={text1}
        text2=""
      />
    ),
    error: ({ text1, props, ...rest }: any) => (
      <BaseToast
        {...rest}
        style={{
          borderLeftColor: '#e51f24',
          backgroundColor: '#e51f24',
          height: 40,
        }}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        text1Style={{
          color: '#FFF',
          fontWeight: '300',
          fontSize: 12,
        }}
        leadingIcon={null}
        trailingIcon={null}
        text1NumberOfLines={2}
        text1={text1}
        text2=""
      />
    ),
  };

  const requestNotificationsPermission = async () => {
    const authStatus = await messaging().requestPermission({
      sound: true,
      badge: true,
      alert: true,
      carPlay: true,
      criticalAlert: true,
      announcement: true,
    });
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getFcmToken();
      console.log('Authorization status:', authStatus);
    }
  };

  const requestTrackingPermission = async (status: any) => {
    if (Platform.OS === 'ios' && status === 'active') {
      request(PERMISSIONS.IOS.APP_TRACKING_TRANSPARENCY)
        .then(result => console.log(result))
        .catch(error => console.log(error));
    }
  };

  const getFcmToken = async () => {
    const fcmToken = await messaging().getToken();
    console.log('fcmToken', fcmToken);
  };

  setLanguageToI18n();

  const updateCurrentScreen = () => (routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name);

  return (
    <NavigationContainer
      linking={linking}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: 'white',
        },
      }}
      ref={navigationRef}
      onReady={() => {
        RNBootSplash.hide().then();
        updateCurrentScreen();
      }}
      onStateChange={async () => {
        Tracking.screenChanged(
          routeNameRef.current,
          navigationRef?.current?.getCurrentRoute()?.name,
        );
        updateCurrentScreen();
      }}
    >
      <ApolloProvider>
        <ThemeProvider theme={theme}>
          <StatusBar backgroundColor="white" barStyle="dark-content" />
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: 'white',
            }}
          >
            <AppRoutes />
          </SafeAreaView>
        </ThemeProvider>
      </ApolloProvider>
      <Toast config={toastConfig} ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default Sentry.wrap(App);
