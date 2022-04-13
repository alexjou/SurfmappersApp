import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '@screens/search';
import ExplorerScreen from '../screens/explorer';

const ExplorerStack = createStackNavigator();

const ExplorerRoutes = () => (
  <ExplorerStack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
    }}
  >
    <ExplorerStack.Screen name="Explorer" component={ExplorerScreen} />
    <ExplorerStack.Screen name="SearchScreen" component={Search} />
  </ExplorerStack.Navigator>
);

export default ExplorerRoutes;
