import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '@react-navigation/native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('screen');

interface IIsSelected {
  isSelected: boolean;
}

export const Container = styled.View`
  flex: 1;
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

export const ArrowDown = styled(MaterialIcons).attrs({
  name: 'chevron-down',
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

export const MenuIcon = styled(MaterialIcons).attrs({
  name: 'menu',
  size: 24,
  color: DefaultTheme.colors.text,
})`
  margin-left: 10px;
`;

export const PurchasesAndMarkingView = styled.View`
  width: ${width}px;
  flex-direction: row;
  padding: 24px 16px;
  justify-content: space-between;
`;

export const ChangeLabelButton = styled.TouchableOpacity<IIsSelected>`
  align-items: center;
  flex-direction: row;
  padding: 12px 25px;
  border-radius: 16px;
  background-color: ${props =>
    props.isSelected ? 'rgba(11, 186, 231, 0.24)' : 'white'};
`;

export const LabelIcon = styled(MaterialIcons)<IIsSelected>``;

export const LabelText = styled.Text<IIsSelected>`
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  margin-left: 8px;
  color: ${props => (props.isSelected ? theme.colors.primary_blue : '#797979')};
`;

export const ViewGrid = styled.View`
  width: ${width}px;
  padding-top: 16px;
`;

export const HiddenMenu = styled.View`
  flex: 1;
  width: 67%;
  height: ${height}px;
  align-self: flex-end;
  background-color: white;
  flex-direction: column;
  padding: 10px 0 0 16px;
`;
export const ButtonUserId = styled.TouchableOpacity`
  width: 100%;
  left: -8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextButtonUserId = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.primary_blue};
`;

export const ArrowRight = styled(MaterialIcons).attrs({
  name: 'chevron-right',
  size: 50,
  color: '#141414',
})``;

export const HiddenMenuButtonsView = styled.View``;

export const ButtonHiddenMenu = styled.TouchableOpacity`
  padding: 16px 0;
`;

export const ButtonHiddenMenuText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: #141414;
`;

export const LogoutView = styled.View`
  flex: 0.2;
  justify-content: flex-end;
  padding-bottom: ${height > 800 ? hp('8%') : hp('14%')}%;
`;

export const ButtonLogout = styled.TouchableOpacity``;

export const ViewLoading = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  flex-direction: row;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: DefaultTheme.colors.text,
  size: 'large',
})``;

export const LoadingText = styled.Text`
  font-size: 12px;
  color: ${DefaultTheme.colors.text};
  margin-left: 10px;
`;
