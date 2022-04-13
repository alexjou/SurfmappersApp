import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  end: { x: 1, y: 0 },
  start: { x: 0, y: 0 },
  colors: ['rgba(156,156,156, 0.4)', 'rgba(156,156,156, 0.9)'],
})`
  flex: 1;
  width: ${width}px;
  justify-content: space-around;
`;

export const Header = styled.View`
  width: ${wp('100%')}px;
  flex: 0.2;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${wp('50%')}px;
  height: ${hp('10%')}px;
`;

export const FormView = styled.View`
  width: ${wp('100%')}px;
  flex: 0.5;
  padding: 10px 68px;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #25383a;

  text-align: center;
`;

export const LoginWithSocialMediaview = styled.View`
  flex: 0.18;
  flex-direction: column;
  justify-content: space-between;
`;

export const TextBold = styled(Text)`
  font-weight: 700;
`;

export const TextWhite = styled(Text)`
  font-weight: 700;
  color: #e5e5e5;
  margin: 7px 0;
`;

export const TextBlue = styled(Text)`
  font-weight: 700;
  color: #2f5ba0;
  margin: 6px 0 18px 0;
`;

export const ContainerInput = styled.View``;

export const InputContent = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const Input = styled.TextInput`
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  margin-bottom: 7px;
  padding-left: 31px;
`;

export const SubmitButton = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100%;
  padding: 13px 0;
  background-color: #2f5ba0;
  align-items: center;
  border-radius: 50px;
  align-self: center;
`;

export const TitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  color: white;
`;

export const ContainerIons = styled.View`
  flex-direction: row;
  justify-content: center;
`;

export const IconLogin = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 36px;
  width: 36px;
  margin: 0 5px;
`;

export const SignupButton = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export const FooterView = styled.View`
  width: ${wp('100%')}px;
  flex: 0.12;
  padding: 30px 0 40px 0;
  align-items: center;
`;
