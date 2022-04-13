import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import { DefaultTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');
const { height } = Dimensions.get('screen');

export const ViewHeaderProfile = styled.View`
  width: ${width}px;
`;

export const BackgroundImageHeader = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  background-color: blue;
  width: ${width}px;
  height: 120px;
`;

export const ViewAvatarProfile = styled(LinearGradient).attrs({
  colors: ['#007AFF', '#0BBAE7', '#34C759'],
})`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  align-items: center;
  justify-content: center;
  top: 78px;
  left: 16px;
`;

export const AvatarProfile = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 74px;
  height: 74px;
  border-radius: 74px;
  border-width: 2px;
  border-color: #fff;
`;

export const ViewInformationsAndEdit = styled.View`
  width: ${width}px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 52px 16px 24px 16px;
`;
export const ViewInformations = styled.View`
  flex-direction: column;
`;

export const UserName = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  color: ${DefaultTheme.colors.text};
`;

export const CityName = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #797979;
  margin-top: 8px;
`;

export const EditButton = styled.TouchableOpacity`
  border: solid 1px #141414;
  align-items: center;
  padding: 8px 22px;
  border-radius: 8px;
  background-color: white;
`;

export const ButtonTitle = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: #141414;
`;

export const ViewFollowers = styled.View`
  width: ${width}px;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  flex-direction: row;
`;

export const ViewInfo = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const InfoNumber = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: #141414;
`;

export const InfoTitle = styled.Text`
  font-size: 14px;
  font-weight: 400;
  line-height: 14px;
  color: #797979;
  margin-top: 2px;
`;
