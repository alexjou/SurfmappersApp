import styled from 'styled-components/native';
import theme from '@styles/theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const HiddenMenu = styled.View`
  flex: 1;
  width: 100%;
  background-color: white;
  flex-direction: column;
  padding: 10px 0 0 16px;
`;
export const ButtonUserId = styled.TouchableOpacity`
  width: 100%;
  left: -8px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextButtonUserId = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  margin-left: 8px;
  color: ${theme.colors.primary_blue};
`;

export const ArrowRight = styled(MaterialIcons).attrs({
  name: 'chevron-right',
  size: 50,
  color: '#141414',
})``;

export const HiddenMenuButtonsView = styled.View`
  flex: 0.95;
`;

export const ButtonHiddenMenu = styled.TouchableOpacity.attrs((props: any) => ({
  routeName: props.routeName || '',
}))`
  padding: 16px 0;
`;

export const ButtonHiddenMenuText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: #141414;
`;

export const LogoutView = styled.View``;

export const FooterVersion = styled.View`
  margin-top: 20px;
`;

export const ButtonLogout = styled.TouchableOpacity``;
