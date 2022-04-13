// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Text, View } from 'react-native';
import ListTaggedUsers from "@components/ListTaggedUsers";
import theme from '@styles/theme/theme';
import {
  Container,
  FavoriteIcon,
  OptionButton,
  OptionButtons,
  ShareIcon,
  PlusIcon,
  Row,
  ButtonTaggedUser,
} from './styles';

interface IViewOptionsProps {
  isFavorite: boolean;
  setFavorite: Function;
  onShare: Function;
  taggedUsers: any;
}

const ViewOptionButtons = ({
  isFavorite,
  setFavorite,
  onShare,
  taggedUsers,
  setShowModal,
}: IViewOptionsProps) => {
  console.log("viewpt", taggedUsers)
  return (
    <Container>
      <OptionButtons>
        <OptionButton>
          <FavoriteIcon
            isFavorite={isFavorite}
            onPress={() => setFavorite(!isFavorite)}
            name={isFavorite ? 'heart' : 'heart-outline'}
            color={isFavorite ? 'red' : '#797979'}
          />
        </OptionButton>
        <OptionButton onPress={() => onShare()}>
          <ShareIcon />
        </OptionButton>
      </OptionButtons>

      <Row>
        <View>
          <ListTaggedUsers taggedUsers={taggedUsers}/>
        </View>
        <ButtonTaggedUser onPress={() => setShowModal(true)}>
          <PlusIcon />
          <Text style={{color: theme.colors.primary_blue}}>Marcar usuário</Text>
        </ButtonTaggedUser>
      </Row>
    </Container>
  );
};

export default ViewOptionButtons;
