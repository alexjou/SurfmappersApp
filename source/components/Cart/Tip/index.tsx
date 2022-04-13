import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';
import translate from '../../../locales';
import CustomTip from '../Dialogs/CustomTip';
import {
  TipActions,
  TipButton,
  TipButtonText,
  TipCall,
  TipContainer,
  TipMessage,
  TipTitle,
} from './styles';

const Tip: React.FC<any> = ({ tip, setTip }) => {
  const [isModalOpen, setModalVisibility] = useState(false);

  return (
    <TipContainer>
      <TipTitle>{translate('tip')}</TipTitle>
      <TipCall>{translate('tip_call')}</TipCall>
      <TipMessage>{translate('tip_message')}</TipMessage>
      <TipActions>
        <TipButton selected={tip === 0} onPress={() => setTip(0)}>
          <TipButtonText selected={tip === 0}>0</TipButtonText>
        </TipButton>
        <TipButton selected={tip === 3} onPress={() => setTip(3)}>
          <TipButtonText selected={tip === 3}>3</TipButtonText>
        </TipButton>
        <TipButton selected={tip === 5} onPress={() => setTip(5)}>
          <TipButtonText selected={tip === 5}>5</TipButtonText>
        </TipButton>
        <TipButton selected={tip === 7} onPress={() => setTip(7)}>
          <TipButtonText selected={tip === 7}>7</TipButtonText>
        </TipButton>
        <TipButton
          width="30%"
          selected={tip === 'other'}
          onPress={() => setModalVisibility(true)}
        >
          <MaterialIcons
            name="pencil-outline"
            size={18}
            color={tip === 'other' ? theme.colors.primary_blue : 'gray'}
          />
          <TipButtonText selected={tip === 'other'}>
            {translate('other')}
          </TipButtonText>
        </TipButton>
      </TipActions>

      <CustomTip
        visible={isModalOpen}
        changeVisibility={setModalVisibility}
        setTip={setTip}
      />
    </TipContainer>
  );
};

export default Tip;
