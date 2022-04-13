import { Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
`;

export const BackgroundImageHeader = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  width: ${width}px;
  height: 128px;
`;

export const BackgroundGradient = styled(LinearGradient).attrs({
  colors: [
    'rgba(20, 20, 20, 0.6)',
    'rgba(20, 20, 20, 0.2)',
    'rgba(20, 20, 20, 0)',
  ],
  end: { x: 1, y: 0 },
  start: { x: 0, y: 0 },
})`
  width: 100%;
  height: 128px;
  flex-direction: row;
  padding: 16px;
  align-items: center;
  justify-content: space-between;
`;

export const TextsView = styled.View`
  flex-direction: column;
  flex: 0.6;
`;

export const PortifolioText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: white;
`;

export const SubText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  margin-top: 8px;
  color: white;
`;

export const ArrowRight = styled(MaterialIcons).attrs({
  name: 'chevron-right',
  size: 40,
  color: 'white',
})``;
