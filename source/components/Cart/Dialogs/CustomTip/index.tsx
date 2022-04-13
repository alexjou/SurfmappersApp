// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal, Platform, StatusBar } from 'react-native';
import translate from '../../../../locales';
import { ModalContainer } from '../styles';
import {
  AddButton,
  AddButtonText,
  CloseButton,
  InputLabel,
  ModalContent,
  ModalHeader,
  ModalTitle,
  TipInput,
  TipInputContainer,
} from './styles';

interface IModalCustomTipProps {
  visible: boolean;
  changeVisibility: Function;
  setTip: Function;
}

const CustomTip: React.FC<IModalCustomTipProps> = ({
  visible,
  changeVisibility,
  setTip,
}: IModalCustomTipProps) => {
  const [customTip, setCustomTip] = useState();

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <ModalContainer>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" barStyle="light-content" />
        <ModalContent behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TipInputContainer>
            <ModalHeader>
              <ModalTitle>{translate('tip')}</ModalTitle>
              <CloseButton onPress={() => changeVisibility(false)}>
                <MaterialIcons name="close" size={24} />
              </CloseButton>
            </ModalHeader>
            <InputLabel>{translate('enter_value')}</InputLabel>
            <TipInput
              autoFocus
              keyboardType="numeric"
              placeholder={translate('enter_value')}
              onChangeText={text => setCustomTip(text)}
              value={customTip}
            />
            <AddButton
              onPress={() => {
                setTip(customTip);
                changeVisibility(false);
              }}
            >
              <AddButtonText>{translate('add')}</AddButtonText>
            </AddButton>
          </TipInputContainer>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default CustomTip;
