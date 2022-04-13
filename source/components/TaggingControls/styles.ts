import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

export const Container = styled.View`
	flex: 1;
	justify-content: space-between;
	flex-direction: row;
	align-items: center;
	padding: 8px;
`

export const PlusIcon = styled(MaterialIcons).attrs({
  name: 'plus',
  size: 22,
  color: theme.colors.primary_blue,
})``;