import styled from 'styled-components/native';

export const ModalContent = styled.KeyboardAvoidingView`
  width: 100%;
  flex: 1;
  align-items: center;
  flex-direction: column-reverse;
`;

export const ContainerHelper = styled.View`
  background-color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  width: 100%;
  padding: 25px;
  padding-bottom: 32px;
`;

export const ModalHeader = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  top: 0;
  padding-bottom: 8px;
`;

export const ModalTitle = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 16px;
`;

export const TextContainerHelper = styled.View`
  margin-top: 5px;
  margin-bottom: 20px;
`;

export const TextHelper = styled.Text`
  font-weight: normal;
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
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 100%;
  height: 40px;
  background-color: #e51f24;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
`;

export const ActionButtons = styled.View`
  align-items: center;
`;

export const DeleteButtonText = styled.Text`
  font-weight: bold;
  color: white;
`;

export const CancelButton = styled.TouchableOpacity``;

export const CancelButtonText = styled.Text`
  font-weight: normal;
  color: #e51f24;
  margin-top: 10px;
`;
