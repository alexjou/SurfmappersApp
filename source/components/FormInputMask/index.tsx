import React, { forwardRef } from 'react';
import { TextInputMask } from 'react-native-masked-text';

import { useField } from 'formik';
import FormInput from '../FormInput';

const InputMask: React.ForwardRefRenderFunction<any, any> = (
  { type, ...rest },
  inputRef,
) => {
  const [field, meta, helpers] = useField({ type, name: rest.name });

  return (
    <>
      <TextInputMask
        type={type}
        includeRawValueInChangeText
        value={field.value}
        onBlur={field.onBlur(rest.name)}
        customTextInput={FormInput}
        {...rest}
      />
    </>
  );
};

export default forwardRef(InputMask);
