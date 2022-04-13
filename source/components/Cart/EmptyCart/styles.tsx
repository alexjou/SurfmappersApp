import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 40px;
  margin-bottom: 100px;
`;

export const MessageTitle = styled.Text`
  font-weight: bold;
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary_blue};
  margin-top: 50px;
  margin-bottom: 18px;
`;

export const MessageBody = styled.Text`
  font-weight: 500;
  font-size: 14px;
  text-align: center;
  margin-bottom: 18px;
`;

export const BackButton = styled.TouchableOpacity.attrs({ activeOpacity: 1 })`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary_blue};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`;

export const BackButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
