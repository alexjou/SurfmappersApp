// eslint-disable-next-line no-use-before-define
import React from 'react';
import {
  AppointmentTitle,
  AppoitnmentButton,
  CameraIcon,
  CameraIconView,
  Container,
  DescriptionText,
} from './styles';

const AppointmentSection: React.FC = () => {
  return (
    <Container>
      <DescriptionText>Apaixonado pela minha família do surf!</DescriptionText>
      {/* <AppoitnmentButton>
        <CameraIconView>
          <CameraIcon />
        </CameraIconView>
        <AppointmentTitle>Agendar sessão</AppointmentTitle>
      </AppoitnmentButton> */}
    </Container>
  );
};

export default AppointmentSection;
