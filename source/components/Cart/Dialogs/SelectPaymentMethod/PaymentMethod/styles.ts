import { DefaultTheme } from '@react-navigation/native';
import theme from '@styles/theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const PaymentMethodContainer = styled.TouchableOpacity.attrs(
  (props: any) => ({
    selected: props.selected || false,
  }),
)`
  padding: 16px;
  width: 100%;
  height: 80px;
  flex-direction: row;
  border-color: ${props =>
    props.selected ? DefaultTheme.colors.primary : 'lightgray'};
  border-width: 1px;
  border-radius: 5px;
  margin: 8px 0px;
`;

export const ActionsContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const ActionContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin: 0px 16px;
`;

export const ActionLabel = styled.Text.attrs((props: any) => ({
  color: props.color || 'gray',
}))`
  font-weight: bold;
  color: ${props => props.color};
`;

export const FavoriteIcon = styled(MaterialIcons).attrs({
  name: 'star',
  size: 24,
  color: 'gold',
})``;

export const EditIcon = styled(MaterialIcons).attrs({
  name: 'pencil-outline',
  size: 24,
  color: theme.colors.primary_blue,
})``;

export const DeleteIcon = styled(MaterialIcons).attrs({
  name: 'delete-outline',
  size: 24,
  color: 'tomato',
})``;