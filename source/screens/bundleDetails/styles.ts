import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

interface TextProps {
  size: number;
}

export const Container = styled.ScrollView`
  flex: 1;
  padding-horizontal: 16px;
`;

export const TitleAlbum = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.primary_blue};
`;

export const Text = styled.Text<TextProps>`
  font-weight: 400;
  font-size: ${({ size }) => size}px;
  color: #141414;
`;

export const DetailsTitle = styled.Text`
  font-weight: 400;
  font-size: 12px;
  margin-top: 9px;
  color: #c4c4c4;
`;

export const PhotographerName = styled.Text`
  font-weight: 700;
  font-size: 14px;
  color: #141414;
`;

export const Line = styled.View`
  height: 0;
  width: 100%;
  border: 1px solid #ededed;
  margin-vertical: 10px;
`;

export const GridContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Img = styled.Image`
  align-items: center;
  margin: 4px;
  margin-left: 10px;
  width: 93.94px;
  height: 74px;
  border-radius: 8px;
`;

export const AcceptButton = styled.TouchableOpacity`
  align-items: center;
  height: 40px;
  justify-content: center;
  background-color: ${theme.colors.primary_blue};
  border-radius: 4px;
  border-color: ${theme.colors.primary_blue};
  margin-bottom: 10px;
  justify-content: center;
`;

export const AcceptButtonText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  text-align: center;
`;
