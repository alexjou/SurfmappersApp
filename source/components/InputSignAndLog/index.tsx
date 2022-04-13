// eslint-disable-next-line no-use-before-define
import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { Text, TextInputProps } from 'react-native';

import { useField } from 'formik';
import { Container, Icon, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  placeholder: string;
  icon?: string;
  apiError?: boolean;
}

interface InputValueReference {
  value: string;
}

interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { name, placeholder, icon, apiError, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);
  const [field, meta, helpers] = useField({ name, type: 'text' });
  const inputValueRef = useRef<InputValueReference>({ value: '' });

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);

    const event = {
      target: {
        name,
      },
    };
    field.onBlur(event);
    setIsFilled(!!inputValueRef.current.value);
  }, []);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  console.log('meta.error', name, meta.error);
  return (
    <>
      <Container
        isFocused={isFocused}
        isErrored={(meta.touched && !!meta.error) || !!apiError}
      >
        {icon && (
          <Icon
            name={icon}
            color={isFocused || isFilled ? '#2F5BA0' : '#9C9C9C'}
          />
        )}
        <TextInput
          value={field.value || ''}
          ref={inputElementRef}
          onBlur={handleInputBlur}
          placeholder={placeholder}
          keyboardAppearance="dark"
          onFocus={handleInputFocus}
          placeholderTextColor="#9C9C9C"
          onChangeText={field.onChange(name)}
          {...rest}
        />
      </Container>
      {!isFocused && meta.error && (
        <Text style={{ color: '#f00' }}>{meta.error}</Text>
      )}
    </>
  );
};

export default forwardRef(Input);
