import React from 'react';
import {
  ArrowDown,
  ButtonBack,
  ButtonHeader,
  CartIcon,
  Header,
  MenuIcon,
  TextBack,
  ViewButtonsHeader,
} from '@screens/profile/styles';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootDrawerParamList } from '@routes/profile.routes';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useCart } from '../../hooks/cart';
import { Badge, BadgeText } from '@components/Header/styles';
import { TouchableOpacity } from 'react-native';

const HeaderWithMenu: React.FC = ({ user }) => {
  const navigation = useNavigation() as DrawerNavigationProp<
    RootDrawerParamList,
    'Profile'
  >;
  const getFormattedDisplayName = () => {
    return user?.name
      ? user?.name
      : `${user?.allNames?.first} ${user?.allNames?.last}`;
  };
  const { length } = useCart();
  return (
    <Header>
      {user && (
        <>
          <ButtonBack>
            <TextBack>{getFormattedDisplayName()}</TextBack>
            <ArrowDown />
          </ButtonBack>
          <ViewButtonsHeader>
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <MaterialIcons
                name="cart-outline"
                size={24}
                color="black"
                style={{ marginRight: 12 }}
              />
              {length > 0 && (
                <Badge length={length}>
                  <BadgeText>{length > 99 ? '99+' : length}</BadgeText>
                </Badge>
              )}
            </TouchableOpacity>
            <ButtonHeader onPress={() => navigation.openDrawer()}>
              <MenuIcon />
            </ButtonHeader>
          </ViewButtonsHeader>
        </>
      )}
    </Header>
  );
};

export default HeaderWithMenu;
