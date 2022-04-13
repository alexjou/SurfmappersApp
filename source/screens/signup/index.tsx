// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef, useState } from 'react';
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import { Formik as Form, FormikProps } from 'formik';
import * as Yup from 'yup';
import ViewSocialButtons from '@components/ViewSocialButtons';
import SelectorProfileViewContainer from '@components/SelectorProfileView';
import ToastMessage from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import InputSignAndLog from '../../components/InputSignAndLog';
import {
  ButtonCreateAccount,
  Container,
  FormView,
  LineOr,
  Logo,
  LogoView,
  NewUserTitle,
  TextOr,
  TitleButtonText,
  ViewOr,
} from './styles';
import logoImg from '../../assets/images/logo.png';
import { useAuth } from '../../hooks/auth';

interface SignUpFormData {
  name: string;
  lastname: string;
  email: string;
  password: string;
  user_type: string;
}

const Signup: React.FC = () => {
  const { height } = Dimensions.get('screen');
  const navigation = useNavigation();

  const [selectedTypeProfile, setSelectedTypeProfile] = useState();
  const formRef = useRef(null);
  const lastnameRef = useRef<TextInput>(null);
  const emailRef = useRef<TextInput>(null);
  const passwordRef = useRef<TextInput>(null);
  const { signUp } = useAuth();

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    if (!data.user_type) {
      ToastMessage.show({
        type: 'error',
        text1: 'Selecione o tipo de perfil',
      });

      return;
    }

    const singUpData = {
      first_name: data.name,
      last_name: data.lastname,
      email: data.email,
      password: data.password,
      confirm_password: data.password,
      user_type: selectedTypeProfile,
    };

    try {
      await signUp({ formData: singUpData });
      navigation.navigate('LoggedStack');
    } catch (e) {
      ToastMessage.show({
        type: 'error',
        text1: e.message,
      });
    }
  }, []);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={{ height }}
        keyboardShouldPersistTaps="handled"
      >
        <Form
          initialValues={{}}
          innerRef={formRef}
          validateOnBlur
          validationSchema={Yup.object().shape({
            name: Yup.string().required('Nome obrigatório'),
            lastname: Yup.string().required('Sobrenome obrigatório'),
            email: Yup.string()
              .required('E-mail obrigatório')
              .email('Digite um e-mail válido'),
            password: Yup.string()
              .min(6, 'No mínimo 6 dígitos')
              .required('Senha obrigatória'), // Trocamos para 1 em dev, corrigir antes do release
          })}
          onSubmit={data => {
            handleSignUp({
              ...data,
              user_type: selectedTypeProfile,
            }).then();
          }}
        >
          {(props: FormikProps) => (
            <Container>
              <StatusBar translucent backgroundColor="transparent" />
              <LogoView>
                <Logo source={logoImg} />
              </LogoView>

              <NewUserTitle>NOVO USUÁRIO</NewUserTitle>

              <ViewSocialButtons />

              <ViewOr>
                <LineOr />
                <TextOr>OU</TextOr>
                <LineOr />
              </ViewOr>

              <FormView>
                <>
                  <InputSignAndLog
                    name="name"
                    placeholder="Nome"
                    returnKeyType="next"
                    autoCapitalize="words"
                    onSubmitEditing={() => {
                      lastnameRef.current?.focus();
                    }}
                  />
                  <InputSignAndLog
                    name="lastname"
                    ref={lastnameRef}
                    returnKeyType="next"
                    autoCapitalize="words"
                    placeholder="Sobrenome"
                    onSubmitEditing={() => {
                      emailRef.current?.focus();
                    }}
                  />
                  <InputSignAndLog
                    name="email"
                    ref={emailRef}
                    returnKeyType="next"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onSubmitEditing={() => {
                      passwordRef.current?.focus();
                    }}
                    placeholder="E-mail"
                  />
                  <InputSignAndLog
                    name="password"
                    ref={passwordRef}
                    secureTextEntry
                    returnKeyType="send"
                    textContentType="newPassword"
                    placeholder="Senha"
                  />
                </>

                <SelectorProfileViewContainer
                  setSelected={setSelectedTypeProfile}
                  isSelected={selectedTypeProfile}
                />

                <ButtonCreateAccount onPress={() => props.handleSubmit()}>
                  <TitleButtonText>CRIAR CONTA</TitleButtonText>
                </ButtonCreateAccount>
              </FormView>
            </Container>
          )}
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Signup;
