// eslint-disable-next-line no-use-before-define
import React from 'react';
import SelectPaymentMethod from '@components/Cart/Dialogs/SelectPaymentMethod';
import translate from '../../locales';

import Header from '../../components/Header';

const PaymentMethodScreen: React.FC = ({ navigation }: any) => {
  return (
    <>
      <Header
        backButton
        title={translate('payments')}
        navigation={navigation}
        icons={[]}
      />
      <SelectPaymentMethod />
    </>
  );
};

export default PaymentMethodScreen;
