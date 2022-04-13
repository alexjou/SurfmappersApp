// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView } from 'react-native-gesture-handler';
import translate from '../../../locales';
import CartProductList from '../CartProductList';
import Summary from '../Summary';
import PhotographerRate from './PhotographerRate';
import {
  BackHomeButton,
  BackHomeButtonText,
  CardMethodDescription,
  CardMethodSubtitle,
  CardMethodTitle,
  ChooseText,
  DownloadAllButton,
  DownloadAllButtonText,
  HeaderSubtitle,
  HeaderTitle,
  PaymentMethod,
  Purchase,
} from './styles';

const PurchaseConfirmation: React.FC = ({ navigation }: any) => {
  const [rate, toggleRate] = useState(false);

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
        <HeaderTitle>{translate('purchase_complete')}</HeaderTitle>
        <HeaderSubtitle>
          {translate('purchase_complete_information')}
        </HeaderSubtitle>
        <CartProductList purchased />
        <Summary />

        <PaymentMethod>
          <CardMethodDescription>
            <CardMethodTitle>Crédito • Visa</CardMethodTitle>
            <CardMethodSubtitle>**** 4367</CardMethodSubtitle>
          </CardMethodDescription>
          <ChooseText>VISA</ChooseText>
        </PaymentMethod>

        <Purchase>
          <DownloadAllButton>
            <MaterialIcons name="download" color="white" size={24} />
            <DownloadAllButtonText>
              {translate('download_all')}
            </DownloadAllButtonText>
          </DownloadAllButton>

          <BackHomeButton onPress={() => toggleRate(true)}>
            <BackHomeButtonText>{translate('back_home')}</BackHomeButtonText>
          </BackHomeButton>
        </Purchase>
      </ScrollView>
      <PhotographerRate
        visible={rate}
        changeVisibility={toggleRate}
        navigation={navigation}
      />
    </>
  );
};

export default PurchaseConfirmation;
