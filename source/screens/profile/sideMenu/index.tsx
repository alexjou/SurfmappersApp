// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import translate from '@locales/index';
import CodePush from 'react-native-code-push';
import { useAuth } from '../../../hooks/auth';
import {
  ArrowRight,
  ButtonHiddenMenu,
  ButtonHiddenMenuText,
  ButtonLogout,
  ButtonUserId,
  FooterVersion,
  HiddenMenu,
  HiddenMenuButtonsView,
  LogoutView,
  TextButtonUserId,
} from './styles';

const SideMenu = (props: any): React.ReactElement => {
  const { signOut, user } = useAuth();
  const { navigation, rootNavigation } = props;

  const [version, setVersion] = useState('');

  useEffect(() => {
    CodePush.getUpdateMetadata().then(metadata => {
      const appVersion = DeviceInfo.getVersion();
      const codepushVersion = metadata?.description;
      setVersion(codepushVersion || appVersion);
    });
  }, []);

  const menuItems = [
    {
      label: translate('wallet'),
      route: 'WalletScreen',
    },
    {
      label: translate('terms_of_use'),
      route: 'WebView',
      externalUrl: 'https://www.surfmappers.com/terms',
    },
    {
      label: translate('privacy'),
      route: 'WebView',
      externalUrl: 'https://www.surfmappers.com/privacypolicy',
    },
    {
      label: translate('support'),
      route: 'Support',
    },
  ];

  return (
    <HiddenMenu>
      <ButtonUserId onPress={() => navigation.closeDrawer()}>
        <TextButtonUserId>{user.first_name}</TextButtonUserId>
        <ArrowRight />
      </ButtonUserId>
      <HiddenMenuButtonsView>
        {menuItems.map(item => (
          <ButtonHiddenMenu
            key={item.route + item.label}
            onPress={() => {
              navigation.navigate(item.route, {
                title: item.label,
                externalUrl: item.externalUrl,
              });
            }}
            routeName={item.route}
          >
            <ButtonHiddenMenuText>{item.label}</ButtonHiddenMenuText>
          </ButtonHiddenMenu>
        ))}
      </HiddenMenuButtonsView>
      <LogoutView>
        <ButtonLogout
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Home' }],
            });
            signOut();
          }}
        >
          <ButtonHiddenMenuText>
            {translate('logoutMyAccount')}
          </ButtonHiddenMenuText>
        </ButtonLogout>
      </LogoutView>
      <FooterVersion>
        <Text>
          {translate('version')} {version}
        </Text>
      </FooterVersion>
    </HiddenMenu>
  );
};

export default SideMenu;
