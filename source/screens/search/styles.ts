import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

interface TabItemProps {
  isTrue: boolean;
}

interface ColumnProps {
  isCentered: boolean;
}

export const Container = styled.View`
  flex: 1;
`;

export const ViewSearchBar = styled.View`
  width: ${width}px;
  padding: 16px 16px;
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #f3f3f3;
  padding: 4px 16px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.gray,
})`
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  color: ${theme.colors.dark};
  width: 100%;
`;

export const SearchIcon = styled(MaterialIcons).attrs({
  name: 'magnify',
  size: 24,
  color: theme.colors.gray,
})``;
