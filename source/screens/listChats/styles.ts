import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  width: ${width}px;
  background-color: white;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 6px;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ArrowLeft = styled(MaterialIcons).attrs({
  name: 'chevron-left',
  size: 30,
  color: 'gray',
})``;

export const TextBack = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  font-weight: 700;
  color: ${DefaultTheme.colors.text};
  line-height: 24px;
`;

export const ViewButtonsHeader = styled.View`
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonHeader = styled.TouchableOpacity``;

export const CartIcon = styled(MaterialIcons).attrs({
  name: 'cart-outline',
  size: 24,
  color: DefaultTheme.colors.text,
})``;

export const EllipsesIcon = styled(MaterialIcons).attrs({
  name: 'dots-vertical',
  size: 24,
  color: DefaultTheme.colors.text,
})`
  margin-left: 28.99px;
`;

export const ViewSearchBar = styled.View`
  width: ${width}px;
  padding: 0 16px;
`;

export const SearchBar = styled.View`
  width: 100%;
  height: 48px;
  margin: 16px 0;
  padding: 14px;
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
  placeholder: 'Pesquisar?',
  placeholderTextColor: '#9C9C9C',
})`
  font-size: 16px;
  width: 100%;
  height: 48px;
  padding-left: 8.37px;
`;

export const SeparatorLine = styled.View`
  width: ${width}px;
  height: 1px;
  margin: 8px 0;
  background-color: #ededed;
`;

export const ViewChatWithUser = styled.TouchableOpacity`
  width: ${width}px;
  padding: 8px 16px;
  align-items: center;
  flex-direction: row;
`;

export const UserAvatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`;

export const UserChatInformationsView = styled.View`
  justify-content: center;
  padding: 8px 16px;
  flex-direction: column;
`;

export const UserFullName = styled.Text`
  font-size: 14px;
  font-weight: 700;
  line-height: 14px;
  color: ${DefaultTheme.colors.text};
`;

export const UserId = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  margin: 4px 0 8px 0;
  color: ${DefaultTheme.colors.text};
`;

export const MessagePreview = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  padding-right: 30px;
  color: ${DefaultTheme.colors.text};
`;
