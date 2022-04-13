// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, StatusBar, Text, View, } from 'react-native';
import {
  ButtonAnswerLater,
  ButtonCreateAccount,
  Container,
  FormView,
  Logo,
  LogoView,
  NewUserTitle,
  NewUserTitleBold,
  TitleButtonText,
} from './styles';
import { useAuth } from '../../../hooks/auth';
import SelectorProfileViewContainer from '@components/SelectorProfileView';

const ChooseProfile: React.FC = ({
  route,
  navigation
}: any) => {
  const { formData } = route.params;
  const [isSelected, setSelected] = useState(0);
  const { signUp } = useAuth();

  const newFormData = {
    ...formData,
    user_type: isSelected === 0 ? 'surfer' : 'photographer',
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        bounces={false}
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <StatusBar translucent backgroundColor="transparent"/>
          <LogoView>
            <Logo/>
          </LogoView>
          <FormView>
            <NewUserTitle>
              Olá,{' '}
              <NewUserTitleBold>
                {formData.first_name} {formData.last_name}.
              </NewUserTitleBold>
            </NewUserTitle>
            <NewUserTitle>Bem vindo a Surfmappers!</NewUserTitle>
            <SelectorProfileViewContainer setSelected={setSelected} isSelected={isSelected}/>
            <View style={{ flex: 1 }}/>
            <ButtonCreateAccount
              onPress={() =>
                navigation.navigate('MoreInformations', {
                  formData: newFormData,
                })
              }
            >
              <TitleButtonText>AVANÇAR</TitleButtonText>
            </ButtonCreateAccount>
            <ButtonAnswerLater
              onPress={async () => await signUp({ formData: newFormData })}
            >
              <Text>Responder Depois</Text>
            </ButtonAnswerLater>
          </FormView>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ChooseProfile;
