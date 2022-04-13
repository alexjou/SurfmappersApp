import { Animated, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import translate from '@locales/index';
import { useField } from 'formik';
import {
  Box,
  Container,
  ContainerAbsolute,
  OptionButton,
  TypeText,
} from './styles';

const UserTypeSwitch: React.FC = () => {
  const swithRef = useRef<any>(null);
  const [field, meta, helpers] = useField({
    name: 'userType.userTypeSwitch',
    type: 'text',
  });
  const [type, setType] = useState(field.value);
  const swithAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(swithAnim, {
      toValue: type === 'surfer' ? 4 : 150,
      useNativeDriver: false,
      duration: 400,
    }).start();
    field.onChange(type);
  }, [type]);

  return (
    <>
      <Container>
        <ContainerAbsolute ref={swithRef}>
          <OptionButton onPress={() => setType('surfer')}>
            <TypeText active={type === 'surfer'}>
              {translate('surfer')}
            </TypeText>
          </OptionButton>
          <OptionButton onPress={() => setType('photographer')}>
            <TypeText active={type === 'photographer'}>
              {translate('photographer')}
            </TypeText>
          </OptionButton>
        </ContainerAbsolute>
        <Box style={{ left: swithAnim }} />
      </Container>
      {meta.touched && meta.error && (
        <Text style={{ color: '#f00' }}>{meta.error}</Text>
      )}
    </>
  );
};
export default UserTypeSwitch;
