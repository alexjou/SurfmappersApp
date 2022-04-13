import styled from 'styled-components/native';

export const Content = styled.View`
  flex: 1;
  padding: 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;

export const BarCodeContainer = styled.View`
  padding: 16px 36px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const BarCodeText = styled.Text`
  font-size: 16px;
  text-align: center;
`;

export const ButtonLine = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors.primary_blue};
  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonLineText = styled.Text`
  color: ${({ theme }) => theme.colors.primary_blue};
  font-weight: bold;
  margin-left: 8px;
`;

export const CopyButton = styled.TouchableOpacity`
  flex-direction: row;
  margin-top: 16px;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const CopyButtonText = styled.Text`
  color: white;
  font-weight: bold;
  margin-left: 8px;
`;
