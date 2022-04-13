import React from 'react';
import { getTitleAtStatus } from './getTitleStatus';

import {
  Container,
  ContainerImage,
  ContainerText,
  Image,
  ItemTextDate,
  ItemTextTitle,
  ItemTextValue,
} from './styles';

interface ISales {
  buyerName: string;
  status: string;
  total: number;
  thumbnail: string;
  onPress: () => void;
}

const SalesItem = ({
  status,
  buyerName,
  total,
  thumbnail,
  onPress,
  photos,
}: ISales) => {
  return (
    <Container new onPress={() => onPress()}>
      <ContainerText>
        <ItemTextTitle status={status}>
          {getTitleAtStatus(status)}
        </ItemTextTitle>
        <ItemTextValue>R$ {total}</ItemTextValue>
        <ItemTextDate>{buyerName}</ItemTextDate>
      </ContainerText>
      <ContainerImage>
        <Image source={{ uri: thumbnail }} />
      </ContainerImage>
    </Container>
  );
};

export default SalesItem;
