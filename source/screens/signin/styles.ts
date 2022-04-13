import { Dimensions } from 'react-native';
import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const { width } = Dimensions.get('window');

export const Container = styled.ImageBackground.attrs({
  resizeMode: 'cover',
})`
  flex: 1;
`;

export const ContainerGradient = styled(LinearGradient).attrs({
  end: { x: 0, y: 0 },
  start: { x: 0, y: 0.9 },
  colors: ['rgba(208,213,216, -0.11)', 'rgba(174,181,185, 1)'],
})`
  flex: 1;
  width: ${width}px;
`;

export const Header = styled.View`
  width: ${wp('100%')}px;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: ${wp('50%')}px;
  height: ${hp('10%')}px;
`;

export const FormView = styled.View`
  width: ${wp('100%')}px;
  padding: 10px 68px;
  justify-content: space-between;
`;

export const Text = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #25383a;

  text-align: center;
`;

export const TextBold = styled(Text)`
  font-weight: 700;
  font-size: 12px;
`;

export const TermsOfUse = styled.TouchableOpacity`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
`;

export const ViewOr = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const LineOr = styled.View`
  margin-right: 5px;
  margin-left: 5px;
  width: 19px;
  height: 1px;
  background-color: #707070;
`;

export const TextOr = styled(Text)`
  color: #707070;
  margin: 7px 0;
`;

export const LabelInput = styled(Text)`
  color: #000;
  font-weight: 700;
  font-size: 12px;
`;

export const CloseButton = styled.TouchableOpacity`
  align-items: flex-end;
  padding-top: 20px;
  padding-right: 20px;
`;

export const ContainerInput = styled.View``;

export const InputContent = styled.View`
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 184px;
  padding: 13px 0;
  background-color: #2f5ba0;
  align-items: center;
  border-radius: 50px;
  align-self: center;
  margin-top: 20px;
`;

export const TitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  color: white;
`;

export const SignupButton = styled.TouchableOpacity`
  margin-bottom: 20px;
`;

export const FooterView = styled.View`
  width: ${wp('100%')}px;
  align-items: center;
  margin-top: 30px;
`;

export const ForgotPassword = styled(Text)`
  font-weight: 700;
  font-size: 12px;
  color: #2f5ba0;
  text-align: right;
`;
