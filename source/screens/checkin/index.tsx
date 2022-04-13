// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Text, View } from 'react-native';
import translate from '../../locales';

import Header from '../../components/Header';

const Checkin = () => {
  return (
    <>
      <Header
        icons={[
          { icon: 'cart-outline', onlyLogged: true, color: 'gray' },
          { icon: 'comment-multiple-outline', color: 'gray' },
        ]}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{translate('checkin')}</Text>
      </View>
    </>
  );
};

export default Checkin;
