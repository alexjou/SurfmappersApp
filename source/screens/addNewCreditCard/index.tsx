// eslint-disable-next-line no-use-before-define
import React from 'react';
import AddNewCreditCard from '@components/Cart/Dialogs/SelectPaymentMethod/AddNewCreditCard';
import translate from '../../locales';

import Header from '../../components/Header';

const AddNewCreditCardScreen: React.FC = ({ navigation }: any) => {
  return (
    <>
      <Header
        backButton
        title={translate('add_new_card')}
        navigation={navigation}
        icons={[]}
      />
      <AddNewCreditCard />
    </>
  );
};

export default AddNewCreditCardScreen;
