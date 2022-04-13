// eslint-disable-next-line no-use-before-define
import React, { useCallback, useRef } from 'react';
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
import { useAuth } from '../../../hooks/auth';
import InputSignAndLog from '../../../components/InputSignAndLog';
import InputTelMasked from '../../../components/InputTelMasked';
import {
  ButtonNext,
  Container,
  FooterView,
  FormView,
  Logo,
  LogoView,
  NewUserTitle,
  NewUserTitleBold,
  TextIpuntLabel,
  TextIpuntLabelBold,
  TitleButtonText,
  ViewInputLabel,
} from './styles';

interface SignUpFormData {
  location: string;
  telephone: string;
}

const MoreInformations: React.FC = ({ route, navigation }: any) => {
  const { signUp } = useAuth();
  const { formData } = route.params;
  const { height } = Dimensions.get('screen');
  const formRef = useRef(null);
  const telephoneRef = useRef<TextInput>(null);
  // const locationRef = useRef<TextInput>(null);

  const handleSignUp = useCallback(async (data: SignUpFormData) => {
    // eslint-disable-next-line prefer-regex-literals
    const reg = new RegExp('\\(([1-9][0-9])\\) ([0-9]{4,5}-[0-9]{4,4})');
    const [all, ddd, tel] = data.telephone.match(reg) || [];

    const newFormData = {
      ...formData,
      ddd,
      phone: tel,
    };

    await signUp({ formData: newFormData });
  }, []);
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ height }}
        keyboardShouldPersistTaps="handled"
      >
        <Form
          initialValues={{}}
          innerRef={formRef}
          validationSchema={Yup.object().shape({
            location: Yup.string().required('Pico obrigatório'),
            telephone: Yup.string().required('Telefone obrigatório'),
          })}
          validateOnBlur
          onSubmit={handleSignUp}
          style={{ width: '100%', marginTop: 40 }}
        >
          {(props: FormikProps) => (
            <Container>
              <StatusBar translucent backgroundColor="transparent" />
              <LogoView>
                <Logo />
              </LogoView>
              <FormView>
                <NewUserTitle>Queremos te</NewUserTitle>
                <NewUserTitleBold>conhecer mais!</NewUserTitleBold>
                <>
                  <ViewInputLabel>
                    <TextIpuntLabel>
                      Onde você{' '}
                      <TextIpuntLabelBold>
                        surfa com maior frequência?
                      </TextIpuntLabelBold>
                    </TextIpuntLabel>
                  </ViewInputLabel>
                  <InputSignAndLog
                    name="location"
                    icon="map-marker-outline"
                    placeholder="Pico"
                    returnKeyType="next"
                    autoCapitalize="words"
                    onSubmitEditing={() => {
                      telephoneRef.current?.focus();
                    }}
                  />
                  <ViewInputLabel>
                    <TextIpuntLabel>
                      Qual o seu{' '}
                      <TextIpuntLabelBold>
                        número de telefone?
                      </TextIpuntLabelBold>
                    </TextIpuntLabel>
                  </ViewInputLabel>
                  <InputTelMasked
                    name="telephone"
                    icon="phone-outline"
                    ref={telephoneRef}
                    returnKeyType="send"
                    keyboardType="number-pad"
                    placeholder="(xx) xxxxx - xxxx"
                    onSubmitEditing={() => {
                      props.handleSubmit();
                    }}
                  />
                </>
              </FormView>
              <FooterView>
                <ButtonNext onPress={() => props.handleSubmit()}>
                  <TitleButtonText>AVANÇAR</TitleButtonText>
                </ButtonNext>
              </FooterView>
            </Container>
          )}
        </Form>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default MoreInformations;
