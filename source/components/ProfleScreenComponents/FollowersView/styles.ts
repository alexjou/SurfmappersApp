import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  flex-direction: row;
`;

export const ViewInfo = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const InfoNumber = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: #141414;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: #797979;
  margin-top: 2px;
`;
