import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

export const Container = styled.View`
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
  border-color: ${theme.colors.primary_blue};
`;

export const FollowButtonText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${(props: Props) =>
    props.follow ? 'white' : theme.colors.primary_blue};
`;
