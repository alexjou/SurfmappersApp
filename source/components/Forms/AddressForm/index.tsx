import React from 'react';
import FormInput from '@components/FormInput';
import FormInputMask from '@components/FormInputMask';
import translate from '@locales/index';
import { InputRow } from '@components/Forms/styles';
import FormSelect from '@components/FormSelect';
import { countrys } from '../../../data/country';

const AddressForm: React.FC = () => {
  return (
    <>
      <FormInput name="address.street" label={translate('street')} />
      <FormInput
        name="address.number"
        label={translate('number')}
        keyboardType="numeric"
      />
      <FormInputMask
        name="address.zipCode"
        maxLength={9}
        label={translate('zip_code')}
        returnKeyType="next"
        placeholder="00000-000"
        type="custom"
        options={{
          mask: '99999-999',
        }}
      />
      <FormInput name="address.neighbourhood" label={translate('district')} />
      <InputRow>
        <FormInput name="address.city" width="60%" label={translate('city')} />
        <FormInput
          name="address.state"
          width="30%"
          label={translate('state')}
        />
      </InputRow>
      <FormSelect
        name="address.country"
        label={translate('country')}
        items={countrys}
      />
    </>
  );
};

export default AddressForm;
