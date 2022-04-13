import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '@react-navigation/native';


export const Container = styled.View``

export const ThumbnailList = styled.View`
  width: 100%;
  margin-top: -0.5px;
`;

export const ThumbnailView = styled.TouchableOpacity<IIsSelected>`
  padding: 4px;
  border-radius: 4px;
  align-items: center;
  border-color: #141414;
  justify-content: center;
  width: ${(props: any) => (props.isSelected ? 38 : 32)}px;
  height: ${(props: any) => (props.isSelected ? 62 : 56)}px;
  border-width: ${(props: any) => (props.isSelected ? 4 : 0)}px;
`;

export const Thumbnail = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 32px;
  height: 56px;
`;