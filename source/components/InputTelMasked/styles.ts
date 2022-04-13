import styled, { css } from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

interface ContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 55px;
  background: white;
  border-radius: 10px;
  border-width: 2px;
  border-color: white;
  margin: 5px 0;
  padding: 2px 8px;
  align-items: center;
  flex-direction: row;

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

export const TextInputTel = styled(TextInputMask)`
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

export const Icon = styled(MaterialIcons).attrs({
  size: 25,
})``;
