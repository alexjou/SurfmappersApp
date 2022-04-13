import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';

const Container = styled.TouchableOpacity`
  position: absolute;
  bottom: 70px;
  height: 60px;
  width: 80%;
  right: 10%;
  background-color: white;
  border-radius: 8px;
  shadow-opacity: 0.25;
  shadow-radius: 8px;
  shadow-color: black;
  shadow-offset: 0px 0px;
  justify-content: center;
  align-items: center;
`;
const AuthModal: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container onPress={() => navigation.navigate('AuthRoutes')}>
      <Text>Você ainda não fez login no app</Text>
      <Text style={{ fontWeight: 'bold' }}>Clique aqui para fazer login</Text>
    </Container>
  );
};

export default AuthModal;
