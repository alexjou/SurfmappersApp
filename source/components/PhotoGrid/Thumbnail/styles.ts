import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ThumbnailButton = styled.TouchableOpacity`
  max-width: 33.3%;
  width: 100%;
  height: 120px;
  border: solid 1px #fff;
`;

export const ThumbnailImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 100%;
  height: 100%;
`;

export const IconImagesView = styled.View`
  min-width: 24px;
  flex-direction: row;
  display: flex;
  height: 24px;
  align-items: center;
  background-color: rgba(17, 171, 166, 0.64);
  padding: 4px;
  top: 6px;
  right: 6px;
  position: absolute;
  border-radius: 4px;
  z-index: 999;
`;

export const IconText = styled.Text`
  color: #ffffff;
  font-size: 12px;
  margin-right: 2px;
  font-weight: bold;
`;

export const ImagesIcon = styled(MaterialIcons).attrs({
  name: 'image-multiple',
  size: 16,
  color: '#FFFFFF',
})``;
