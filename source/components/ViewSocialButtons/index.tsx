import React, { useCallback } from 'react';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import Toast from 'react-native-simple-toast';
import api from '@services/api';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonAppleAction,
  ButtonAppleIcon,
  ButtonAppleText,
  ButtonAppleView,
  ButtonFacebookAction,
  ButtonFacebookIcon,
  ButtonFacebookText,
  ButtonFacebookView,
  ViewSocial,
} from './styles';
import { useAuth } from '../../hooks/auth';

const ViewSocialContainer = () => {
  const { signInFacebook, signInApple } = useAuth();
  const navigation = useNavigation();

  const handleSignFacebook = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      (result: any) => {
        if (result.isCancelled) {
          Toast.show('Login cancelado');
        } else {
          AccessToken.getCurrentAccessToken().then((data: any) => {
            if (data) {
              onFacebookLoginPress(String(data.accessToken));
            }
          });
        }
      },
      (error: any) => {
        Toast.show(`Login failed with error: ${error}`);
      },
    );
  };

  const onFacebookLoginPress = useCallback((accessToken: string) => {
    api
      .post(
        '/fbauth?client_id=b71a7a1c845646d69e3cacff47725972&client_secret=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJiNzFhN2ExYzg0NTY0NmQ2OWUzY2FjZmY0NzcyNTk3MiJ9.KoOmqDal_7QYVmac-wNzQZLeizBK9GUmNLoxmW_mL4k',
        { access_token: accessToken },
      )
      .then(response => {
        const { data } = response;
        const { user } = data;

        signInFacebook(data).then();
        navigation.navigate('LoggedStack');

        Toast.show(`Bem vindo ${user.first_name} ${user.last_name}`);
      })
      .catch(error => {
        Toast.show(error.response.data.ErrorMessage);
      });
  }, []);

  return (
    <ViewSocial>
      <ButtonFacebookAction onPress={handleSignFacebook}>
        <ButtonFacebookView>
          <ButtonFacebookIcon name="facebook-f" />
          <ButtonFacebookText>Entrar com o Facebook</ButtonFacebookText>
        </ButtonFacebookView>
      </ButtonFacebookAction>

      <ButtonAppleAction onPress={signInApple}>
        <ButtonAppleView>
          <ButtonAppleIcon name="apple" />
          <ButtonAppleText>Entrar com o Apple ID</ButtonAppleText>
        </ButtonAppleView>
      </ButtonAppleAction>
    </ViewSocial>
  );
};

export default ViewSocialContainer;
