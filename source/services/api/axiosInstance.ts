import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_BASE_URL, CLIENT_ID, CLIENT_SECRET, DEFAULT_TOKEN } from '@env';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

axiosInstance.interceptors.request.use(async config => {
  const token = await AsyncStorage.getItem('@Surfmappers:accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.client_id = CLIENT_ID;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  response => response,
  err => {
    return new Promise(async (resolve, reject) => {
      const originalReq = err.config;

      if (
        err.response.status === 401 &&
        err.config &&
        !err.config.__isRetryRequest
      ) {
        originalReq._retry = true;
        const token = await AsyncStorage.getItem('@Surfmappers:accessToken');
        const refreshToken = await AsyncStorage.getItem(
          '@Surfmappers:refreshToken',
        );
        const payload = {
          token,
          refresh_token: refreshToken,
        };

        const res = axios
          .post(`${API_BASE_URL}/refresh-token`, payload, {
            headers: {
              'Content-Type': 'application/json',
              Authorization: token,
            },
            params: {
              client_id: CLIENT_ID,
              client_secret: CLIENT_SECRET,
            },
          })
          .then(async res => {
            const { data } = res;
            const accessToken = data.access_token || DEFAULT_TOKEN;
            const refreshToken = data.refresh_token;
            await AsyncStorage.multiSet([
              ['@Surfmappers:accessToken', accessToken],
              ['@Surfmappers:refreshToken', refreshToken],
            ]);

            originalReq.headers.Authorization = `Bearer ${accessToken}`;

            return axios(originalReq);
          });

        resolve(res);
      }

      if (err.response.status === 404) {
        return reject(new Error('Serviço ainda não disponível!'));
      }

      if (err.response.status === 500) {
        console.log('err.response', err.response);
        return reject(
          new Error('O servidor não conseguiu concluir a operação!'),
        );
      }

      return reject(err.response);
    });
  },
);

export default axiosInstance;
