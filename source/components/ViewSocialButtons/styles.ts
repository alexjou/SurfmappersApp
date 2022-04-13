import styled from 'styled-components/native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

export const TitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  color: white;
`;

export const ButtonFacebookAction = styled.TouchableOpacity``;
export const ButtonFacebookView = styled.View`
  width: 187px;
  height: 28px;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #4767ab;
  align-items: center;
  margin-bottom: 13px;
  border-radius: 5px;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #25383a;

  text-align: center;
`;

export const ButtonFacebookText = styled(Text)`
  color: #fff;
  font-weight: 400;
  font-size: 12px;
`;

export const ButtonFacebookIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 20px;
`;

export const ViewSocial = styled.View`
  margin-top: 20px;
  justify-content: center;
  align-items: center;
`;

export const ButtonAppleAction = styled.TouchableOpacity``;
export const ButtonAppleView = styled.View`
  width: 187px;
  height: 28px;
  flex-direction: row;
  justify-content: space-evenly;
  background-color: #000;
  align-items: center;
  border-radius: 5px;
`;

export const ButtonAppleText = styled(Text)`
  color: #fff;
  font-weight: 400;
  font-size: 12px;
`;

export const ButtonAppleIcon = styled(FontAwesomeIcon)`
  color: #fff;
  font-size: 20px;
`;

export const ForgotPassword = styled(Text)`
  font-weight: 700;
  font-size: 12px;
  color: #2f5ba0;
  text-align: right;
`;
