// eslint-disable-next-line no-use-before-define
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  GetAccessToken,
  GetAuthCode,
  GetSignUpData,
  SignInApple,
} from '@services/providers/AuthProvider';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import { useApolloClient } from '@apollo/client';
import messaging from '@react-native-firebase/messaging';

interface AuthState {
  accessToken: string;
  refreshToken: string;
  user: object;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface SignUpData {
  formData: string;
}

interface AuthContextData {
  user: any;
  accessToken: string;
  loading: boolean;

  signIn(credentials: SignInCredentials): Promise<void>;

  signInFacebook(credentials: any): Promise<void>;

  signInApple(credentials: any): Promise<void>;

  signUp(formData: SignUpData): Promise<void>;

  signOut(): Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);
  const client = useApolloClient();

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [accessToken, refreshToken, user] = await AsyncStorage.multiGet([
        '@Surfmappers:accessToken',
        '@Surfmappers:refreshToken',
        '@Surfmappers:user',
      ]);

      if (accessToken[1] && refreshToken[1] && user[1]) {
        setData({
          accessToken: accessToken[1],
          refreshToken: refreshToken[1],
          user: JSON.parse(user[1]),
        });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    try {
      const code = await GetAuthCode({ email, password });
      const response = await GetAccessToken({ code });

      const accessToken = response.access_token;
      const refreshToken = response.refresh_token;
      const { user } = response;

      await AsyncStorage.multiSet([
        ['@Surfmappers:accessToken', accessToken],
        ['@Surfmappers:refreshToken', refreshToken],
        ['@Surfmappers:user', JSON.stringify(user)],
      ]);

      setData({ accessToken, refreshToken, user });
    } catch (e: any) {
      throw new Error(e.message);
    }
  }, []);

  const signInFacebook = useCallback(async response => {
    if (response) {
      const accessToken = response.token;
      const refreshToken = response.token;
      const { user } = response;

      await AsyncStorage.multiSet([
        ['@Surfmappers:accessToken', accessToken],
        ['@Surfmappers:refreshToken', refreshToken],
        ['@Surfmappers:user', JSON.stringify(user)],
      ]);

      setData({ accessToken, refreshToken: '', user });
    } else {
      throw new Yup.ValidationError('Error logging in with facebook');
    }
  }, []);

  const signInApple = useCallback(async () => {
    try {
      const appleAuthRequestResponse = await appleAuth.performRequest({
        requestedOperation: appleAuth.Operation.LOGIN,
        requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
      });

      const credentialState = await appleAuth.getCredentialStateForUser(
        appleAuthRequestResponse.user,
      );

      if (credentialState === appleAuth.State.AUTHORIZED) {
        const response = await SignInApple(appleAuthRequestResponse);
        const accessToken = response.token;
        const { user } = response;

        await AsyncStorage.multiSet([
          ['@Surfmappers:accessToken', accessToken],
          ['@Surfmappers:refreshToken', accessToken],
          ['@Surfmappers:user', JSON.stringify(user)],
        ]);

        setData({ accessToken, refreshToken: '', user });
      } else {
        throw new Error();
      }
    } catch (e) {
      throw new Error('Error logging in with apple');
    }
  }, []);

  const signUp = useCallback(async ({ formData }) => {
    try {
      const response = await GetSignUpData({ formData });
      const accessToken = response.token;
      const { user } = response;

      await AsyncStorage.multiSet([
        ['@Surfmappers:accessToken', accessToken],
        ['@Surfmappers:refreshToken', accessToken],
        ['@Surfmappers:user', JSON.stringify(user)],
      ]);

      setData({ accessToken, refreshToken: '', user });
    } catch (e: any) {
      throw new Error(e.message);
    }
  }, []);

  const signOut = useCallback(async () => {
    const stringUser = await AsyncStorage.getItem('@Surfmappers:user');

    if (stringUser) {
      const jsonUser = JSON.parse(stringUser);
      await messaging().unsubscribeFromTopic(`user-${jsonUser._id}`);
    }

    await client.clearStore();

    await AsyncStorage.multiRemove([
      '@Surfmappers:user',
      '@Surfmappers:accessToken',
      '@Surfmappers:refreshToken',
    ]);

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user: data.user,
        accessToken: data.accessToken,
        loading,
        signIn,
        signInFacebook,
        signInApple,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
