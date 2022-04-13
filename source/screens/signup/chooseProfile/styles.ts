import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export const Container = styled(LinearGradient).attrs({
  colors: ['#D0D5D8', '#AEB5B9'],
  start: {
    x: 0,
    y: 0
  },
  end: {
    x: 1,
    y: 0
  },
})`
  flex: 1;
  width: ${width}px;
`;

export const LogoView = styled.View`
  width: ${wp('100%')}px;
  flex: 0.2;
  align-items: center;
  justify-content: center;
  padding-top: 20px;
`;

export const Logo = styled.Image.attrs({
  source: {
    uri: 'https://www.surfmappers.com/static/images/surfmappers_logo_ss.png',
  },
  resizeMode: 'contain',
})`
  width: ${wp('50%')}px;
  height: ${hp('10%')}px;
`;

export const FormView = styled.View`
  width: ${wp('100%')}px;
  flex: 0.8;
  padding: 10% 68px 10px 68px;
  align-items: center;
`;

export const NewUserTitle = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
  color: #25383a;
  margin-bottom: 5px;
`;

export const NewUserTitleBold = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  color: #25383a;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  width: 184px;
  margin-top: 20%;
  max-height: 12%;
  padding: 13px 0;
  background-color: #2f5ba0;
  align-items: center;
  border-radius: 50px;
`;

export const ButtonAnswerLater = styled.TouchableOpacity`
  width: 184px;
  max-height: 12%;
  padding: 13px 0;
  align-items: center;
  border-radius: 50px;
`;

export const TitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  color: white;
`;
