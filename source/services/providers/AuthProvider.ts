import * as Yup from 'yup';
import Api from '@services/api';
import { CLIENT_ID, CLIENT_SECRET } from '@env';

interface ICredentials {
  email: string;
  password: string;
}

interface ICode {
  code: string;
}

interface IFormData {
  formData: string;
}

export const GetAuthCode = async ({ email, password }: ICredentials) => {
  try {
    const url = `/authorize?client_id=${CLIENT_ID}`;
    const credentials = JSON.stringify({
      username: email,
      password,
    });

    const response = await Api.post(url, credentials);

    return response.data.code;
  } catch (error) {
    if (error?.data?.title === 'Invalid credentials.') {
      throw new Error('Credenciais inválidas');
    }

    throw new Error('Usuário ou senha inválidos.');
  }
};

export const GetAccessToken = async ({ code }: ICode) => {
  try {
    const url =
      `/token?client_id=${CLIENT_ID}&code=${code}&` +
      `client_secret=${CLIENT_SECRET}`;

    const response = await Api.get(url);

    return response.data;
  } catch (error) {
    throw new Yup.ValidationError(error);
  }
};

export const GetSignUpData = async ({ formData }: IFormData) => {
  try {
    const url = `/signup?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    const jsonFormData = JSON.stringify(formData);

    const response = await Api.post(url, jsonFormData);

    return response.data;
  } catch (error) {
    if (error.data.title === 'Email already registered.') {
      throw new Error('E-mail já registrado!');
    }

    throw new Error('Não foi possível criar a conta!');
  }
};

export const SignInApple = async (payload: object) => {
  try {
    const url =
      `/apauth?client_id=${CLIENT_ID}&` + `client_secret=${CLIENT_SECRET}`;

    const response = await Api.post(url, JSON.stringify(payload));

    return response.data;
  } catch (error) {
    throw new Yup.ValidationError(error);
  }
};
