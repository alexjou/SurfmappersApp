// eslint-disable-next-line no-use-before-define
import React from 'react';
import SelectPaymentMethod from '@components/Cart/Dialogs/SelectPaymentMethod';
import translate from '@locales/index';
import Header from '@components/Header';

const Wallet: React.FC = ({ navigation }: any) => {
  return (
    <>
      <Header
        backButton
        title={translate('wallet')}
        navigation={navigation}
        icons={[]}
      />
      <SelectPaymentMethod disableSelectCard onlyShowCards showEmptyCards />
    </>
  );
};

export default Wallet;
