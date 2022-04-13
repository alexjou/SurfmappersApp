import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import EditIcon from '@components/EditIcon';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  margin-bottom: 90px;
`;

export const CoverView = styled.View`
  width: ${width}px;
  justify-content: center;
  align-items: center;
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
  width: 146px;
  height: 146px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
  top: 55px;
`;

export const EditIconAvatar = styled(EditIcon)`
  position: absolute;
  top: 60px;
`;
export const EditIconCover = styled(EditIcon)`
  position: absolute;
  right: 20px;
  bottom: 24px;
`;
