// eslint-disable-next-line no-use-before-define
import React from 'react';
import translate from '../../../locales';
import {
  ButtonTitle,
  CityName,
  Container,
  EditButton,
  UserName,
  ViewInformations,
} from './styles';

interface IUserData {
  name: string;
  username: string;
  city: string;
  state: string;
  from: string;
}

const InformationsAndEditView = ({
  name,
  username,
  state,
  city,
  from,
}: IUserData) => {
  return (
    <Container from={from}>
      <ViewInformations>
        <UserName>{name || username}</UserName>
        <CityName>{city && state && `${city} - ${state}`}</CityName>
      </ViewInformations>
      {from !== 'UserPage' ? (
        <EditButton>
          <ButtonTitle>{translate('editProfile')}</ButtonTitle>
        </EditButton>
      ) : null}
    </Container>
  );
};

export default InformationsAndEditView;
