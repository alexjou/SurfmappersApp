import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

interface IIsFavorite {
  isFavorite?: boolean;
}

export const Container = styled.View`
  flex-direction: column;
  padding: 8px 16px;
`;

export const OptionButtons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const OptionButton = styled.TouchableOpacity``;

export const FavoriteIcon = styled(MaterialIcons).attrs({
  size: 25,
})<IIsFavorite>``;

export const ShareIcon = styled(MaterialIcons).attrs({
  name: 'share-variant',
  size: 25,
  color: '#797979',
})`
  margin-left: 16px;
`;

export const PlusIcon = styled(MaterialIcons).attrs({
  name: 'plus',
  size: 22,
  color: theme.colors.primary_blue,
})``;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-left: 30px;
`;

export const ButtonTaggedUser = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-end;
  padding: 7px;
  border: 1px solid #11ABA6;
  border-radius: 10px;
`;
