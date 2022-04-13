import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '@react-navigation/native';

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

export const EllipsesIcon = styled(MaterialIcons).attrs({
  name: 'dots-vertical',
  size: 24,
  color: DefaultTheme.colors.text,
})`
  margin-left: 28.99px;
`;

export const ScrollBody = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 58 },
})``;

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
