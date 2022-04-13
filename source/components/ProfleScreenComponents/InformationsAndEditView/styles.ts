import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

interface IPropsPage {
  from: string;
}

export const Container = styled.View<IPropsPage>`
  width: ${width}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 16px 24px 16px;
  padding-top: ${props => (props.from === 'UserPage' ? 8 : 52)}px;
`;

export const ViewInformations = styled.View`
  flex-direction: column;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  color: ${theme.colors.dark};
`;

export const CityName = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${theme.colors.gray1};
  margin-top: 8px;
`;

export const EditButton = styled.TouchableOpacity`
  border: solid 1px ${theme.colors.dark};
  align-items: center;
  padding: 8px 22px;
  border-radius: 8px;
  background-color: white;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: ${theme.colors.dark};
`;
