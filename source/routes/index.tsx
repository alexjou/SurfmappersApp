// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react';
import SessionScreen from '@screens/session';
import PhotoPreview from '@screens/photoPreview';
import BundleDetails from '@screens/bundleDetails';
import { createStackNavigator } from '@react-navigation/stack';
import ListChat from '@screens/listChats';
import Chat from '@screens/listChats/chat';
import PurchasesDetails from '@screens/purchaseDetails';
import Support from '@screens/support';
import WalletScreen from '@screens/wallet';
import AddNewCreditCard from '@screens/addNewCreditCard';
import AuthModal from '@components/AuthModal';
import CartRoutes from './cart.routes';
import AuthRoutes from './auth.routes';
import TabBottomRoutes from './tabBottom.routes';
import { useAuth } from '../hooks/auth';
import AppProvider from '../hooks';
import messaging from '@react-native-firebase/messaging';
import LocalNotificationsAndroid from '@utils/local-notifications/LocalNotificationsAndroid';
import LocalNotificationsiOS from '@utils/local-notifications/LocalNotificationsiOS';

const RootNavigation = createStackNavigator();
const LoggedNavigation = createStackNavigator();

const subscribeToPushNotifications = async (user: any) => {
  await messaging().subscribeToTopic(`user-${user._id}`);
};

const RootStack = () => {
  return (
    <RootNavigation.Navigator
      screenOptions={{
        headerShown: false,
        animationEnabled: true,
        animationTypeForReplace: 'pop',
      }}
    >
      <RootNavigation.Screen name="LoggedStack" component={LoggedStack} />
      <RootNavigation.Screen name="AuthRoutes" component={AuthRoutes} />
    </RootNavigation.Navigator>
  );
};
const LoggedStack = () => {
  const { user, loading } = useAuth();

  if (user) {
    subscribeToPushNotifications(user);
  }

  return (
    <>
      <LoggedNavigation.Navigator
        screenOptions={{
          headerShown: false,
          animationEnabled: true,
          animationTypeForReplace: 'pop',
        }}
      >
        <LoggedNavigation.Screen name="Root" component={TabBottomRoutes} />
        <LoggedNavigation.Screen name="Cart" component={CartRoutes} />
        <LoggedNavigation.Screen name="Session" component={SessionScreen} />
        <LoggedNavigation.Screen name="WalletScreen" component={WalletScreen} />
        <LoggedNavigation.Screen
          name="AddNewCreditCard"
          component={AddNewCreditCard}
        />
        <LoggedNavigation.Screen name="PhotoPreview" component={PhotoPreview} />
        <LoggedNavigation.Screen
          name="BundleDetails"
          component={BundleDetails}
        />
        <LoggedNavigation.Screen name="ListChatsScreen" component={ListChat} />
        <LoggedNavigation.Screen
          name="PurchasesDetails"
          component={PurchasesDetails}
        />
        <LoggedNavigation.Screen name="Support" component={Support} />
        <LoggedNavigation.Screen name="ChatScreen" component={Chat} />
      </LoggedNavigation.Navigator>
      <LocalNotificationsAndroid />
      <LocalNotificationsiOS />
      {!user && <AuthModal />}
    </>
  );
};

const AppNavigation: React.FC = () => <AppProvider>{RootStack()}</AppProvider>;

export default AppNavigation;
