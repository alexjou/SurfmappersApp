import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-message';

import Header from '@components/Header';
import Summary from '@components/Cart/Summary';
import logoItau from '../../assets/icons/banks/itau.png';
import logoInter from '../../assets/icons/banks/inter.png';
import logoBb from '../../assets/icons/banks/bb.png';
import logoNu from '../../assets/icons/banks/nu.png';
import logoPicPay from '../../assets/icons/banks/picPay.png';
import logoSantander from '../../assets/icons/banks/santander.png';

import translate from '../../locales';

import {
  AlertIcon,
  AlertText,
  Box,
  ButtonPix,
  ButtonPixText,
  ButtonSolution,
  ButtonSolutionText,
  Description,
  Div,
  DivAlert,
  Image,
  Line,
  SolutionIcon,
  SolutionOptions,
  Title,
} from './styles';

const paymentPix: React.FC = ({ navigation, route }) => {
  const [collapsed, setCollapsed] = useState(false);
  const { cart, pixQrCode } = route.params;

  const copyToClipboard = value => {
    Clipboard.setString(value);
    Toast.show({
      type: 'success',
      text1: translate('pix_code_copied'),
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
      <Header backButton navigation={navigation} icons={[]} title={' '} />

      <Title>Pagar com PIX</Title>
      <Description>
        As fotos serão liberadas dentro de um {'\n'}periodo de até 5 minutos.
      </Description>
      <Line />
      <Summary
        cartFinalPrice={cart.total + cart.total_tips}
        cartFullPrice={cart.subtotal}
        cartDiscount={cart.discount_rate}
        cartTippings={cart.total_tips ? cart.total_tips : 0}
        cartItemsNumber={cart.items.length}
      />
      <Div>
        <ButtonPix onPress={() => copyToClipboard(pixQrCode)}>
          <FeatherIcon
            name="mail"
            color="#fff"
            size={20}
            style={{ marginRight: 8 }}
          />
          <ButtonPixText>Copiar Chave PIX</ButtonPixText>
        </ButtonPix>
      </Div>
      <Line />

      <Box collapsed={collapsed}>
        <ButtonSolution onPress={() => setCollapsed(!collapsed)}>
          <ButtonSolutionText>Solução de problemas</ButtonSolutionText>
          <SolutionIcon name={collapsed ? 'chevron-up' : 'chevron-down'} />
        </ButtonSolution>

        {collapsed && (
          <>
            <Line />
            <DivAlert>
              <AlertIcon name="alert-circle" />
              <AlertText>Onde colar ?</AlertText>
            </DivAlert>

            <SolutionOptions>
              <Image source={logoBb} style={{ marginRight: 8 }} />
              <Image source={logoInter} style={{ marginRight: 8 }} />
              <Image source={logoNu} style={{ marginRight: 8 }} />
              <Image source={logoItau} style={{ marginRight: 8 }} />
              <Image source={logoPicPay} style={{ marginRight: 8 }} />
              <Image source={logoSantander} style={{ marginRight: 8 }} />
            </SolutionOptions>
          </>
        )}
      </Box>
    </ScrollView>
  );
};

export default paymentPix;
