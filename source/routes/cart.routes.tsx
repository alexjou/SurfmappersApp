import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '@screens/cart';
import PurchaseConfirmation from '@components/Cart/PurchaseConfirmation';
import PaymentMethod from '@screens/paymentMethod';
import AddNewCreditCard from '@screens/addNewCreditCard';
import UserInformation from '@screens/userInformation';
import BankSlip from '@screens/bankSlip';
import PaymentPix from '@screens/paymentPix';
import UserAddress from '@screens/userAddress';

const CartStack = createStackNavigator();

const CartRoutes = () => (
  <CartStack.Navigator
    screenOptions={{
      headerShown: false,
      animationEnabled: true,
      animationTypeForReplace: 'pop',
      unmountOnBlur: true,
    }}
  >
    <CartStack.Screen name="CartScreen" component={CartScreen} />
    <CartStack.Screen name="SelectPaymentMethod" component={PaymentMethod} />
    <CartStack.Screen
      name="PurchaseConfirmation"
      component={PurchaseConfirmation}
    />
    <CartStack.Screen name="PaymentPix" component={PaymentPix} />
    <CartStack.Screen name="UserAddress" component={UserAddress} />
    <CartStack.Screen name="AddNewCreditCard" component={AddNewCreditCard} />
    <CartStack.Screen name="UserInformation" component={UserInformation} />
    <CartStack.Screen name="BankSlip" component={BankSlip} />
  </CartStack.Navigator>
);

export default CartRoutes;
