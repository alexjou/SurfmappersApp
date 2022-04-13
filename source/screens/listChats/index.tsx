// eslint-disable-next-line no-use-before-define
import Header from '@components/Header';
import React from 'react';
import { FlatList } from 'react-native';
import translate from '../../locales';
import { mockupChatMessages } from '../../mockup';
import {
  Container,
  LupaIcon,
  MessagePreview,
  SearchBar,
  SearchBarInputText,
  SeparatorLine,
  UserAvatar,
  UserChatInformationsView,
  UserFullName,
  UserId,
  ViewChatWithUser,
  ViewSearchBar,
} from './styles';

const MockupChats = [
  mockupChatMessages,
  mockupChatMessages,
  mockupChatMessages,
  mockupChatMessages,
  mockupChatMessages,
  mockupChatMessages,
  mockupChatMessages,
];

const ListChat: React.FC = ({ navigation }: any) => {
  return (
    <Container>
      <Header
        backButton
        title={translate('messages')}
        navigation={navigation}
        icons={[
          {
            icon: 'cart-outline',
            onlyLogged: true,
            color: 'black',
            route: 'Cart',
          },
          { icon: 'dots-vertical', color: 'black' },
        ]}
      />
      <ViewSearchBar>
        <SearchBar>
          <LupaIcon />
          <SearchBarInputText />
        </SearchBar>
      </ViewSearchBar>
      <FlatList
        bounces={false}
        data={MockupChats}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <SeparatorLine />}
        contentContainerStyle={{ paddingBottom: 30 }}
        renderItem={({ item }: any) => (
          <ViewChatWithUser
            onPress={() => navigation.navigate('ChatScreen', { item })}
          >
            <UserAvatar source={item[0]?.user?.avatar} />
            <UserChatInformationsView>
              <UserFullName>{item[0]?.user?.name}</UserFullName>
              <UserId>{item[0]?.user?.userid}</UserId>
              <MessagePreview>{item[0].text}</MessagePreview>
            </UserChatInformationsView>
          </ViewChatWithUser>
        )}
      />
    </Container>
  );
};

export default ListChat;
