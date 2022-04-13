import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

interface IIsSelected {
  isSelected: boolean;
}

export const Container = styled.View`
  width: ${width}px;
  flex-direction: row;
  padding: 24px 16px;
  justify-content: space-between;
`;

export const ChangeLabelButton = styled.TouchableOpacity<IIsSelected>`
  align-items: center;
  flex-direction: row;
  padding: 12px 25px;
  border-radius: 16px;
  background-color: ${props =>
    props.isSelected ? 'rgba(11, 186, 231, 0.24)' : 'white'};
`;

export const LabelIcon = styled(MaterialIcons)<IIsSelected>``;

export const LabelText = styled.Text<IIsSelected>`
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  margin-left: 8px;
  color: ${props =>
    props.isSelected ? theme.colors.primary_blue : theme.colors.gray1};
`;
