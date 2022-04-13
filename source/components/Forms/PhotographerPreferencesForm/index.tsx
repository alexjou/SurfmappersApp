import React, { useState } from 'react';
import FormInput from '@components/FormInput';
import translate from '@locales/index';
import FormSelect from '@components/FormSelect';
import DiscountInputForm from '@components/DiscountInputForm';
import MultiSelect from '@components/FormMultiSelect';
import { currencys } from '../../../data/currencys';

const PhotographerPreferencesForm: React.FC = () => {
  const discountSelectValues = [
    { key: 'Habilitado', value: true },
    { key: 'Desabilitado', value: false },
  ];
  const items = [{ label: 'Pauba', value: 'Pauba' }];
  const shirtSize = [
    translate('tshirtSizes.small'),
    translate('tshirtSizes.medium'),
    translate('tshirtSizes.large'),
    translate('tshirtSizes.extraLarge'),
  ];
  const [selectedCurrenty, setSelectedCurrenty] = useState('');
  const [enableDiscount, setEnabledDiscount] = useState(false);
  const currencysSymbols = Object.keys(currencys);
  return (
    <>
      <FormSelect
        name="photographerPreferences.currency"
        label={translate('currency')}
        onValueChange={setSelectedCurrenty}
        items={currencysSymbols}
      />
      <FormInput
        name="photographerPreferences.defaultPhotoPrice"
        label={translate('defaultPrice')}
        placeholder={`${currencys[selectedCurrenty || 'BRL']} 20,00`}
        keyboardType="numeric"
      />
      <FormSelect
        items={discountSelectValues}
        name="photographerPreferences.allowPromotions"
        onValueChange={setEnabledDiscount}
        label={translate('enableDiscount')}
        placeholder="Habilitado"
      />
      {enableDiscount && (
        <DiscountInputForm name="photographerPreferences.discounts" />
      )}
      <MultiSelect
        name="photographerPreferences.favoriteBeaches"
        items={items}
        label={translate('mostFrequentlyBeach')}
      />
      <FormInput
        name="photographerPreferences.equipment"
        label={translate('equipment')}
        placeholder="Descreva seu equipamento"
      />
      <FormSelect
        items={shirtSize}
        name="photographerPreferences.shirtSize"
        label={translate('shirtSize')}
      />
    </>
  );
};

export default PhotographerPreferencesForm;
