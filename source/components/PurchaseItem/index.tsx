import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { getTitleAtStatus } from './getTitleStatus';
import translate from '../../locales';

import {
  Container,
  ContainerImage,
  ContainerText,
  Image,
  ItemAlert,
  ItemTextDate,
  ItemTextTitle,
  ItemTextValue,
  PaymentMethod
} from './styles';

interface IPurchase {
  name?: string;
  status: string;
  total: number;
  thumbnail: string;
  onPress: () => void;
}

const PurchaseItem = ({
  status,
  total,
  name,
  thumbnail,
  onPress,
  paymentMethod,
  isRead,
}: IPurchase) => {
  const navigation = useNavigation();


  const getStatusText = cartStatus => {
    if (cartStatus === 'FINISHED') return 'Compra concluída';
    if (cartStatus === 'PENDING_PAYMENT') return 'Aguardando pagamento';
    return '';
  };

  const getPaymentMethodText = paymentMethod => {
    if (paymentMethod === 'CREDIT_CARD') return translate('credit_card');
    if (paymentMethod === 'PIX') return 'PIX';
    if (paymentMethod === 'BANK_TRANSFER') return 'Transferencia bancária';
    if (paymentMethod === 'PAGARME') return translate('credit_card');
    if (paymentMethod === 'ZOOP') return translate('credit_card');
  };


  return (
    <Container onPress={() => onPress()}>
      <ContainerText>
        <ItemTextTitle status={status}>
          {getStatusText(status)}
        </ItemTextTitle>
        <PaymentMethod>{getPaymentMethodText(paymentMethod)}</PaymentMethod>
        <ItemTextValue>R$ {total}</ItemTextValue>
        <ItemTextDate>{name}</ItemTextDate>
      </ContainerText>
      <ContainerImage>
        <Image source={{ uri: thumbnail }} />
        {name ? <ItemAlert /> : null}
      </ContainerImage>
    </Container>
  );
};

export default PurchaseItem;
