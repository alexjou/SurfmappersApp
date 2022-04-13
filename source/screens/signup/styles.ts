import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { Text } from '@screens/signin/styles';

const { width } = Dimensions.get('window');

export const Container = styled(LinearGradient).attrs({
  colors: ['#D0D5D8', '#AEB5B9'],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
})`
  flex: 1;
  width: ${width}px;
`;

export const LogoView = styled.View`
  width: ${wp('100%')}px;
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
  padding: 0 68px 0 68px;
  align-items: center;
`;

export const NewUserTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
  line-height: 15px;
  color: #25383a;
  margin-top: 30px;

  text-align: center;
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

export const ButtonCreateAccount = styled.TouchableOpacity`
  width: 184px;
  padding: 13px 0;
  background-color: #2f5ba0;
  align-items: center;
  border-radius: 50px;
  margin-top: 20px;
`;

export const TitleButtonText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  line-height: 17px;
  color: white;
`;
