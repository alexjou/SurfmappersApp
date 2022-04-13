import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const SeparatorLine = styled.View`
  width: ${width}px;
  height: 1px;
  margin: 24px 0 16px 0;
  background-color: #ededed;
`;
