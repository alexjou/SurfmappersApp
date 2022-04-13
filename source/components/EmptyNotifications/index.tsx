import { Text } from 'react-native';
import React from 'react';
import translate from '@locales/index';
import { Container } from './styles';

const EmptyNotifications: React.FC = () => {
  return (
    <Container>
      <Text>{translate('empty_notifications')}</Text>
    </Container>
  );
};

export default EmptyNotifications;
