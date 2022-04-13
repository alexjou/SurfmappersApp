import { Dimensions, Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { DefaultTheme } from '@react-navigation/native';
import DatePicker from 'react-native-date-picker';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

export const TitleTime = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-weight: 600;
  color: ${DefaultTheme.colors.text};
  margin: 0 8px;
`;

export const TimeCard = styled.View`
  width: ${width}px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
  padding: 16px;
`;

export const DatePickerView = styled(DatePicker)`
  width: ${width}px;
  ${Platform.select({
    ios: css`
      height: 200px;
    `,
    android: css`
      height: 160px;
    `,
  })};
`;

export const ActionsButtonsView = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-around;
`;

export const ActionButton = styled.TouchableOpacity`
  align-items: center;
  width: 45%;
  padding: 6px 6px;
  background-color: ${(props: Props) =>
    props.active ? theme.colors.primary_blue : 'white'};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${theme.colors.primary_blue};
`;

export const ActionButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${(props: Props) =>
    props.active ? 'white' : theme.colors.primary_blue};
`;
