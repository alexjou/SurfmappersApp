import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ModalContent = styled.View`
  flex: 1;
  width: 100%;
  padding: 16px;
  justify-content: flex-start;
  align-items: center;
`;

export const ModalHeader = styled.SafeAreaView`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-left: -10px;
`;

export const ArrowLeft = styled(MaterialIcons).attrs({
  name: 'chevron-left',
  size: 30,
  color: 'gray',
})``;

export const HeaderTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const MethodsListContainer = styled.View`
  padding-top: 16px;
  flex: 1;
  width: 100%;
`;

export const NewCardButtonContainer = styled.SafeAreaView`
  width: 100%;
  padding-bottom: 10%;
`;

export const NewCardButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 5px;
  border-width: 1px;
  border-color: gray;
  margin: 16px;
  margin-bottom: 0px;
`;

export const NewCardButtonText = styled.Text`
  font-weight: bold;
`;

export const FormContainer = styled.ScrollView`
  width: 100%;
`;

export const Title = styled.Text`
  font-weight: 500;
  font-size: 24px;
  align-self: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  color: tomato;
`;

export const AddButton = styled.TouchableOpacity`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.primary_blue};
  border-radius: 5px;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const AddButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
