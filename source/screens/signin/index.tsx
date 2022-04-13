// eslint-disable-next-line no-use-before-define

import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Toast from 'react-native-simple-toast';
import { Formik as Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useAuth } from '../../hooks/auth';
import InputSignAndLog from '../../components/InputSignAndLog';
import logoImg from '../../assets/images/logo.png';
import bgLogin from '../../assets/images/bgLogin.png';
import ViewSocialButtons from '../../components/ViewSocialButtons';

// styles
import {
  CloseButton,
  Container,
  ContainerGradient,
  ContainerInput,
  FooterView,
  ForgotPassword,
  FormView,
  Header,
  InputContent,
  LabelInput,
  LineOr,
  Logo,
  SignupButton,
  SubmitButton,
  TermsOfUse,
  Text,
  TextBold,
  TextOr,
  TitleButtonText,
  ViewOr,
} from './styles';

interface SignInFormData {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const { height } = Dimensions.get('screen');
  const formRef = useRef(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [apiError, setApiError] = useState(false);

  const handleSignIn = useCallback(async (data: SignInFormData) => {
    try {
      await signIn({
        email: data.email,
        password: data.password,
      });

      closeNavigation();
    } catch (e: any) {
      Toast.show(e.message);
    }
  }, []);

  const closeNavigation = () => {
    navigation.goBack();
  };

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
          <Form
            initialValues={{
              email: '',
              password: '',
            }}
            innerRef={formRef}
            validationSchema={Yup.object().shape({
              email: Yup.string().required('E-mail ou Usuário obrigatório'),
              password: Yup.string()
                .min(6, 'No mínimo 6 dígitos')
                .required('Senha obrigatória'), // Trocamos para 1 em dev, corrigir antes do release
            })}
            validateOnChange={false}
            onSubmit={handleSignIn}
            style={{ width: '100%' }}
          >
            {(props: FormikProps<any>) => (
              <ContainerGradient>
                <StatusBar
                  translucent
                  backgroundColor="transparent"
                  barStyle="light-content"
                />
                <CloseButton onPress={closeNavigation}>
                  <MaterialIcons size={30} name="close" />
                </CloseButton>
                <Header>
                  <Logo source={logoImg} />
                </Header>
                <Text>
                  Seja <TextBold>bem vindo!</TextBold>
                </Text>

                <ViewSocialButtons />

                <ViewOr>
                  <LineOr />
                  <TextOr>OU</TextOr>
                  <LineOr />
                </ViewOr>

                <TextBold>Faça login com</TextBold>

                <FormView>
                  <ContainerInput>
                    <InputContent>
                      <LabelInput>Login</LabelInput>
                      <InputSignAndLog
                        apiError={apiError}
                        name="email"
                        ref={emailRef}
                        icon="ios-mail-outline"
                        returnKeyType="next"
                        autoCapitalize="none"
                        keyboardType={'email-address' || 'default'}
                        onSubmitEditing={() => {
                          passwordRef.current?.focus();
                        }}
                        placeholder="Digite seu E-mail ou Usuário"
                      />
                    </InputContent>
                    <InputContent>
                      <LabelInput>Senha</LabelInput>
                      <InputSignAndLog
                        apiError={apiError}
                        name="password"
                        ref={passwordRef}
                        icon="key-outline"
                        secureTextEntry
                        returnKeyType="send"
                        textContentType="newPassword"
                        onSubmitEditing={() => {
                          props.handleSubmit();
                        }}
                        placeholder="Senha"
                      />
                    </InputContent>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('ForgotPassword')}
                    >
                      <ForgotPassword>Esqueceu a senha?</ForgotPassword>
                    </TouchableOpacity>
                  </ContainerInput>
                  <SubmitButton onPress={props.handleSubmit}>
                    <TitleButtonText>Entrar</TitleButtonText>
                  </SubmitButton>
                </FormView>
                <FooterView>
                  <SignupButton onPress={() => navigation.navigate('Signup')}>
                    <Text>
                      Novo aqui? <TextBold>Crie sua conta!</TextBold>
                    </Text>
                  </SignupButton>

                  <TermsOfUse>
                    <TextBold>Termos de uso</TextBold>
                  </TermsOfUse>
                </FooterView>
              </ContainerGradient>
            )}
          </Form>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
