import { View } from 'react-native';
import React from 'react';
import {
  AdressColum,
  AdressData,
  AdressDataRow,
  ButtonWithAddress,
  ButtonWithoutAddress,
  DeliveryContainer,
  DeliveryTitle,
  LabelAdress,
  ValueAdress,
} from '@components/Cart/Delivery/styles';
import translate from '@locales/index';
import { useNavigation } from '@react-navigation/native';

const Delivery: React.FC = ({ address }) => {
  const navigation = useNavigation();
  console.log('address', address);
  return (
    <DeliveryContainer>
      <DeliveryTitle>{translate('deliveryAddress')}</DeliveryTitle>
      {address ? (
        <View>
          <AdressDataRow>
            <AdressColum>
              <LabelAdress>{translate('zip_code')}</LabelAdress>
              <ValueAdress>{address?.zipCode}</ValueAdress>
            </AdressColum>
            <AdressColum>
              <LabelAdress>{translate('city')}</LabelAdress>
              <ValueAdress>{address?.city}</ValueAdress>
            </AdressColum>
          </AdressDataRow>
          <AdressData>
            <LabelAdress>{translate('street')}</LabelAdress>
            <ValueAdress>{address?.street}</ValueAdress>
          </AdressData>
          <AdressDataRow>
            <AdressColum>
              <LabelAdress>{translate('district')}</LabelAdress>
              <ValueAdress>{address?.neighbourhood}</ValueAdress>
            </AdressColum>
            <AdressColum>
              <LabelAdress>{translate('number')}</LabelAdress>
              <ValueAdress>{address?.number}</ValueAdress>
            </AdressColum>
          </AdressDataRow>
          <AdressData>
            <LabelAdress>{translate('complement')}</LabelAdress>
            <ValueAdress>{address?.complement || '-'}</ValueAdress>
          </AdressData>
          <ButtonWithAddress
            title={translate('editAddress')}
            onPress={() => navigation.navigate('UserAddress')}
          />
        </View>
      ) : (
        <ButtonWithoutAddress
          title={translate('addAddress')}
          onPress={() => navigation.navigate('UserAddress')}
        />
      )}
    </DeliveryContainer>
  );
};

export default Delivery;
