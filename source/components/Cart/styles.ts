// components/cart/styles.ts
import styled from 'styled-components/native';

export const PaymentMethodContainer = styled.Pressable`
  align-items: center;
  padding: 16px;
  width: 100%;
`;

export const PaymentMethodHeader = styled.View`
  width: 100%;
  justify-content: space-between;
`;

export const PaymentMethodText = styled.Text`
  font-weight: bold;
`;

export const ChooseText = styled.Text`
  color: ${({ theme }) => theme.colors.primary_blue};
  font-weight: bold;
  margin-left: 12px;
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
  background-color: ${({ theme, disabled }) =>
    disabled ? '#C3C3C3' : theme.colors.primary_blue};
`;

export const PurchaseButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
