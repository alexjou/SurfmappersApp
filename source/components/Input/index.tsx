import React, { forwardRef } from 'react';
import { TextInputProps, View } from 'react-native';
import { CustomInput, InputLabel } from './styles';

type InputProps = TextInputProps;

const Input: React.FC<InputProps> = ({
  label,
  onChangeText,
  defaultValue,
  width,
  ...rest
}) => {
  return (
    <View style={{ width: width || '100%' }}>
      {label && <InputLabel>{label}</InputLabel>}

      <CustomInput
        onChangeText={onChangeText}
        defaultValue={defaultValue}
        {...rest}
      />
    </View>
  );
};

export default forwardRef(Input);
