import Header from '@components/Header';
import { useNavigation } from '@react-navigation/native';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Linking, ScrollView } from 'react-native';
import { Container, SubmitButton, Text, TitleButtonText } from './styles';

const Support: React.FC = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <Header backButton title="Suporte" navigation={navigation} icons={[]} />
      <Container>
        <Text size={25}>
          Se precisar de alguma ajuda entre em contato através do email
          ou telefone(whatsapp)
        </Text>
        <SubmitButton
          onPress={() => Linking.openURL('mailto:contato@surfmappers.com')}
        >
          <TitleButtonText>contato@surfmappers.com</TitleButtonText>
        </SubmitButton>
        <SubmitButton onPress={() => Linking.openURL('https://wa.me/5584998962088')}>
          <TitleButtonText>84 99896-2088</TitleButtonText>
        </SubmitButton>

      </Container>
    </ScrollView>
  );
};

export default Support;
