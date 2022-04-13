import styled from 'styled-components/native';

export const PaymentMethodButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const PaymentMethodText = styled.Text`
  font-weight: bold;
`;

export const ChooseText = styled.Text`
  color: ${({ theme }) => theme.colors.primary_blue};
  font-weight: bold;
`;

export const Purchase = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const PurchaseButton = styled.TouchableOpacity`
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const PurchaseButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
