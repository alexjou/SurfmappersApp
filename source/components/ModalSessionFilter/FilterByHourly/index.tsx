import React, { useEffect, useState } from 'react';

import ModalSessionFilter from '@components/ModalSessionFilter';
import dayjs from 'dayjs';
import {
  DatePickerView,
  TimeCard,
  TitleTime,
  ActionsButtonsView,
  ActionButton,
  ActionButtonText,
} from './styles';

interface IModalProps {
  visible: boolean;
  onRequestClose: any;
  onSelectHourly: void;
}

const ModalFilterByHourly: React.FC<IModalProps> = ({
  visible,
  onRequestClose,
  onSelectHourly,
}) => {
  const [startDate, setStartDate] = useState(
    dayjs().subtract(2, 'hours').set('minutes', 0).toDate(),
  );
  const [endDate, setEndDate] = useState(dayjs().set('minutes', 0).toDate());

  useEffect(() => {
    setEndDate(dayjs(startDate).add(2, 'hours').toDate());
  }, [startDate]);

  return (
    <ModalSessionFilter
      title="Horário"
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <TimeCard>
        <TitleTime>Início</TitleTime>
        <DatePickerView
          mode="time"
          date={startDate}
          onDateChange={setStartDate}
          dividerHeight={1}
        />

        <TitleTime>Término</TitleTime>
        <DatePickerView
          mode="time"
          date={endDate}
          onDateChange={setEndDate}
          dividerHeight={1}
        />
      </TimeCard>

      <ActionsButtonsView>
        <ActionButton onPress={onRequestClose}>
          <ActionButtonText>Cancelar</ActionButtonText>
        </ActionButton>

        <ActionButton
          active
          onPress={() => {
            onSelectHourly(startDate, endDate);
          }}
        >
          <ActionButtonText active>Aplicar</ActionButtonText>
        </ActionButton>
      </ActionsButtonsView>
    </ModalSessionFilter>
  );
};

export default ModalFilterByHourly;
