// eslint-disable-next-line no-use-before-define
import React from 'react';

import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { FollowProvider } from './follow';
import { UserProvider } from './user';
import { NotificationProvider } from './notifications';
import { LocationProvider } from './geolocation';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <LocationProvider>
      <UserProvider>
        <FollowProvider>
          <NotificationProvider>
            <CartProvider>{children}</CartProvider>
          </NotificationProvider>
        </FollowProvider>
      </UserProvider>
    </LocationProvider>
  </AuthProvider>
);

export default AppProvider;
