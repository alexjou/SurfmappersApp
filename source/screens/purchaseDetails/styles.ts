import styled from 'styled-components/native';

interface TextProps {
  size: number;
}

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding-horizontal: 16px;
`;

export const Date = styled.Text`
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
  font-size: 14px;
  margin-top: 9px;
  color: #c4c4c4;
`;

export const PhotographerName = styled.Text`
  font-weight: 700;
  font-size: 16px;
  color: #141414;
`;

export const Line = styled.View`
  height: 0;
  width: 100%;
  border: 1px solid #ededed;
  margin-vertical: 23px;
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
