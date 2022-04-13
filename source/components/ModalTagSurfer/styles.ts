import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '@react-navigation/native';
import theme from '@styles/theme/theme';
// import FastImage from 'react-native-fast-image';
const { width } = Dimensions.get('window');

interface IMySelf {
  mySelf?: boolean;
}

export const ModalContainer = styled.View`
  flex: 1;
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.View`
  flex: 0.7;
  width: 100%;
  background-color: white;
  height: 40%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalHeader = styled.View`
  padding: 16px 16px 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #3a3a3a;
  line-height: 14px;
`;

export const ViewSearchBarAndAllPhotos = styled.View`
  padding: 0 16px;
  align-items: center;
`;

export const SearchBar = styled.View`
  width: 100%;
  height: 48px;
  margin: 16px 0;
  padding: 16px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: #f3f3f3;
`;

export const LupaIcon = styled(MaterialIcons).attrs({
  name: 'magnify',
  color: '#9C9C9C',
  size: 22,
})``;

export const SearchBarInputText = styled.TextInput.attrs({
  placeholder: 'Pesquise pelo surfista',
  placeholderTextColor: '#9C9C9C',
})`
  font-size: 16px;
  width: 100%;
  height: 48px;
  padding-left: 8.37px;
`;

export const ViewAllPhotos = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  padding: 12px 16px;
  border-radius: 16px;
  flex-direction: row;
  align-items: center;
  background-color: rgba(11, 186, 231, 0.24);
`;

export const ViewGaleryIcon = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 32px;
  padding: 6px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const GaleryIcon = styled(MaterialIcons).attrs({
  name: 'image-multiple',
  color: 'white',
  size: 20,
})``;

export const GaleryText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: ${DefaultTheme.colors.text};
  margin: 0 8px;
`;

export const SeparatorLine = styled.View`
  width: ${width}px;
  height: 1px;
  margin: 8px 0;
  background-color: #ededed;
`;

export const SurferCard = styled.TouchableOpacity`
  width: ${width}px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const SurferAvatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`;

export const SurferInformationsView = styled.View`
  flex-direction: column;
  padding: 8px 10px;
`;

export const SurferName = styled.Text<IMySelf>`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: ${props =>
    props.mySelf ? theme.colors.primary_blue : theme.colors.gray2};
`;

export const UseridText = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  color: ${theme.colors.gray2};
`;
