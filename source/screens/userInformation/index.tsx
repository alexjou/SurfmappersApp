// eslint-disable-next-line no-use-before-define
import React from 'react';

import UserInformation from '@components/Cart/Dialogs/UserInformation';
import Header from '../../components/Header';

const UserInformationScreen: React.FC = ({ navigation }: any) => {
  return (
    <>
      <Header backButton title={' '} navigation={navigation} icons={[]} />
      <UserInformation />
    </>
  );
};

export default UserInformationScreen;
