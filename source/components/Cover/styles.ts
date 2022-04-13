import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const CoverImage = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: ${width}px;
  height: 120px;
`;
