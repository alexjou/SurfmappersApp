import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

export const Container = styled.TouchableOpacity`
  width: 94%;
  margin-top: 16px;
  align-self: center;
  align-items: center;
  flex-direction: row;
  padding: 13px 16px;
  border-radius: 16px;
  background-color: rgba(11, 186, 231, 0.24);
  justify-content: space-between;
`;

export const FilterAndTextView = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ViewFilterIcon = styled.View`
  width: 26px;
  height: 26px;
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary_blue};
`;

export const FilterIcon = styled(MaterialIcons).attrs({
  name: 'filter',
  color: 'white',
  size: 18,
})``;

export const FilterText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: ${theme.colors.primary_blue};
  margin: 0 8px;
`;

export const ArrowDown = styled(MaterialIcons).attrs({
  name: 'chevron-down',
  color: theme.colors.primary_blue,
  size: 25,
})``;
