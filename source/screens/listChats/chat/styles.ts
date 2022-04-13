import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Bubble from 'react-native-gifted-chat/lib/Bubble';
import { DefaultTheme } from '@react-navigation/native';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  width: ${width}px;
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

export const EllipsesIcon = styled(MaterialIcons).attrs({
  name: 'dots-vertical',
  size: 24,
  color: DefaultTheme.colors.text,
})`
  margin-left: 28.99px;
`;

export const CustomBubble = styled(Bubble).attrs({
  optionTitles: ['Copiar texto', 'Cancelar'],
  textStyle: {
    right: {
      color: 'white',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
    left: {
      color: '#141414',
      fontSize: 14,
      fontWeight: '400',
      lineHeight: 20,
    },
  },
  wrapperStyle: {
    left: {
      backgroundColor: '#EDEDED',
      marginVertical: 5,
      padding: 5,
    },
    right: {
      backgroundColor: `${theme.colors.primary_blue}`,
      marginVertical: 5,
      padding: 5,
    },
  },
  timeTextStyle: {
    left: {
      color: '#141414',
    },
    right: {
      color: 'white',
    },
  },
  linkStyle: {
    left: {
      color: 'blue',
    },
    right: {
      color: 'blue',
    },
  },
})``;

/* export const SendMessageView = styled.View`
  bottom: 0;
  position: absolute;
  width: ${width}px;
  flex-direction: column;
`;

export const WhoIsTypingView = styled.View`
  width: ${width}px;
  height: 40px;
  align-items: center;
  padding-left: 16px;
  padding-bottom: 8px;
  background-color: red;
`;

export const WhoIsTyping = styled.Text`
  font-size: 12px;
  font-weight: 400;
  line-height: 12px;
  color: #797979;
`; */

export const MessageBar = styled.View`
  bottom: 0;
  width: 100%;
  height: 60px;
  padding: 10px 16px;
  position: absolute;
  flex-direction: row;
  background-color: #f3f3f3;
  justify-content: space-between;
`;

export const InputMessage = styled.TextInput.attrs({
  placeholderTextColor: '#797979',
})`
  width: 90%;
  height: 40px;
  border: none;
  padding: 10px;
  color: #141414;
  font-size: 14px;
  border-radius: 16px;
  background-color: white;
`;

export const SendButton = styled.TouchableOpacity`
  border-radius: 50px;
  align-items: center;
  justify-content: center;
`;

export const SendButtonIcon = styled(MaterialIcons).attrs({
  name: 'send',
  size: 25,
  color: DefaultTheme.colors.text,
})``;
