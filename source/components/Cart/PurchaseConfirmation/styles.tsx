import styled from 'styled-components/native';

export const HeaderTitle = styled.Text`
  font-weight: 500;
  font-size: 24px;
  align-self: flex-start;
  padding-top: 16px;
  padding-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary_blue};
  margin: 0px 16px;
`;

export const HeaderSubtitle = styled.Text`
  margin: 8px 16px;
`;

export const PaymentMethod = styled.TouchableOpacity`
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

export const DownloadAllButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const DownloadAllButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;

export const CardMethodInformation = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const CardMethodDescription = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-left: 8px;
`;

export const CardMethodTitle = styled.Text`
  font-weight: bold;
`;

export const CardMethodSubtitle = styled.Text`
  color: gray;
`;

export const BackHomeButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 5px;
  border-width: 1px;
  border-color: gray;
  margin: 16px;
  margin-bottom: 0px;
  width: 100%;
`;

export const BackHomeButtonText = styled.Text`
  font-weight: bold;
`;
