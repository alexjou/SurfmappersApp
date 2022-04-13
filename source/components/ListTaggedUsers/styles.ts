import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;

export const AvatarUrl = styled.Image`
  width: 28px;
  height: 28px;
  border-radius: 20px;
  border-width: 2px;
  border-color: ${theme.colors.primary_blue};
`;

export const CounterImg = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary_blue};
  margin-left: 4px;
`;
