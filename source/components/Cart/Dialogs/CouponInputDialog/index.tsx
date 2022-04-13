import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert, Modal, Platform, StatusBar } from 'react-native';
import { PythonApi } from '@services/api';
import translate from '../../../../locales';
import { ModalContainer } from '../styles';
import {
  AddButton,
  AddButtonText,
  CloseButton,
  CouponInput,
  CouponInputContainer,
  InputLabel,
  ModalContent,
  ModalHeader,
  ModalTitle,
} from './styles';

// interface CouponInputDialogProps {
// }

const CouponInputDialog = ({ isVisible, setVisibility, refetch }) => {
  const [couponCode, setCouponCode] = useState();

  return (
    <Modal visible={isVisible} animationType="slide" transparent>
      <ModalContainer>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" barStyle="light-content" />
        <ModalContent behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <CouponInputContainer>
            <ModalHeader>
              <ModalTitle>{translate('coupon')}</ModalTitle>
              <CloseButton onPress={() => setVisibility(false)}>
                <MaterialIcons name="close" size={24} />
              </CloseButton>
            </ModalHeader>
            <InputLabel>{translate('coupon_code')}</InputLabel>
            <CouponInput
              autoFocus
              // keyboardType={'numeric'}
              placeholder={translate('coupon_code')}
              onChangeText={text => setCouponCode(text)}
              value={couponCode}
            />
            <AddButton
              onPress={async () => {
                try {
                  const response = await PythonApi.Cart.applyCoupon(couponCode);
                } catch (error) {
                  if (error.response) {
                    Alert.alert(error.response.data.title);
                    return;
                  }
                }

                setVisibility(false);
                refetch(true);
              }}
            >
              <AddButtonText>{translate('add')}</AddButtonText>
            </AddButton>
          </CouponInputContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default CouponInputDialog;
