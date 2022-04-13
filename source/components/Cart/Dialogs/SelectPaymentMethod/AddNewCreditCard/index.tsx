import React, { FC, useRef, useState } from 'react';
import FormInput from '@components/FormInput';
import FormInputMask from '@components/FormInputMask';
import { Formik as Form, FormikProps } from 'formik';
import translate from '@locales/index';
import * as Yup from 'yup';
import { Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Toast from 'react-native-toast-message';
import card, { CARDS } from '@utils/card';
import { PythonApi } from '@services/api';
import { useNavigation } from '@react-navigation/native';
import {
  AddButton,
  AddButtonText,
  BrandIcon,
  FormContainer,
  InputRow,
} from './styles';

interface Card {
  card_number: string;
  holder_name: string;
  expiration_date: string;
  security_code: string;
}

const NewCard: FC<any> = props => {
  const navigation = useNavigation();
  const cardHolderInputRef = useRef(null);
  const expirationDateInputRef = useRef(null);
  const securityCodeInputRef = useRef(null);

  const [brand, setBrand] = useState('no_brand');
  const [isSaving, setIsSaving] = useState(false);

  const formRef = useRef<any>(null);

  const handleSubmit = async (data: Card) => {
    try {
      const date = (data.expiration_date || '').split('/');
      const expirationMonth = date[0];
      const expirationYear = date[1];

      if (parseInt(expirationMonth) > 12) {
        Toast.show({
          type: 'error',
          text1: translate('enter_a_valid_month'),
        });

        return;
      }

      if (parseInt(expirationYear) + 2000 < new Date().getFullYear()) {
        Toast.show({
          type: 'error',
          text1: translate('please_enter_a_valid_year'),
        });

        return;
      }

      setIsSaving(true);

      const payload = {
        card_number: data.card_number.replace(/\s/g, ''),
        expiration_month: expirationMonth,
        expiration_year: parseInt(expirationYear) + 2000,
        holder_name: data.holder_name,
        security_code: data.security_code,
      };

      await PythonApi.Card.addCard(payload);

      navigation.navigate('SelectPaymentMethod', {
        newCard: true,
      });
    } catch (err) {
      const { data } = err.response;

      Toast.show({
        type: 'error',
        text1: data.title, // Precisa de tradução ou associação entre tipo de erro e string de trad
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <FormContainer>
      <Form
        innerRef={formRef}
        onSubmit={handleSubmit}
        validationSchema={Yup.object().shape({
          card_number: Yup.string().required(translate('required_field')),
          holder_name: Yup.string().required(translate('required_field')),
          expiration_date: Yup.string().required(translate('required_field')),
          security_code: Yup.string().required(translate('required_field')),
        })}
        validateOnChange={false}
        style={{ width: '100%' }}
        initialValues={{}}
      >
        {(props: FormikProps) => (
          <>
            <BrandIcon source={CARDS[brand].brand} />

            <FormInputMask
              requireTouch={false}
              name="card_number"
              label={translate('card_number')}
              placeholder={translate('card_number')}
              returnKeyType="next"
              type="credit-card"
              keyboardType="numeric"
              onChangeText={value => {
                setBrand(card.brandFromNumber(value.toString().trim()));
              }}
              onSubmitEditing={() => cardHolderInputRef.current?.focus()}
            />
            <FormInput
              ref={cardHolderInputRef}
              requireTouch={false}
              name="holder_name"
              returnKeyType="next"
              label={translate('card_holder')}
              placeholder={translate('card_holder')}
              autoCapitalize="words"
              onSubmitEditing={() => expirationDateInputRef.current?.focus()}
            />
            <InputRow>
              <FormInputMask
                ref={expirationDateInputRef}
                requireTouch={false}
                width="45%"
                name="expiration_date"
                label={translate('valid_thru')}
                placeholder={translate('valid_thru')}
                type="custom"
                options={{
                  mask: '99/99',
                }}
                returnKeyType="next"
                keyboardType="numeric"
                onSubmitEditing={() => securityCodeInputRef.current?.focus()}
              />
              <FormInputMask
                ref={securityCodeInputRef}
                requireTouch={false}
                width="44%"
                name="security_code"
                label={translate('cvv')}
                placeholder={translate('cvv')}
                type="custom"
                options={{
                  mask: '9999',
                }}
                keyboardType="numeric"
                returnKeyType="send"
              />
              <MaterialIcons
                name="alert-circle-outline"
                size={24}
                color="gray"
                onPress={() => {
                  Alert.alert(
                    translate('what_is_cvv'),
                    translate('text_help_cvv'),
                  );
                }}
              />
            </InputRow>

            <AddButton
              disabled={isSaving}
              onPress={() => {
                if (!isSaving) {
                  props.handleSubmit();
                }
              }}
            >
              <AddButtonText>
                {isSaving ? `${translate('adding')}...` : translate('add')}
              </AddButtonText>
            </AddButton>
          </>
        )}
      </Form>
    </FormContainer>
  );
};

export default NewCard;
