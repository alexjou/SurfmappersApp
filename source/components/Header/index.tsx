// eslint-disable-next-line no-use-before-define
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Alert } from 'react-native';
import { useCart } from '../../hooks/cart';
import {
  ArrowLeft,
  Badge,
  BadgeText,
  ButtonBack,
  Container,
  ContainerIcons,
  IconItem,
  Logo,
  Title,
  TitleIcon,
} from './styles';
import { useAuth } from '../../hooks/auth';
import {showUnloggedUserAlert} from "@utils/alert";

interface IIcon {
  title?: string;
  icon: string;
  color: string;
  route?: string;
  action?: Function;
  onlyLogged?: boolean;
}

interface IHeaderProps {
  title?: string;
  icons?: IIcon[];
  navigation?: any;
  backButton: boolean;
}

const Header = ({ title, icons, navigation, backButton }: IHeaderProps) => {
  const IMAGE =
    'https://www.surfmappers.com/static/images/surfmappers_logo_ss.png';
  const { length, updateCart } = useCart();
  const { user } = useAuth();

  const exec = (
    route: string | undefined,
    action: Function | undefined,
    onlyLogged: boolean,
  ) => {
    console.log('onlyLogged', onlyLogged);
    if (onlyLogged && !user) {
      // Prevent default action
      showUnloggedUserAlert(navigation);
      return;
    }
    if (navigation && route) {
      navigation.navigate(route);
    } else if (action) {
      action();
    }
  };

  return (
    <Container>
      {backButton && title && (
        <ButtonBack onPress={() => navigation.goBack()}>
          <ArrowLeft />
          <Title>{title}</Title>
        </ButtonBack>
      )}

      {!backButton && title && <Title>{title}</Title>}

      {!title && <Logo source={{ uri: IMAGE }} />}

      <ContainerIcons>
        {icons?.map(
          ({ title, icon, color, route, action, onlyLogged }, index) => {
            return (
              <IconItem
                key={index}
                onPress={() => exec(route, action, onlyLogged)}
              >
                {/* <TitleIcon>{title}</TitleIcon>
              <MaterialIcons name={icon} size={24} color={color} /> */}
                {icon === 'cart-outline' ? (
                  <>
                    <TitleIcon>{title}</TitleIcon>
                    <MaterialIcons
                      name={icon}
                      size={24}
                      color={color}
                      style={{ marginRight: 12 }}
                    />
                    {length > 0 && (
                      <Badge length={length}>
                        <BadgeText>{length > 99 ? '99+' : length}</BadgeText>
                      </Badge>
                    )}
                  </>
                ) : (
                  <>
                    <TitleIcon>{title}</TitleIcon>
                    <MaterialIcons name={icon} size={24} color={color} />
                  </>
                )}
              </IconItem>
            );
          },
        )}
      </ContainerIcons>
    </Container>
  );
};

export default Header;
