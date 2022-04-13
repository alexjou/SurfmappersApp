import styled from 'styled-components/native';
import { TextInputMask } from 'react-native-masked-text';

export const InputLabel = styled.Text`
  font-weight: bold;
  margin-top: 8px;
`;

export const Option = styled.Text`
  font-weight: bold;
  color: ${props =>
    props.isSelected
      ? props.theme.colors.primary_blue
      : props.theme.colors.gray1};
`;

export const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 8px 0;
`;

export const OptionContainer = styled.TouchableOpacity`
  border: 1px solid
    ${props =>
      props.isSelected
        ? props.theme.colors.primary_blue
        : props.theme.colors.gray4};
  border-radius: 8px;
  margin: 4px;
  padding: 8px;
`;

export const CustomInputMask = styled(TextInputMask)`
  height: 50px;
  background-color: #0001;
  margin: 4px 0px;
  border-radius: 5px;
  padding: 8px 16px;
  font-size: 16px;
  width: 100%;
`;
