import theme from '@styles/theme/theme';
import React, { useState } from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import translate from '../../../../../locales';
import {
  ActionContainer,
  ActionLabel,
  ActionsButton,
  ActionsContainer,
  CardMethodContainer,
  CardMethodDescription,
  CardMethodInformation,
  CardMethodSubtitle,
  CardMethodTitle,
  DeleteIcon,
  EditIcon,
  FavoriteIcon,
} from './styles';

interface CardItem {
  card: {
    type: string;
    brand: string;
    lastNumbers: string;
    favorite?: boolean;
    selected?: boolean;
  };
  selectMethod: Function;
}

const CardMethod: React.FC<CardItem> = ({ card, selectMethod }: CardItem) => {
  const [actions, actionActive] = useState(false);

  const types: any = {
    card_credit: translate('credit'),
    card_debt: translate('debt'),
  };

  if (actions) {
    return (
      <CardMethodContainer
        selected={card.selected}
        activeOpacity={1}
        onPress={() => selectMethod(false)}
      >
        <ActionsContainer>
          <ActionContainer>
            <FavoriteIcon />
            <ActionLabel color="gold">{translate('favorite')}</ActionLabel>
          </ActionContainer>
          <ActionContainer>
            <EditIcon />
            <ActionLabel color={theme.colors.primary_blue}>
              {translate('edit')}
            </ActionLabel>
          </ActionContainer>
          <ActionContainer>
            <DeleteIcon />
            <ActionLabel color="tomato">{translate('delete')}</ActionLabel>
          </ActionContainer>
        </ActionsContainer>
        <ActionsButton onPress={() => actionActive(false)}>
          <MaterialIcons name="close" size={24} />
        </ActionsButton>
      </CardMethodContainer>
    );
  }

  return (
    <CardMethodContainer
      selected={card.selected}
      activeOpacity={1}
      onPress={() => selectMethod(false)}
    >
      <CardMethodInformation>
        {card.favorite && <MaterialIcons name="star" size={24} color="gold" />}
        <MaterialIcons name="credit-card-outline" size={24} />
        <CardMethodDescription>
          <CardMethodTitle>
            {types[card.type]} • {card.brand}
          </CardMethodTitle>
          <CardMethodSubtitle>{card.lastNumbers}</CardMethodSubtitle>
        </CardMethodDescription>
      </CardMethodInformation>
      <ActionsButton onPress={() => actionActive(true)}>
        <MaterialIcons name="dots-vertical" size={24} />
      </ActionsButton>
    </CardMethodContainer>
  );
};

export default CardMethod;
