import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

const { width, height } = Dimensions.get('screen');

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: ${height / 16}px;
  max-height: 58%;
  background: white;
  border-radius: 10px;
  border-width: 2px;
  border-color: white;
  margin: 5px 0;
  padding: 2px 8px;
  flex-direction: row;
  align-items: center;

  ${props =>
    props.isErrored &&
    css`
      border-color: red;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #2f5ba0;
    `}
`;

export const TextInput = styled.TextInput`
  width: 90%;
  background-color: white;
  border-radius: 10px;
  border-color: white;
  border: none;
  padding: 10px;
  color: #141414;
  font-size: 12px;
  font-weight: 300;
  line-height: 17px;
`;

export const Icon = styled(IoniconsIcons).attrs({
  size: 20,
  color: '#707070',
})``;
