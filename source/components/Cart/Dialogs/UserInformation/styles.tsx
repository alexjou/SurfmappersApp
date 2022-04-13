import { DefaultTheme } from '@react-navigation/native';
import styled from 'styled-components/native';

export const FormContainer = styled.ScrollView`
  width: 100%;
  padding: 16px;
`;

export const HeaderTitle = styled.Text`
  font-weight: 500;
  font-size: 24px;
  align-self: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 1;
`;

export const AddButton = styled.TouchableOpacity`
  height: 50px;
  background-color: ${DefaultTheme.colors.primary};
  border-radius: 5px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  margin-bottom: 20px;
`;

export const AddButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
