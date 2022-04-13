// eslint-disable-next-line no-use-before-define
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import PhotoPreview from '@screens/photoPreview';
import SideMenuContent from '@screens/profile/sideMenu';
import ProfileEditor from '@screens/profileEditor';
import WebView from '@screens/webView';
import ProfileScreen from '../screens/profile';

export type RootDrawerParamList = {
  Profile: undefined;
  InviteFriend: undefined;
  Purchases: undefined;
  Notifications: undefined;
  About: undefined;
  Terms: undefined;
  Privacity: undefined;
  Suport: undefined;
};

const Profile = createDrawerNavigator<RootDrawerParamList>();

const ProfileRoutes = ({ navigation }: any) => (
  <Profile.Navigator
    screenOptions={{
      headerShown: false,
    }}
    drawerPosition="right"
    drawerType="slide"
    drawerStyle={{ width: '67%', backgroundColor: 'transparent' }}
    drawerContent={props => (
      <SideMenuContent {...props} rootNavigation={navigation} />
    )}
  >
    <Profile.Screen name="Profile" component={ProfileScreen} />
    <Profile.Screen
      name="ProfileEditor"
      component={ProfileEditor}
      options={{ unmountOnBlur: true }}
    />
    <Profile.Screen
      name="PhotoPreview"
      component={PhotoPreview}
      options={{ unmountOnBlur: true }}
    />
    <Profile.Screen
      name="WebView"
      component={WebView}
      options={{ unmountOnBlur: false }}
    />
  </Profile.Navigator>
);

export default ProfileRoutes;
