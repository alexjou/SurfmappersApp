import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

export const SpotCardContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

export const SpotInfo = styled.View`
  display: flex;
  padding: 0 8px;
  justify-content: center;
`;

export const Title = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 700;
  font-size: 16px;
`;

export const Location = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 400;
  font-size: 14px;
`;

export const SpotIcon = styled.Image`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-left: 14px;
`;
