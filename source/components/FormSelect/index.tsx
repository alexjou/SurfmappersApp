import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from 'react';
import { Text, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useField } from 'formik';
import { InputLabel } from './styles';
import translate from '../../locales';

interface InputRef {
  focus(): void;
}

const Select: React.ForwardRefRenderFunction<InputRef> = (
  { name, label, onValueChange, items, ...rest },
  ref,
) => {
  const pickerRef = useRef<any>(null);
  const arrayOfString = items[0] && typeof items[0] === 'string';

  const [field, meta, helpers] = useField({ name, type: 'text' });

  useEffect(() => onValueChange && onValueChange(field.value), []);

  useImperativeHandle(ref, () => ({
    focus() {
      pickerRef.current.focus();
    },
  }));

  return (
    <View style={{ width: rest.width || '100%' }}>
      {label && <InputLabel>{label}</InputLabel>}

      <SelectDropdown
        buttonTextStyle={{ textAlign: 'left' }}
        buttonStyle={{
          width: '100%',
          backgroundColor: '#0001',
          borderRadius: 5,
          marginVertical: 4,
        }}
        ref={pickerRef}
        renderDropdownIcon={() => <MaterialIcons name="chevron-down" />}
        defaultButtonText={translate('select')}
        data={arrayOfString ? items : items.map(i => i.key)}
        onSelect={(selectedItem, index) => {
          const event = {
            target: {
              name,
              value: arrayOfString ? selectedItem : items[index].value,
            },
          };
          field.onChange(event);
        }}
        defaultValue={
          !arrayOfString
            ? items.find(i => i.value === field.value)?.key
            : field.value
        }
      />
      {meta.touched && meta.error && (
        <Text style={{ color: '#f00' }}>{meta.error}</Text>
      )}
    </View>
  );
};

export default forwardRef(Select);
