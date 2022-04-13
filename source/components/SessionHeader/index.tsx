import React from 'react';
import SessionInfo from './SessionInfo';
import PhotographerInfo from './PhotographerInfo';
import SessionFilters from './SessionFilters';

import { SeparatorLine } from './styles';

const SessionHeader = ({
  title,
  date,
  user,
  numberOfPhotos,
  setModalVisible,
  setModalHourlyVisible,
  slug,
  itemSelected,
  onShowAllPhotos,
  startDate,
  endDate,
 onClearHourly
}) => {
  return (
    <>
      <SessionInfo slug={slug} title={title} date={date} />
      <SeparatorLine />
      <PhotographerInfo user={user} />
      <SeparatorLine />
      <SessionFilters
        itemSelected={itemSelected}
        numberOfPhotos={numberOfPhotos}
        setModalVisible={setModalVisible}
        setModalHourlyVisible={setModalHourlyVisible}
        onShowAllPhotos={onShowAllPhotos}
        startDate={startDate}
        endDate={endDate}
        onClearHourly={onClearHourly}
      />
      <SeparatorLine />
    </>
  );
};

export default SessionHeader;
