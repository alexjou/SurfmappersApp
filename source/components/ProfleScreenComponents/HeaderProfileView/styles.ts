import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
`;

export const BackgroundImageHeader = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: ${width}px;
  height: 120px;
`;

export const ViewAvatarProfile = styled(LinearGradient).attrs({
  colors: ['#007AFF', '#0BBAE7', '#34C759'],
})`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
  top: 78px;
  left: 16px;
`;
