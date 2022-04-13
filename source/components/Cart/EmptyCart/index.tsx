import React from 'react';
import translate from '@locales/index';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  BackButton,
  BackButtonText,
  Container,
  MessageBody,
  MessageTitle,
} from './styles';

const EmptyCart: React.FC<any> = ({ navigation }) => (
  <Container>
    <MaterialIcons name="cart-remove" size={150} color="lightgray" />
    <MessageTitle>{translate('empty_cart')}</MessageTitle>
    <MessageBody>{translate('empty_cart_message')}</MessageBody>
    <BackButton onPress={() => navigation.goBack()}>
      <BackButtonText>{translate('back')}</BackButtonText>
    </BackButton>
  </Container>
);

export default EmptyCart;
