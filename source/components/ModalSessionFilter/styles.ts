import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

export const ModalContainer = styled.View`
  flex: 1;
  flex-direction: column-reverse;
  width: 100%;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.View`
  flex: 0.7;
  width: 100%;
  background-color: white;
  height: 40%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

export const ModalHeader = styled.View`
  padding: 16px 16px 0 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ModalTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: #3a3a3a;
  line-height: 14px;
`;

export const SeparatorLine = styled.View`
  width: ${width}px;
  height: 1px;
  margin: 8px 0;
  background-color: #ededed;
`;

export const SurferCard = styled.TouchableOpacity`
  width: ${width}px;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const SurferAvatar = styled.Image.attrs({
  resizeMode: 'cover',
})`
  width: 56px;
  height: 56px;
  border-radius: 56px;
`;
