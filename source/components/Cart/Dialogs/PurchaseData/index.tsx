// eslint-disable-next-line no-use-before-define
import React, { useRef } from 'react';
import { Modal } from 'react-native';
import FormInput from '@components/FormInput';
import FormInputMask from '@components/FormInputMask';
import { Formik as Form, FormikProps } from 'formik';
import translate from '../../../../locales';
import {
  AddButton,
  AddButtonText,
  ArrowLeft,
  ButtonBack,
  FormContainer,
  HeaderTitle,
  ModalContent,
  ModalHeader,
  Title,
} from './styles';

const PurchaseData: React.FC<any> = ({
  visible,
  changeVisibility,
  navigation,
}) => {
  const formRef = useRef<any>(null);

  const handleSubmit = (data: any) => {
    navigation.replace('PurchaseConfirmation');
  };

  return (
    <Modal style={{ flex: 1 }} visible={visible} animationType="none">
      <ModalContent>
        <ModalHeader>
          <ButtonBack onPress={() => changeVisibility(false)}>
            <ArrowLeft />
            <HeaderTitle>{translate('purchase_data')}</HeaderTitle>
          </ButtonBack>
        </ModalHeader>

        <FormContainer>
          <Title>{translate('purchase_info')}</Title>
          <Form
            innerRef={formRef}
            onSubmit={handleSubmit}
            style={{ width: '100%' }}
            initialValues={{}}
          >
            {(props: FormikProps) => (
              <>
                <FormInput
                  name="name"
                  label={translate('your_name')}
                  placeholder={translate('your_name')}
                  autoCapitalize="words"
                />
                <FormInput
                  name="email"
                  label={translate('email')}
                  placeholder={translate('email')}
                />
                <FormInputMask
                  name="document"
                  label={translate('document')}
                  placeholder={translate('document')}
                  type="cpf"
                  keyboardType="numeric"
                />
                <FormInputMask
                  name="birthday"
                  label={translate('birthday')}
                  placeholder={translate('birthday')}
                  type="custom"
                  options={{
                    mask: '99/99/9999',
                  }}
                  keyboardType="numeric"
                />
                <FormInputMask
                  name="phone"
                  label={translate('phone')}
                  placeholder={translate('phone')}
                  type="cel-phone"
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  keyboardType="numeric"
                />

                <AddButton onPress={() => props.handleSubmit()}>
                  <AddButtonText>{translate('finalize_order')}</AddButtonText>
                </AddButton>
              </>
            )}
          </Form>
        </FormContainer>
      </ModalContent>
    </Modal>
  );
};

export default PurchaseData;
