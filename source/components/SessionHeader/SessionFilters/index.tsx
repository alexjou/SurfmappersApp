import React from 'react';
import translate from '@locales/index';
import dayjs from 'dayjs';
import {
  ArrowDown,
  Container,
  FilterButton,
  FilterIcon,
  FilterText,
  PhotoCountText,
  ViewFilterIcon,
  ViewGroup,
} from './styles';

const SessionFilters = ({
  numberOfPhotos,
  setModalVisible,
  itemSelected,
  setModalHourlyVisible,
  onShowAllPhotos,
  startDate,
  endDate,
  onClearHourly,
}) => {
  return (
    <Container>
      <PhotoCountText>
        {numberOfPhotos} {translate('photos')}
      </PhotoCountText>
      <ViewGroup>
        <FilterButton
          selected={itemSelected}
          onPress={() => setModalVisible(true)}
        >
          <ViewFilterIcon selected={itemSelected}>
            <FilterIcon selected={itemSelected} onPress={onShowAllPhotos} />
          </ViewFilterIcon>
          <FilterText>
            {itemSelected ? itemSelected?.user?.name : 'Surfista'}
          </FilterText>
          {!itemSelected && <ArrowDown />}
        </FilterButton>

        <FilterButton
          selected={startDate && endDate}
          onPress={() => setModalHourlyVisible(true)}
        >
          <ViewFilterIcon selected={startDate && endDate}>
            <FilterIcon
              selected={startDate && endDate}
              onPress={onClearHourly}
            />
          </ViewFilterIcon>
          <FilterText>
            {startDate && endDate
              ? `${dayjs(startDate).format('HH[h]')}-${dayjs(endDate).format(
                  'HH[h]',
                )}`
              : 'Horário'}
          </FilterText>
          {!(startDate && endDate) && <ArrowDown />}
        </FilterButton>
      </ViewGroup>
    </Container>
  );
};

export default SessionFilters;