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

export const MessageIcon = styled(MaterialIcons).attrs({
  name: 'forum-outline',
  size: 24,
  color: DefaultTheme.colors.text,
})`
  margin-left: 28.99px;
`;

export const EllipsesIcon = styled(MaterialIcons).attrs({
  name: 'dots-vertical',
  size: 24,
  color: DefaultTheme.colors.text,
})`
  margin-left: 28.99px;
`;

export const SessionHeader = styled.View`
  width: ${width}px;
  padding: 20px 16px 0 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TitleAndSubtitleView = styled.View`
  flex: 0.9;
  flex-direction: column;
`;

export const Title = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: ${DefaultTheme.colors.text};
`;

export const Subtitle = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  margin-top: 6px;
  color: #797979;
`;

export const ShareView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_blue};
  border-radius: 8px;
  padding: 6px;
`;

export const ShareIcon = styled(MaterialIcons).attrs({
  name: 'share-variant',
  size: 20,
  color: '#797979',
})``;

export const SeparatorLine = styled.View`
  width: ${width}px;
  height: 1px;
  margin: 24px 0 16px 0;
  background-color: #ededed;
`;

export const PhotographerHeader = styled.View`
  width: ${width}px;
  padding: 0 16px;
  justify-content: space-between;
  flex-direction: row;
`;

export const ProfileButton = styled.TouchableOpacity`
  width: 40%;
  align-items: center;
  flex-direction: row;
`;

export const CameraView = styled.View`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: gray;
  border-radius: 8px;
  padding: 7px;
`;

export const CameraIcon = styled(MaterialIcons).attrs({
  name: 'camera-outline',
  size: 20,
  color: 'gray',
})``;

export const NamePhotographer = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: 14px;
  font-weight: 700;
  color: #797979;
  margin-left: 8px;
`;

export const ViewChatAndFollowButtons = styled.View`
  width: 60%;
  justify-content: flex-end;
  align-items: center;
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
  width: 55%;
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

export const SessionFilterView = styled.View`
  width: ${width}px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
  justify-content: space-between;
`;

export const PhotoCountText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary_blue};
`;

export const FilterButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  padding: 13px 8px;
  border-radius: 16px;
  background-color: rgba(11, 186, 231, 0.24);
`;

export const ViewFilterIcon = styled.View`
  width: 26px;
  height: 26px;
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const FilterIcon = styled(MaterialIcons).attrs({
  name: 'filter',
  color: 'white',
  size: 18,
})``;

export const FilterText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary_blue};
  margin: 0 8px;
`;

export const ArrowDown = styled(MaterialIcons).attrs({
  name: 'chevron-down',
  color: theme.colors.primary_blue,
  size: 25,
})``;

export const ViewTextHour = styled.View`
  width: ${width}px;
  padding: 20px 16px;
`;

export const TextHour = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary_blue};
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
