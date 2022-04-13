import { Alert } from 'react-native';

export const showUnloggedUserAlert = navigation => {
  Alert.alert('Você precisa fazer login para realizar essa ação', '', [
    {
      text: 'Cancelar',
    },
    {
      text: 'Fazer login',
      onPress: () => navigation.navigate('AuthRoutes'),
    },
  ]);
};
