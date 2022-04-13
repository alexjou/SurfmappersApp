import styled from 'styled-components/native';
import FastImage from "react-native-fast-image";

export const Container = styled.View`
  margin-top: 20px;
`;

export const ThumbLocation = styled.Text`
  font-weight: bold;
  color: ${({ theme }) => theme.colors.primary_blue};
`;

export const ThumbActionContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ThumbImage = styled(FastImage).attrs({
  resizeMode: 'cover',
})`
  height: 250px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
`;

export const InfoContainer = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
  align-items: center;
`;

export const ThumbAction = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ThumbActionText = styled.Text`
  padding-left: 5px;
  font-weight: bold;
`;
