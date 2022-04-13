import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

export const SessionCardContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const SessionInfo = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin-left: 16px;
  width: auto;
`;

export const Date = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 400;
  font-size: 14px;
`;

export const CoverImage = styled.Image`
  width: 120px;
  height: 84px;
  border-radius: 12px;
`;

export const Title = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.primary_blue};
`;

export const PhotographerInfo = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const CameraIcon = styled.Image`
  width: 14px;
  height: 14px;
`;

export const PhotographerName = styled.Text`
  font-weight: 700;
  font-size: 12px;
  margin-left: 3px;
  color: ${theme.colors.dark};
`;
