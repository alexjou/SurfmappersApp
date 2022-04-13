import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

interface IIsSelected {
  isSelected?: boolean;
}

export const Container = styled.View``;

export const PhotoPreview = styled.View`
  width: ${width}px;
  height: 357px;
`;

export const Photo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${width}px;
  height: 357px;
`;

export const TaggedUsersMenu = styled.View`
  width: ${width}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  position: absolute;
  bottom: 0;
`;

export const TaggedUsers = styled.TouchableOpacity`
  flex: 0.4;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  border-radius: 8px;
  background-color: rgba(20, 20, 20, 0.64);
`;

export const SurfingIcon = styled(MaterialIcons).attrs({
  name: 'plus',
  size: 22,
  color: 'white',
})``;

export const Username = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: white;
  padding-top: 3px;
`;

export const AddTagButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
  bottom: 16px;
  flex-direction: row;
  align-items: center;
  padding: 5px 7px;
  border-radius: 8px;
  justify-content: space-between;
  background-color: rgba(41, 158, 70, 0.8);
`;

export const PlusIcon = styled(MaterialIcons).attrs({
  name: 'plus',
  size: 22,
  color: 'white',
})``;

export const TagSurferButtonText = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: white;
  padding-top: 3px;
`;

export const PhotoSequenceView = styled.View`
  width: ${width}px;
  margin-top: -0.5px;
`;

export const ThumbNailView = styled.TouchableOpacity<IIsSelected>`
  padding: 4px;
  border-radius: 4px;
  align-items: center;
  border-color: #141414;
  justify-content: center;
  width: ${(props: any) => (props.isSelected ? 38 : 32)}px;
  height: ${(props: any) => (props.isSelected ? 62 : 56)}px;
  border-width: ${(props: any) => (props.isSelected ? 4 : 0)}px;
`;

export const ThumbNail = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 32px;
  height: 56px;
`;

export const LoadingView = styled.View`
  width: 100%;
  height: 357px;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  flex-direction: row;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: theme.colors.dark,
  size: 'large',
})``;

export const LoadingText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.dark};
  margin-left: 10px;
`;
