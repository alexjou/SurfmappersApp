// eslint-disable-next-line no-use-before-define
import React from 'react';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'styled-components';
// components
import { Header } from '../components';

import Interactivity from '../screens/notifications/interactivity';
import Purchases from '../screens/notifications/purchases';
import Sales from '../screens/notifications/sales';
import { useUser } from '../hooks/user';
import translate from '../locales';

const Tab = createMaterialTopTabNavigator();

const Notifications = ({ navigation }: any) => {
  const theme = useTheme();
  const { user } = useUser();

  return (
    <>
      <Header
        backButton={false}
        title={translate('yourNotifications')}
        navigation={navigation}
        icons={[
          {
            icon: 'cart-outline',
            onlyLogged: true,
            color: 'black',
            route: 'Cart',
          },
        ]}
      />
      <Tab.Navigator
        tabBarOptions={{
          style: { elevation: 0 },
          tabStyle: {},
          labelStyle: {
            fontSize: 14,
            fontWeight: 'bold',
            textTransform: 'capitalize',
          },
          activeTintColor: `${theme.colors.primary_blue}`,
          inactiveTintColor: '#141414',
        }}
        swipeEnabled={false}
      >
        <Tab.Screen
          name={translate('interactivity')}
          component={Interactivity}
        />
        <Tab.Screen name={translate('purchases')} component={Purchases} />
        {user?.isPhotographer && (
          <Tab.Screen name={translate('sales')} component={Sales} />
        )}
      </Tab.Navigator>
    </>
  );
};

export default Notifications;
