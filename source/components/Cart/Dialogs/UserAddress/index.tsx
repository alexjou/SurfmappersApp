import React, { useRef, useState } from 'react';
import FormInput from '@components/FormInput';
import FormInputMask from '@components/FormInputMask';
import { Formik as Form, FormikProps } from 'formik';

import translate from '@locales/index';

import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import Button from '@components/Button';
import MultiLineSelector from '@components/MultiLineSelector';
import { FormContainer, HeaderTitle, InputRow } from './styles';
import { useCart } from '../../../../hooks/cart';

interface UserAdress {}

const UserAddress: React.FC = () => {
  const { saveAddress, cart } = useCart();

  const deliveryOptions = [
    {
      description: 'PAC - 10 a 14 dias',
      price: 18,
    },
    {
      description: 'SEDEX -  3 a 4 dias',
      price: 60,
    },
  ];
  const navigation = useNavigation();
  const cityInputRef = useRef(null);
  const streetInputRef = useRef(null);
  const numberInputRef = useRef(null);
  const districtInputRef = useRef(null);
  const complementInputRef = useRef(null);

  const [enableDelivery, setEnableDelivery] = useState(false);

  const formRef = useRef<any>(null);

  const handleSubmit = async (data: UserAdress) => {
    saveAddress(data);
    setEnableDelivery(true);
  };

  return (
    <>
      <FormContainer>
        <HeaderTitle>{translate('holder_address')}</HeaderTitle>
        <Form
          validationSchema={Yup.object().shape({
            zipcode: Yup.string()
              .min(9, 'CEP inválido')
              .required('Campo obrigatório'),
            city: Yup.string().required('Campo obrigatório'),
            street: Yup.string().required('Campo obrigatório'),
            number: Yup.string().required('Campo obrigatório'),
            district: Yup.string().required('Campo obrigatório'),
            complement: Yup.string().required('Campo obrigatório'),
          })}
          validateOnChange={false}
          initialValues={cart?.delivery_address || {}}
          ref={formRef}
          onSubmit={handleSubmit}
          style={{ width: '100%' }}
        >
          {(props: FormikProps) => (
            <>
              <InputRow>
                <FormInputMask
                  width="45%"
                  name="zipcode"
                  maxLength={9}
                  label={translate('zip_code')}
                  returnKeyType="next"
                  placeholder="00000-000"
                  type="custom"
                  options={{
                    mask: '99999-999',
                  }}
                  keyboardType="numeric"
                  onSubmitEditing={() => cityInputRef.current?.focus()}
                />
                <FormInput
                  ref={cityInputRef}
                  width="45%"
                  name="city"
                  label={translate('city')}
                  placeholder={translate('city')}
                  returnKeyType="next"
                  onSubmitEditing={() => streetInputRef.current?.focus()}
                />
              </InputRow>
              <FormInput
                ref={streetInputRef}
                name="street"
                label={translate('street')}
                placeholder={translate('street')}
                returnKeyType="next"
                onSubmitEditing={() => numberInputRef.current?.focus()}
              />

              <InputRow>
                <FormInput
                  ref={numberInputRef}
                  width="45%"
                  name="number"
                  label={translate('number')}
                  placeholder={translate('number')}
                  returnKeyType="next"
                  onSubmitEditing={() => districtInputRef.current?.focus()}
                />
                <FormInput
                  ref={districtInputRef}
                  width="45%"
                  name="district"
                  label={translate('district')}
                  placeholder={translate('district')}
                  returnKeyType="next"
                  onSubmitEditing={() => complementInputRef.current?.focus()}
                />
              </InputRow>
              <FormInput
                ref={complementInputRef}
                name="complement"
                label={translate('complement')}
                placeholder={translate('complement')}
                returnKeyType="send"
                onSubmitEditing={() => props.handleSubmit()}
              />
              <Button
                title={translate('calculateDelivery')}
                outline
                onPress={() => props.handleSubmit()}
              />
              {enableDelivery && (
                <>
                  <HeaderTitle>{translate('deliveryOptions')}</HeaderTitle>
                  <MultiLineSelector
                    style={{ marginBottom: 32 }}
                    data={deliveryOptions}
                    onSelect={() => {}}
                    keysToCompare={['description']}
                  />
                  <Button
                    title={translate('configDelivery')}
                    onPress={() => navigation.goBack()}
                  />
                </>
              )}
            </>
          )}
        </Form>
      </FormContainer>
    </>
  );
};

export default UserAddress;
