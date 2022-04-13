// eslint-disable-next-line no-use-before-define
import React, { createContext, useContext, useEffect, useState } from 'react';
import { PythonApi } from '@services/api';
import Toast from 'react-native-simple-toast';
import translate from '@locales/index';

interface FollowContextData {
  followings: [];

  follow(userId: string, isFollowing: boolean): void;
}

const FollowContext = createContext<FollowContextData>({} as FollowContextData);

const FollowProvider: React.FC = ({ children }) => {
  const [followings, setFollowings] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateFollowings = async () => {
    const {
      data: { users },
    } = await PythonApi.Follow.getFollowing();
    setFollowings(users);
  };

  useEffect(() => {
    updateFollowings();
  }, []);

  const follow = async (userId, isFollowing) => {
    setLoading(true);
    try {
      if (!isFollowing) {
        await PythonApi.Follow.follow(userId);
      } else {
        await PythonApi.Follow.unfollow(userId);
      }
      await updateFollowings();
    } catch (e) {
      Toast.show(translate('generic_error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <FollowContext.Provider
      value={{
        follow,
        followings,
        loading,
      }}
    >
      {children}
    </FollowContext.Provider>
  );
};

function useFollow(): FollowContextData {
  const context = useContext(FollowContext);

  if (!context) {
    throw new Error('userFollow must be used within an FollowProvider');
  }

  return context;
}

export { FollowProvider, useFollow };
