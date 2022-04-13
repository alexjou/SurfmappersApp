import React from 'react';
import { ButtonText, Container } from './styles';

const Button: React.FC = ({ title, style, onPress, outline, children, small}) => {
  return (
    <Container outline={outline} onPress={onPress} style={style}>
      <ButtonText outline={outline} small>{title}</ButtonText>
      {children}
    </Container>
  );
};

export default Button;
