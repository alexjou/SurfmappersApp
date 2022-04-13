// eslint-disable-next-line no-use-before-define
import React from 'react';
import translate from '../../../locales';
import { Container, InfoNumber, InfoTitle, ViewInfo } from './styles';

interface IProps {
  from: string;
  followers: number;
  following: number;
}

const FollowersView = ({ from, followers, following }: IProps) => {
  return (
    <Container>
      <ViewInfo>
        <InfoNumber>20</InfoNumber>
        <InfoTitle>
          {from === 'UserPage' ? 'Sessões' : translate('purchasedPhotos')}
        </InfoTitle>
      </ViewInfo>
      <ViewInfo>
        <InfoNumber>{followers}</InfoNumber>
        <InfoTitle>{translate('followers')}</InfoTitle>
      </ViewInfo>
      <ViewInfo>
        <InfoNumber>{following}</InfoNumber>
        <InfoTitle>{translate('following')}</InfoTitle>
      </ViewInfo>
    </Container>
  );
};

export default FollowersView;
