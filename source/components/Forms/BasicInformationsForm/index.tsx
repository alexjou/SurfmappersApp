import React from 'react';
import FormInput from '@components/FormInput';
import FormInputMask from '@components/FormInputMask';
import translate from '@locales/index';
import { InputRow } from '@components/Forms/styles';

const BasicInformationsForm: React.FC = () => {
  return (
    <>
      <FormInput
        name="basicInformation.username"
        editable={false}
        label={translate('user_name')}
        autoCapitalize="words"
      />
      <FormInput
        name="basicInformation.name"
        label={translate('your_name')}
        placeholder={translate('your_name')}
        autoCapitalize="words"
      />
      <FormInput
        name="basicInformation.email"
        label={translate('email')}
        placeholder={translate('email')}
      />
      <FormInputMask
        name="basicInformation.document"
        label={translate('document')}
        placeholder="000.000.000-00"
        type="cpf"
        keyboardType="numeric"
      />
      <InputRow>
        <FormInputMask
          name="basicInformation.birthdate"
          label={translate('birthday')}
          placeholder={translate('birthday')}
          type="custom"
          options={{
            mask: '99/99/9999',
          }}
          keyboardType="numeric"
        />
      </InputRow>
      <InputRow>
        <FormInputMask
          returnKeyType="next"
          width="20%"
          maxLength={2}
          name="basicInformation.ddd_phone"
          label={translate('phone')}
          placeholder={translate('ddd')}
          type="custom"
          options={{
            mask: '99',
          }}
          keyboardType="numeric"
        />
        <FormInputMask
          returnKeyType="send"
          width="76%"
          name="basicInformation.phoneNumber"
          label={' '}
          type="custom"
          placeholder={translate('number')}
          options={{
            mask: '9 99999999',
          }}
          keyboardType="numeric"
        />
      </InputRow>
    </>
  );
};

export default BasicInformationsForm;
