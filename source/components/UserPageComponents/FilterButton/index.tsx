// eslint-disable-next-line no-use-before-define
import React from 'react';
import translate from '@locales/index';

import {
  ArrowDown,
  Container,
  FilterAndTextView,
  FilterIcon,
  FilterText,
  ViewFilterIcon,
} from './styles';

interface IButtonProps {
  setModalVisible(boolean: boolean): void;
}

const FilterButton = ({ setModalVisible }: IButtonProps) => {
  return (
    <Container onPress={() => setModalVisible(true)}>
      <FilterAndTextView>
        <ViewFilterIcon>
          <FilterIcon />
        </ViewFilterIcon>
        <FilterText>{translate('filter_by_beachs_or_surfers')}</FilterText>
      </FilterAndTextView>
      <ArrowDown />
    </Container>
  );
};

export default FilterButton;
