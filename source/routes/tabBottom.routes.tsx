// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Text, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';
import ExplorerRoutes from '@routes/explore.routes';
import styled from 'styled-components/native';
import HomeRoutes from '@routes/home.routes';
import { useNavigation } from '@react-navigation/native';
import { showUnloggedUserAlert } from '@utils/alert';
import { useNotification } from '../hooks/notifications';
import translate from '../locales';
import ProfileStack from './profile.routes';
import NotificationsStack from './notifications.routes';
import { useAuth } from '../hooks/auth';

const TabStack = createBottomTabNavigator();

const NotificationDot = styled.View`
  position: absolute;
  right: 3px;
  flex: 1;
  top: 3px;
  border: 1px solid white;
  z-index: 1;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: red;
`;

const TabBottomRoutes = () => {
  const { hasNotificationsUnreaded } = useNotification();

  const { user, loading } = useAuth();

  const navigation = useNavigation();

  const getLabelStyled = ({ color, focused }, tab) => (
    <Text style={{ color, fontWeight: focused ? '700' : '500', fontSize: 12 }}>
      {translate(tab)}
    </Text>
  );

  const onClickProtectedTab = useCallback(
    e => {
      if (!user) {
        // Prevent default action
        showUnloggedUserAlert(navigation);
        e.preventDefault();
      }
    },
    [navigation, user],
  );

  return (
    <TabStack.Navigator
      initialRouteName="Home"
      backBehavior="history"
      tabBarOptions={{
        style: {
          height: 60,
          paddingTop: 5,
          paddingBottom: 10,
        },
        activeTintColor: theme.colors.primary_blue,
        inactiveTintColor: theme.colors.gray,
      }}
    >
      <TabStack.Screen
        name="Home"
        component={HomeRoutes}
        options={{
          tabBarLabel: props => getLabelStyled(props, 'home'),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <TabStack.Screen
        name="Explorer"
        component={ExplorerRoutes}
        options={{
          tabBarLabel: props => getLabelStyled(props, 'explorer'),
          tabBarIcon: ({ color, size, focused }) => (
            <MaterialIcons name="magnify" size={size} color={color} />
          ),
        }}
      />

      {
        // Remover a tab checkin (não será incluso no MVP)
        /* <TabStack.Screen
          name="Checkin"
          component={CheckinStack}
          options={{
            tabBarLabel: translate('checkin'),
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name={'map-marker-outline'}
                size={size}
                color={color}
              />
            )
          }}
        /> */
      }
      <TabStack.Screen
        name="Notifications"
        component={NotificationsStack}
        listeners={{
          tabPress: onClickProtectedTab,
        }}
        options={{
          tabBarLabel: props => getLabelStyled(props, 'notifications'),
          tabBarIcon: ({ color, size }) => (
            <View>
              {hasNotificationsUnreaded && <NotificationDot />}
              <MaterialIcons name="bell-outline" size={size} color={color} />
            </View>
          ),
        }}
      />
      <TabStack.Screen
        name="Profile"
        component={ProfileStack}
        listeners={{
          tabPress: onClickProtectedTab,
        }}
        options={{
          tabBarLabel: props => getLabelStyled(props, 'profile'),
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="account-outline" size={size} color={color} />
          ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabBottomRoutes;
