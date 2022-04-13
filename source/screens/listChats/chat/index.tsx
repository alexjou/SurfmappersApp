// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import 'dayjs/locale/pt-br';
import Header from '@components/Header';
import {
  Container,
  CustomBubble,
  InputMessage,
  MessageBar,
  SendButton,
  SendButtonIcon,
} from './styles';

const Chat: React.FC = ({ route, navigation }: any) => {
  const { item } = route.params;
  const [messages, setMessages] = useState<any>([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessages(item);
  }, [item]);

  const SendMessage = () => {
    if (message) {
      const messageFormatted = {
        _id: Date.now(),
        text: message,
        createdAt: new Date(),
        user: {
          _id: 1,
          name: item[1].user.userid,
        },
      };

      setMessages([...messages, messageFormatted]);
      setMessage('');
    }
  };

  const renderBubble = (props: any) => {
    return <CustomBubble {...props} key={props.currentMessage._id} />;
  };

  const InputMessageBar = () => {
    return (
      <MessageBar>
        <InputMessage
          placeholder="Digite sua mensagem..."
          value={message}
          onChangeText={(text: any) => {
            setMessage(text);
          }}
        />
        <SendButton onPress={() => SendMessage()}>
          <SendButtonIcon />
        </SendButton>
      </MessageBar>
    );
  };

  return (
    <Container>
      <Header
        backButton
        title={item[0]?.user?.name}
        navigation={navigation}
        icons={[
          {
            icon: 'cart-outline',
            color: 'black',
            route: 'Cart',
            onlyLogged: true,
          },
          { icon: 'dots-vertical', color: 'black' },
        ]}
      />
      <GiftedChat
        alwaysShowSend
        isTyping
        alignTop
        inverted={false}
        locale="pt-br"
        user={{ _id: 1 }}
        messages={messages}
        renderBubble={renderBubble}
        renderInputToolbar={InputMessageBar}
        placeholder="Digite sua mensagem..."
        messagesContainerStyle={{ paddingBottom: 20 }}
      />
    </Container>
  );
};

export default Chat;
