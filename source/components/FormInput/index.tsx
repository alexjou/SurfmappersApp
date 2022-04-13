import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
} from 'react';
import { Text, TextInputProps, View } from 'react-native';
import { useField } from 'formik';
import { CustomInput, InputLabel } from './styles';

type InputProps = TextInputProps;

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  {
    name,
    label,
    onChangeText,
    rawText,
    onInitialData,
    requireTouch = true,
    ...rest
  },
  ref,
) => {
  const [field, meta, helpers] = useField({ name, type: 'text' });
  const inputRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
  }));

  const handleChangeText = useCallback(
    text => {
      const event = {
        target: {
          name,
          value: text,
        },
      };
      if (onChangeText) {
        onChangeText(text);
      }
      field.onChange(event);
    },
    [field, name, onChangeText],
  );

  return (
    <View style={{ width: rest.width || '100%' }}>
      {label && <InputLabel>{label}</InputLabel>}

      <CustomInput
        placeholderTextColor="#000"
        ref={inputRef}
        onBlur={field.onBlur(name)}
        value={field.value}
        onChangeText={handleChangeText}
        onSubmitEditing={field.onBlur(name)}
        // defaultValue={defaultValue}
        {...rest}
      />
      {(requireTouch ? meta.touched : true) && meta.error && (
        <Text style={{ color: '#f00' }}>{meta.error}</Text>
      )}
    </View>
  );
};

export default forwardRef(Input);
