// eslint-disable-next-line no-use-before-define
import React from 'react';

import {
  ArrowRight,
  BackgroundGradient,
  BackgroundImageHeader,
  Container,
  PortifolioText,
  SubText,
  TextsView,
} from './styles';

interface IUserProps {
  user: {
    coverImage: string;
  };
}

const PortifolioView = ({ user }: IUserProps) => {
  return (
    <Container>
      <BackgroundImageHeader source={{ uri: user.coverImage }}>
        <BackgroundGradient>
          <TextsView>
            <PortifolioText>Veja o portifolio</PortifolioText>
            <SubText>As principais imagens do fotógrafo</SubText>
          </TextsView>
          <ArrowRight />
        </BackgroundGradient>
      </BackgroundImageHeader>
    </Container>
  );
};

export default PortifolioView;
