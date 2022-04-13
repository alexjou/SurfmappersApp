import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const PaymentMethodsList = styled.View`
  flex: 3;
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
  padding-bottom: 5%;
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
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const NewCardButtonText = styled.Text`
  font-weight: bold;
  color: #fff;
`;
