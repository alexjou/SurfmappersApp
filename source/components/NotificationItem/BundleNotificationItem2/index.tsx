import React from 'react';
import { get } from 'lodash';
import { Linking, Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Notification } from 'hooks/notifications';
import {
  AcceptButton,
  AcceptButtonText,
  Container,
  ContainerActions,
  ContainerImage,
  ContainerInfo,
  Image,
  ItemTextPhotographer,
  ItemTextTitle,
  ItemTextValue,
  RefuseButton,
  RefuseButtonText
} from './styles';

const BundleNotificationItem = ({
  message,
  date,
  thumbnail,
  target,
  read,
}: Notification) => {
  const navigation = useNavigation();

  const onPressDetailPackage = () => {
    navigation.navigate('BundleDetails', {
      item: target || {},
    });
  };

  return (
    <Pressable onPress={onPressDetailPackage}>
      <Container read={read}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <ContainerImage>
            <Image source={{ uri: thumbnail }}/>
          </ContainerImage>
          <ContainerInfo>
            <ItemTextTitle>Novo pacote {get(target, 'album.spot.name', '')} </ItemTextTitle>
            <ItemTextPhotographer>{get(target, 'photographer.name', '')}</ItemTextPhotographer>
            <ItemTextValue>R$ {get(target, 'price', '')},00</ItemTextValue>
          </ContainerInfo>
        </View>
        <ContainerActions>
          <AcceptButton>
            <AcceptButtonText>Aceitar</AcceptButtonText>
          </AcceptButton>

          <RefuseButton>
            <RefuseButtonText>Recusar</RefuseButtonText>
          </RefuseButton>
        </ContainerActions>
      </Container>
    </Pressable>
  );
};

export default BundleNotificationItem;
