// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { Alert, Modal } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { PythonApi } from '@services/api';
import translate from '@locales/index';

import { showUnloggedUserAlert } from '@utils/alert';
import MultiLineSelector from '@components/MultiLineSelector';
import Collapsible from 'react-native-collapsible';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import _ from 'lodash';
import { useAuth } from '../../../hooks/auth';
import { useCart } from '../../../hooks/cart';
import {
  ButtonText,
  ArrowButton,
  Container,
  NumberPhoto,
  PhotoInformations,
  PhotoPrice,
  Title,
  ViewTextAndArrowButton,
  Button,
  Row,
  ModalContainer,
  ModalView,
  TextModalView,
  TextModalButton,
  ModalViewButton,
} from './styles';

interface IAddCartProps {
  id: string;
  price: number;
  typeName: string;
  focusedPhoto: {};
}

const photoQuery = gql`
  query IsPhotoInCart($id: ID) {
    photo(id: $id) {
      id
      isInCart
    }
  }
`;

const sequenceQuery = gql`
  query IsSequenceInCart($id: ID) {
    sequence(id: $id) {
      id
      isInCart
      images {
        id
      }
    }
  }
`;

const frameOptionsQuery = gql`
  query GetFrameOptions($photoId: ID) {
    frameOptions(photoId: $photoId) {
      price
      description
      size
      material
    }
  }
`;

const AddToCartOptions = ({
  id,
  typeName,
  focusedPhoto,
  selectionPrice,
  fullItemPrice,
}: IAddCartProps) => {
  const navigation = useNavigation();
  const { updateCart, changeProductType } = useCart();
  const { user } = useAuth();
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [message, setMessage] = useState('');
  const apolloClient = useApolloClient();

  const isSequence = typeName === 'Sequence';

  const query = isSequence ? sequenceQuery : photoQuery;

  const queryOptions = {
    fetchPolicy: 'network-only',
    variables: {
      id: focusedPhoto?.id || id,
    },
  };

  const {
    data: cartData,
    loading: cartLoading,
    refetch,
  } = useQuery(query, queryOptions);

  const { data: frameOptionsData } = useQuery(frameOptionsQuery, {
    variables: {
      photoId: focusedPhoto?.id || id,
    },
  });

  const isInCart = cartData?.sequence?.isInCart || cartData?.photo?.isInCart;

  const addSequenceInCart = async () => {
    try {
      await PythonApi.Cart.addSequence(id);
      setIsCollapsed(true);
      refetch();
      updateCart();
    } catch (error: any) {
      switch (error?.data?.title) {
        case 'Already has items from other photographer in cart.':
          setIsVisible(!isVisible);
          setMessage(translate('addPhotoOfOtherPhotografer'));
          return;
        case 'Sequence already in cart.':
          setIsVisible(true);
          setMessage(translate('alreadyInCart'));
          return;
        default:
          return Alert.alert(
            _.get(
              error,
              'data.title',
              'Não foi possível adicionar a sequência!',
            ),
          );
      }
    }
  };

  const addPhotoInCart = async (productId: string, productType: Frame) => {
    try {
      let payload = {};
      if (productType.size) {
        payload = {
          frame: {
            size: productType.size,
            type: productType?.material?.toLowerCase(),
          },
        };
      }

      await PythonApi.Cart.addPhoto(productId, payload);

      apolloClient.refetchQueries({
        include: ['GetCartLength', 'GetOwnedStatus'],
      });
    } catch (error: any) {
      switch (error?.data?.title) {
        case 'Photo already in cart.':
          setIsVisible(!isVisible);
          setMessage(translate('photoAlreadyInCart'));
          return;
        default:
          return Alert.alert(
            get(error, 'data.title', 'Não foi possível trocar a moldura!'),
          );
      }
    }
  };

  const handleButtonPress = () => {
    if (!user) {
      showUnloggedUserAlert(navigation);
      return;
    }

    setIsCollapsed(!isCollapsed);
  };

  return (
    <Container>
      <Title>{translate('add_to_cart')}</Title>
      {isInCart ? (
        <Button
          isInCart={isInCart}
          onPress={() => {
            navigation.navigate('Cart');
          }}
        >
          <ButtonText>
            {`${cartData?.sequence?.images?.length || 1} ${translate(
              'selected_photos',
            )}`}
          </ButtonText>
          <ButtonText>
            {translate('see_cart')}
            <ArrowButton />
          </ButtonText>
        </Button>
      ) : (
        <>
          <Row>
            <Button onPress={() => setIsCollapsed(!isCollapsed)}>
              <ButtonText>{translate('singlePhoto')}</ButtonText>
              <PhotoPrice>R${selectionPrice}</PhotoPrice>
            </Button>
            {isSequence && (
              <Button
                style={{ marginLeft: 8 }}
                onPress={() => addSequenceInCart()}
              >
                <ButtonText>{translate('wholeSequence')}</ButtonText>
                <PhotoPrice>R${fullItemPrice}</PhotoPrice>
              </Button>
            )}
          </Row>
          <Collapsible collapsed={isCollapsed}>
            <Title style={{ marginTop: 8 }}>Formatos disponíveis</Title>
            <MultiLineSelector
              data={frameOptionsData?.frameOptions}
              // selected={}
              keysToCompare={['size', 'material']}
              onSelect={frame => {
                addPhotoInCart(focusedPhoto.id, frame);
              }}
            />
          </Collapsible>
        </>
      )}
      <Modal visible={isVisible} animationType="slide" transparent>
        <ModalContainer>
          <ModalView>
            <TextModalView>{message}</TextModalView>
            <ModalViewButton>
              <Button onPress={() => setIsVisible(!isVisible)}>
                <TextModalButton>OK</TextModalButton>
              </Button>
            </ModalViewButton>
          </ModalView>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

export default AddToCartOptions;
