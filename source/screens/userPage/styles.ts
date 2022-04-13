import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '@react-navigation/native';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

interface Props {
  follow: boolean;
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

export const ViewChatAndFollowButtons = styled.View`
  width: 100%;
  padding: 10px 16px;
  justify-content: flex-end;
  align-items: flex-end;
  flex-direction: row;
`;

export const Chat2Button = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_blue};
  border-radius: 8px;
  padding: 7px;
`;

export const Chat2Icon = styled(MaterialIcons).attrs({
  name: 'forum',
  size: 20,
  color: '#797979',
})``;

export const FollowButton = styled.TouchableOpacity`
  align-items: center;
  width: 40%;
  padding: 6px 6px;
  margin-left: 16px;
  background-color: ${(props: Props) =>
    props.follow ? theme.colors.primary_blue : 'white'};
  border-radius: 8px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const FollowButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${(props: Props) =>
    props.follow ? 'white' : theme.colors.primary_blue};
`;

export const SeparatorLine = styled.View`
  width: ${width}px;
  height: 1px;
  margin: 16px 0;
  background-color: #ededed;
`;

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

export const SessionView = styled.View`
  width: 100%;
  padding: 12px 16px;
`;

export const EmptyList = styled.View`
  flex: 1;
  align-items: center;
`;
