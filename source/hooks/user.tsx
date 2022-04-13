// eslint-disable-next-line no-use-before-define
import React, { createContext, useContext, useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_USER } from '@services/query/user';
import Tracking from '@utils/Tracking';
import { useAuth } from './auth';

interface Photo {
  id: string;
}

interface TaggedPhoto {
  id: string;
}

interface User {
  id: string;
  username: string;
  coverImg: string;
  profileImg: string;
  isPhotographer: boolean;
  name: string;
  boughtPhotos: [Photo];
  followers: [User];
  following: [User];
  taggedPhotos: [TaggedPhoto];
}

interface UserContextData {
  user: User;
}

const UserContext = createContext<UserContextData>({} as UserContextData);

const UserProvider: React.FC = ({ children }) => {
  const { accessToken } = useAuth();

  const [getQuery, { data, error }] = useLazyQuery(GET_USER);

  const user = data?.self;
  useEffect(() => {
    if (accessToken) {
      getQuery();
    }
  }, [accessToken]);

  useEffect(() => {
    if (user) {
      Tracking.logUser(user);
    }
  }, [user]);

  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

function useUser(): UserContextData {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('userUser must be used within an UserProvider');
  }

  return context;
}

export { UserProvider, useUser };
