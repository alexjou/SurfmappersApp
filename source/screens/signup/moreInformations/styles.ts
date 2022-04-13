import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const { width } = Dimensions.get('window');

export const Container = styled(LinearGradient).attrs({
  colors: ['#D0D5D8', '#AEB5B9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  width: ${width}px;
  justify-content: space-around;
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
  flex: 0.5;
  padding: 10% 68px 0 68px;
  align-items: center;
`;

export const NewUserTitle = styled.Text`
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  color: #2f5ba0;
  margin-bottom: 5px;
`;

export const NewUserTitleBold = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #2f5ba0;
`;

export const ViewInputLabel = styled.View`
  width: 100%;
  padding: 4% 15%;
  align-items: center;
`;

export const TextIpuntLabel = styled.Text`
  font-size: 15px;
  font-weight: 400;
  line-height: 15px;
  color: #25383a;
  text-align: center;
`;

export const TextIpuntLabelBold = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  color: #25383a;
`;

export const FormInput = styled.TextInput.attrs({
  placeholderTextColor: '#9C9C9C',
})`
  width: 100%;
  background-color: white;
  border-radius: 10px;
  padding: 18px 30px;
  margin: 5px 5px;
  color: #141414;
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
`;

export const FooterView = styled.View`
  width: ${width}px;
  flex: 0.3;
  align-items: center;
`;

export const ButtonNext = styled.TouchableOpacity`
  width: 184px;
  padding: 13px 0;
  background-color: #2f5ba0;
  align-items: center;
  border-radius: 50px;
`;

export const TitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  color: white;
`;
