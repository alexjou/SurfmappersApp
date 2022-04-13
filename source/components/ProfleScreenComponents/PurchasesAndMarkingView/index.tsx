// eslint-disable-next-line no-use-before-define
import React from 'react';
import theme from '@styles/theme/theme';
import { ChangeLabelButton, Container, LabelIcon, LabelText } from './styles';
import translate from '../../../locales';

interface ILabelData {
  label: number;

  setLabel(number: number): void;
}

const PurchasesAndMarkingView = ({ setLabel, label }: ILabelData) => {
  return (
    <Container>
      <ChangeLabelButton onPress={() => setLabel(0)} isSelected={label === 0}>
        <LabelIcon
          size={24}
          name="view-dashboard"
          isSelected={label === 0}
          color={label === 0 ? theme.colors.primary_blue : theme.colors.gray}
        />
        <LabelText isSelected={label === 0}>{translate('purchases')}</LabelText>
      </ChangeLabelButton>
      <ChangeLabelButton onPress={() => setLabel(1)} isSelected={label === 1}>
        <LabelIcon
          size={28}
          name="snowboard"
          isSelected={label === 1}
          color={label === 1 ? theme.colors.primary_blue : theme.colors.gray}
        />
        <LabelText isSelected={label === 1}>
          {translate('appointments')}
        </LabelText>
      </ChangeLabelButton>
    </Container>
  );
};

export default PurchasesAndMarkingView;
