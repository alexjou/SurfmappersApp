import React from 'react';
import { Alert, Pressable, View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import { Notification } from 'hooks/notifications';
import {
  AcceptButton,
  AcceptButtonText,
  Container,
  ContainerActions,
  ContainerImage,
  ContainerInfo,
  ContainerItem,
  Image,
  ItemTextPhotographer,
  ItemTextTitle,
  ItemTextValue,
  RefuseButton,
  RefuseButtonText,
} from './styles';
import { get } from 'lodash';
import { PythonApi } from '@services/api';
import translate from '../../../locales';

const BundleNotificationItem = ({ thumbnail, target, read }: Notification) => {
  const navigation = useNavigation();

  const onPressDetailPackage = () => {
    navigation.navigate('BundleDetails', {
      item: target || {},
    });
  };

  const handleAddPackage = async () => {
    try {
      const { id } = target;
      await PythonApi.Cart.addBundle(id);

      navigation.dispatch(StackActions.pop(2));

      navigation.navigate('Cart');
    } catch (e) {
      Alert.alert(
        get(e, 'response.data.title'),
        'Não foi possível adicionar o pacote!',
      );
    }
  };

  return (
    <Pressable onPress={onPressDetailPackage}>
      <Container read={read}>
        <ContainerItem>
          <ContainerInfo>
            <ItemTextTitle>
              {translate('newPackage')} {get(target, 'album.spot.name', '')}{' '}
            </ItemTextTitle>
            <ItemTextPhotographer>
              {get(target, 'photographer.name', '')}
            </ItemTextPhotographer>
            <ItemTextValue>R$ {get(target, 'price', '')},00</ItemTextValue>
          </ContainerInfo>
          <ContainerImage>
            <Image source={{ uri: thumbnail }} />
          </ContainerImage>
        </ContainerItem>

        {!target?.has_action && (
          <ContainerActions>
            <AcceptButton onPress={handleAddPackage}>
              <AcceptButtonText>{translate('accept')}</AcceptButtonText>
            </AcceptButton>

            <RefuseButton>
              <RefuseButtonText>{translate('decline')}</RefuseButtonText>
            </RefuseButton>
          </ContainerActions>
        )}
      </Container>
    </Pressable>
  );
};

export default BundleNotificationItem;
