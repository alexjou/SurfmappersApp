import { CLIENT_ID, CLIENT_SECRET } from '@env';
import formatUserToPytonAPI from '@utils/userFormatter';
import axiosInstance from './axiosInstance';
import asyncForEach from '../../utils/asyncForEach';

const PythonApi = {
  User: {
    getNotifications: () => {
      return axiosInstance.get('/notifications/social');
    },
    updateUserData: userData => {
      const userBasicInformation = formatUserToPytonAPI(userData);
      return axiosInstance.patch('/users/me', userBasicInformation.contactInfo);
    },
    updatePhotographerPreferences: userData => {
      const userPhotographerPreferences = formatUserToPytonAPI(userData);

      return axiosInstance.patch(
        '/photographers/preferences',
        userPhotographerPreferences.settings,
      );
    },
  },
  Login: {
    getAuthCode: (userIdentity, password) => {
      const credentials = JSON.stringify({
        username: userIdentity,
        password,
      });
      return axiosInstance.post(`/authorize?client_id=${CLIENT_ID}`);
    },
    getAccessToken: code => {
      return axiosInstance.get(
        `/token?client_id=${CLIENT_ID}&code=${code}&client_secret=${CLIENT_SECRET}`,
      );
    },
  },
  Cart: {
    clearAllItems: items => {
      return axiosInstance.delete(`/carts/active`);
    },
    addPhoto: (photoId: string, frame = {}) => {
      return axiosInstance.post(`/carts/photos/${photoId}`, frame);
    },
    addSequence: (sequenceId: string) => {
      return axiosInstance.post(`/carts/sequences/${sequenceId}`);
    },
    addBundle: (bundleId: string) => {
      return axiosInstance.post(`/carts/bundles/${bundleId}`);
    },
    removeItem: (productId: string, productType: string) => {
      const getEndpoint = (type: string) => {
        if (type === 'Sequence') return '/carts/sequences';
        if (type === 'Bundle') return '/carts/bundles';
        if (type === 'Photo') return '/carts/photos';
        return;
      };

      const route = getEndpoint(productType);

      return axiosInstance.delete(`${route}/${productId}`);
    },
    removeSequence: (sequenceId: string) => {
      return axiosInstance.delete(`/carts/sequences/${sequenceId}`);
    },
    removeBundle: (bundleId: string) => {
      return axiosInstance.delete(`/carts/packages/${bundleId}`);
    },
    applyCoupon: couponCode => {
      return axiosInstance.post(`/carts/coupon?coupon=${couponCode}`);
    },
    applyTip: (tipValue: number) => {
      return axiosInstance.post('/v3/carts/add_tip', {
        total_tip: tipValue,
      });
    },
    getActiveCart: () => {
      return axiosInstance.get('/carts/active');
    },
    getFrameOptions: () => {
      return axiosInstance.get('/frames/detail');
    },
    applyFrameOnPhoto: (idPhoto, frame) => {
      return axiosInstance.post(`/carts/frames/${idPhoto}`, frame);
    },
    removeFrameOnPhoto: idPhoto => {
      return axiosInstance.delete(`/carts/frames/${idPhoto}`);
    },
    saveAddress: address => {
      return axiosInstance.post('/carts/frames/address', address);
    },
    checkout: (paymentMethod: string, creditCardId: string) => {
      const payload = () => {
        switch (paymentMethod) {
          case 'CREDIT_CARD':
            return {
              payment_method: 0,
              card_id: creditCardId,
            };
          case 'BANK_SLIP':
            return {
              payment_method: 1,
            };
          case 'PIX':
            return {
              payment_method: 5,
            };
        }
      };

      return axiosInstance.post('/v2/carts/checkout', payload());
    },
  },
  Card: {
    addCard: ({
      card_number,
      expiration_month,
      expiration_year,
      holder_name,
      security_code,
    }: object) => {
      const payloadCard = {
        holder_name,
        expiration_month,
        expiration_year,
        card_number,
        security_code,
      };

      return axiosInstance.post('/users/cards', payloadCard);
    },
    getCards: async () => {
      const { data } = await axiosInstance.get('/users/cards');
      return data.cards;
    },
    deleteCard: (creditCardId: string) => {
      return axiosInstance.delete(`/users/cards/${creditCardId}`);
    },
  },
  Follow: {
    getFollowing: async () => {
      return await axiosInstance.get('/following');
    },
    follow: async (userId: string) => {
      return await axiosInstance.post(`/follow/${userId}`, {
        action: 'follow',
      });
    },
    unfollow: async (userId: string) => {
      return await axiosInstance.delete(`/follow/${userId}`);
    },
  },
  Photo: {
    tagUser: (photoId: string, userId: string) => {
      return axiosInstance.post(`/photos/${photoId}/tag_user`, {
        user_to_tag_id: userId,
      });
    },
  },
};

export { PythonApi };
export default axiosInstance;
