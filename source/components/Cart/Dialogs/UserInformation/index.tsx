import FormInput from '@components/FormInput';
import FormInputMask from '@components/FormInputMask';
import { Formik as Form, FormikProps } from 'formik';

import translate from '@locales/index';
import React, { FC, useRef, useState } from 'react';

import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import {
  AddButton,
  AddButtonText,
  FormContainer,
  HeaderTitle,
  InputRow,
} from './styles';

interface UserInformationFormData {
  email: string;
}

const UserInformation: FC<any> = ({ backAction }) => {
  console.log('UserInformation backAction', backAction);
  const navigation = useNavigation();

  const emailInputRef = useRef(null);
  const CPFInputRef = useRef(null);
  const birthDateRef = useRef(null);
  const dddPhoneRef = useRef(null);
  const phoneRef = useRef(null);

  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState();
  const [document, setDocument] = useState();
  const [ddPhone, setDdPhone] = useState();
  const [phone, setPhone] = useState();

  const formRef = useRef<any>(null);

  const handleSubmit = async (data: UserInformationFormData) => {
    console.log('handleSubmit data', data);

    navigation.navigate('UserAddress');
  };

  return (
    <FormContainer>
      <HeaderTitle>{translate('user_data')}</HeaderTitle>
      <Form
        initialValues={{}}
        innerRef={formRef}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={Yup.object().shape({
          user_name: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .required('Campo obrigatório')
            .email('E-mail inválido'),
          document: Yup.string()
            .min(14, 'CPF inválido')
            .required('Campo obrigatório'),
          birth_date: Yup.string().required('Campo obrigatório'),
          ddd_phone: Yup.string()
            .min(2, 'DDD inválido')
            .required('Campo obrigatório'),
          phone: Yup.string().required('Campo obrigatório'),
        })}
        style={{ width: '100%' }}
      >
        {(props: FormikProps) => (
          <>
            <FormInput
              name="user_name"
              label={translate('user_name')}
              placeholder={translate('user_name')}
              autoCapitalize="words"
              onChangeText={value => setUserName(value)}
              value={userName}
              returnKeyType="next"
              onSubmitEditing={() => emailInputRef.current?.focus()}
            />
            <FormInput
              ref={emailInputRef}
              name="email"
              label={translate('email')}
              placeholder={translate('email')}
              onChangeText={value => setEmail(value)}
              value={email}
              returnKeyType="next"
              onSubmitEditing={() => CPFInputRef.current?.focus()}
            />
            <InputRow>
              <FormInputMask
                ref={CPFInputRef}
                onSubmitEditing={() => birthDateRef.current?.focus()}
                width="45%"
                name="document"
                maxLength={14}
                label={translate('document')}
                returnKeyType="next"
                placeholder="000.000.000-00"
                type="custom"
                options={{
                  mask: '999.999.999-99',
                }}
                keyboardType="numeric"
                onChangeText={value => setDocument(value)}
                value={document}
              />
              <FormInputMask
                ref={birthDateRef}
                onSubmitEditing={() => dddPhoneRef.current?.focus()}
                returnKeyType="next"
                width="45%"
                name="birth_date"
                label={translate('birth_date')}
                placeholder="00/00/0000"
                type="custom"
                options={{
                  mask: '99/99/9999',
                }}
                keyboardType="numeric"
                onChangeText={value => setBirthDate(value)}
                value={birthDate}
              />
            </InputRow>

            <InputRow>
              <FormInputMask
                ref={dddPhoneRef}
                onSubmitEditing={() => phoneRef.current?.focus()}
                returnKeyType="next"
                width="20%"
                maxLength={2}
                name="ddd_phone"
                label={translate('phone')}
                placeholder={translate('ddd')}
                type="custom"
                options={{
                  mask: '99',
                }}
                keyboardType="numeric"
                onChangeText={value => setDdPhone(value)}
                value={ddPhone}
              />
              <FormInputMask
                ref={phoneRef}
                returnKeyType="send"
                onSubmitEditing={() => props.handleSubmit()}
                width="76%"
                name="phone"
                label={' '}
                type="custom"
                placeholder={translate('number')}
                options={{
                  mask: '9 99999999',
                }}
                keyboardType="numeric"
                onChangeText={value => setPhone(value)}
                value={phone}
              />
            </InputRow>

            <AddButton onPress={() => props.handleSubmit()}>
              <AddButtonText>{translate('continue')}</AddButtonText>
            </AddButton>
          </>
        )}
      </Form>
    </FormContainer>
  );
};

export default UserInformation;
