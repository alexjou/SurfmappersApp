import styled from 'styled-components/native';

export const ModalContent = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  align-items: center;
  flex-direction: column-reverse;
`;

export const TipInputContainer = styled.View`
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  padding: 16px;
  padding-bottom: 32px;
`;

export const ModalHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding-bottom: 8px;
`;

export const CloseButton = styled.TouchableOpacity``;

export const ModalTitle = styled.Text`
  font-weight: bold;
  color: gray;
  font-size: 16px;
`;

export const InputLabel = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const TipInput = styled.TextInput`
  width: 100%;
  text-align: center;
  padding: 24px;
  font-size: 32px;
  border-top-width: 1px;
  border-color: lightgray;
  margin-top: 8px;
  color: black;
`;

export const AddButton = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary_blue};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const AddButtonText = styled.Text`
  font-weight: bold;
  color: white;
`;
