import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Header from '@components/Header';
import BankSlipPreview from '@components/Cart/BankSlipPreview';

import { Container } from './styles';

const BankSlip: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <Header backButton title navigation={navigation} />
      <BankSlipPreview />
    </Container>
  );
};

export default BankSlip;
