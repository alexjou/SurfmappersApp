// eslint-disable-next-line no-use-before-define
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignScreen from '../screens/signin';
import SignupScreen from '../screens/signup';
import ChooseProfile from '../screens/signup/chooseProfile';
import MoreInformations from '../screens/signup/moreInformations';
import ForgotPassword from '../screens/forgotPassword';

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
    }}
  >
    <AuthStack.Screen name="Signin" component={SignScreen} />
    <AuthStack.Screen name="Signup" component={SignupScreen} />
    <AuthStack.Screen name="ChooseProfile" component={ChooseProfile} />
    <AuthStack.Screen name="MoreInformations" component={MoreInformations} />
    <AuthStack.Screen name="ForgotPassword" component={ForgotPassword} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
