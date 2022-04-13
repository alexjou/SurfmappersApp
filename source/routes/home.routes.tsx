import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import UserPage from '@screens/userPage';
import Home from '../screens/home';

const HomeStack = createStackNavigator();

const HomeRoutes = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
    }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="UserPageScreen" component={UserPage} />
  </HomeStack.Navigator>
);

export default HomeRoutes;
