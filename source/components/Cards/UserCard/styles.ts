// import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

export const UserCardContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Avatar = styled.Image`
  border-radius: 50px;
  width: 56px;
  height: 56px;
  margin-right: 16px;
`;

export const UserInfo = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const Name = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 700;
  font-size: 14px;
`;

export const Username = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 400;
  font-size: 14px;
`;
