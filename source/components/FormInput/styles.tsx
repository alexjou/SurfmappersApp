import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const InputLabel = styled.Text`
  font-weight: bold;
  margin-top: 8px;
  color: #000;
`;

export const CustomInput = styled.TextInput`
  height: 50px;
  background-color: #0001;
  margin: 4px 0px;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
  color: #000;
`;

export const CustomInputMask = styled(TextInputMask)`
  height: 50px;
  color: #000;
  background-color: #0001;
  margin: 4px 0px;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
`;
