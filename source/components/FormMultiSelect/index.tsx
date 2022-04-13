import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { useField } from 'formik';
import { Container, InputLabel, Option, OptionContainer } from './styles';

interface InputRef {
  focus(): void;
}

const MultiSelect: React.ForwardRefRenderFunction<InputRef> = (
  { name, label, onValueChange, items, ...rest },
  ref,
) => {
  const pickerRef = useRef<any>(null);

  const [field, meta, helpers] = useField({ name, type: 'text' });
  const [multiSelectedValue, setMultiSelectedValue] = useState(
    field.value || [],
  );

  useEffect(() => {
    const event = {
      target: {
        name,
        value: multiSelectedValue,
      },
    };
    field.onChange(event);
  }, [multiSelectedValue]);

  const onOptionClick = (value, isSelected) => {
    if (isSelected) {
      setMultiSelectedValue(
        multiSelectedValue.filter(selectedValue => selectedValue !== value),
      );
    } else {
      setMultiSelectedValue([...multiSelectedValue, value]);
    }
  };
  return (
    <View style={{ width: rest.width || '100%' }}>
      {label && <InputLabel>{label}</InputLabel>}

      <Container
        mode="dropdown"
        ref={pickerRef}
        defaultValue={field.value}
        {...rest}
      >
        {items.map(i => {
          const isSelected = !!multiSelectedValue?.find(
            value => value === i.value,
          );
          return (
            <OptionContainer
              isSelected={isSelected}
              onPress={() => onOptionClick(i.value, isSelected)}
            >
              <Option isSelected={isSelected}>{i.label}</Option>
            </OptionContainer>
          );
        })}
      </Container>
      {meta.touched && meta.error && (
        <Text style={{ color: '#f00' }}>{meta.error}</Text>
      )}
    </View>
  );
};

export default forwardRef(MultiSelect);
