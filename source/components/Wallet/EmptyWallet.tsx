import React from 'react';
import translate from '@locales/index';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  AddNewCardButton,
  AddNewCardButtonText,
  Container,
  MessageBody,
  MessageTitle,
} from './styles';

const EmptyWallet: React.FC<any> = ({ onPressAddNewCard }) => (
  <Container>
    <MaterialIcons name="wallet-membership" size={150} color="lightgray" />
    <MessageTitle>{translate('empty_wallet')}</MessageTitle>
    <MessageBody>{translate('empty_wallet_message')}</MessageBody>
    <AddNewCardButton onPress={onPressAddNewCard}>
      <AddNewCardButtonText>{translate('add_new_card')}</AddNewCardButtonText>
    </AddNewCardButton>
  </Container>
);

export default EmptyWallet;
