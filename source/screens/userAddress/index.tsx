// eslint-disable-next-line no-use-before-define
import React from 'react';

import UserAddress from '@components/Cart/Dialogs/UserAddress';
import Header from '../../components/Header';

const userAddress: React.FC = ({ navigation }: any) => {
  return (
    <>
      <Header backButton title={' '} navigation={navigation} icons={[]} />
      <UserAddress />
    </>
  );
};

export default userAddress;
