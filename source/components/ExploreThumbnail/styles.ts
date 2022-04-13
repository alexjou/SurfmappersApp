// ExploreThumbnail/styles.ts
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

export const ExplorerItem = styled.View`
  max-width: 33.3%;
  width: 100%;
  height: 120px;
  border: solid 1px #fff;
  position: relative;
`;

export const ThumbnailIMG = styled.Image`
  width: 100%;
  height: 100%;
`;

export const GradienteBG = styled(LinearGradient)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const ItemDetails = styled.View`
  position: absolute;
  bottom: 10px;
  left: 10px;
`;

export const ItemText = styled.Text`
  color: #fff;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  margin-top: 2px;
`;
