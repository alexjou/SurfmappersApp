import React from 'react';
import { Linking } from 'react-native';
import Toast from 'react-native-toast-message';
import Clipboard from '@react-native-clipboard/clipboard';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRoute } from '@react-navigation/native';
import { useTheme } from 'styled-components';
import translate from '../../../locales';

import {
  BarCodeContainer,
  BarCodeText,
  ButtonLine,
  ButtonLineText,
  Content,
  CopyButton,
  CopyButtonText,
  Title,
} from './styles';

const BankSlipPreview = () => {
  const theme = useTheme();
  const route = useRoute();

  const { bankSlipUrl, barCode, expirationDate } = route.params;

  const copyToClipboard = () => {
    Clipboard.setString(barCode);
    Toast.show({
      type: 'success',
      text1: translate('barcode_copied'),
    });
  };

  return (
    <Content>
      <Title>Boleto bancário</Title>

      <BarCodeContainer>
        <BarCodeText>{barCode}</BarCodeText>
      </BarCodeContainer>

      <CopyButton onPress={copyToClipboard}>
        <MaterialIcons
          name="content-copy"
          size={24}
          color={theme.colors.white}
        />
        <CopyButtonText>Copiar código do boleto</CopyButtonText>
      </CopyButton>
      <ButtonLine
        onPress={() => {
          Linking.openURL(bankSlipUrl).catch(err =>
            console.error('Unable to open URL'),
          );
        }}
      >
        <MaterialIcons
          name="download"
          size={24}
          color={theme.colors.primary_blue}
        />
        <ButtonLineText>Ver Boleto</ButtonLineText>
      </ButtonLine>
    </Content>
  );
};

export default BankSlipPreview;
