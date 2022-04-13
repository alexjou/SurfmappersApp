// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react';
import {
  Alert,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from 'react-native';
import { Formik as Form, FormikProps } from 'formik';
import { useNavigation } from '@react-navigation/native';
import api from '@services/api';
import { LoadingIcon, ViewLoading } from '@screens/profile/styles';
import InputSignAndLog from '../../components/InputSignAndLog';

// styles
import {
  Container,
  ContainerGradient,
  ContainerInput,
  FormView,
  Header,
  InputContent,
  Logo,
  SubmitButton,
  TextWhite,
  TitleButtonText,
} from './styles';

import { STRINGS } from './strings';

// imagens
import bgLogin from '../../assets/images/bgLogin.png';

const Login: React.FC = () => {
  const { height } = Dimensions.get('screen');
  const navigation = useNavigation();
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const submitEmail = useCallback(async () => {
    setLoading(true);
    api
      .post(`/recoverPassword/${email}`)
      .then(res => {
        setLoading(false);
        Alert.alert(res.data.title);
      })
      .catch(error => {
        setLoading(false);
        Alert.alert(error);
      });
  }, [email]);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      enabled
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ height }}
        keyboardShouldPersistTaps="handled"
      >
        <Container source={bgLogin}>
          <ContainerGradient>
            <StatusBar
              translucent
              backgroundColor="transparent"
              barStyle="light-content"
            />
            <Header>
              <Logo source={{ uri: STRINGS.LOGO }} />
            </Header>
            <FormView>
              {loading ? (
                <ViewLoading>
                  <LoadingIcon />
                </ViewLoading>
              ) : (
                <Form
                  initialValues={{}}
                  validateOnChange={false}
                  onSubmit={() => {}}
                  style={{ width: '100%' }}
                >
                  {(props: FormikProps) => (
                    <>
                      <ContainerInput>
                        <InputContent>
                          <TextWhite>Recuperar Senha:</TextWhite>
                          <InputSignAndLog
                            onChangeText={text => setEmail(text)}
                            name="forgotPassword"
                            icon="key-outline"
                            textContentType="newPassword"
                            placeholder="Digite seu E-mail..."
                          />
                        </InputContent>
                      </ContainerInput>
                      <SubmitButton onPress={() => submitEmail()}>
                        <TitleButtonText>Enviar</TitleButtonText>
                      </SubmitButton>
                      <SubmitButton onPress={() => navigation.goBack()}>
                        <TitleButtonText>Voltar</TitleButtonText>
                      </SubmitButton>
                    </>
                  )}
                </Form>
              )}
            </FormView>
          </ContainerGradient>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
