// eslint-disable-next-line no-use-before-define
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CheckinScreen from '@screens/checkin';

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

const Checkin = createStackNavigator();

const CheckinRoutes = () => (
  <Checkin.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
    }}
  >
    <Checkin.Screen name="CheckinScreen" component={CheckinScreen} />
  </Checkin.Navigator>
);

export default CheckinRoutes;
