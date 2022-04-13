import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Div = styled.View`
  padding: 16px;
`;

export const Title = styled.Text`
  padding: 0 16px;
  font-size: 24px;
  color: #141414;
  font-weight: bold;
  margin-bottom: 8px;
  line-height: 32px;
`;

export const Description = styled.Text`
  padding: 0 16px 24px 16px;
  color: #797979;
  font-size: 14px;
  line-height: 18px;
`;

export const Line = styled.View`
  border-color: #ededed;
  border-top-width: 1px;
  margin-top: 12px;
  margin-bottom: 12px;
`;

export const ButtonPix = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  background-color: #11aba6;
  width: 100%;
  height: 48px;
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonPixText = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ButtonSolution = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  margin-top: 8px;
  width: 100%;
  height: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const ButtonSolutionText = styled.Text`
  color: #141414;
  font-size: 16px;
`;

export const SolutionIcon = styled(Feather).attrs({
  size: 30,
})`
  color: #000;
  position: absolute;
  right: 8px;
`;

export const DivAlert = styled.View`
  margin-top: 12px;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const AlertIcon = styled(Feather).attrs({
  size: 30,
})`
  color: #000;
  padding-right: 8px;
`;

export const AlertText = styled.Text`
  font-weight: bold;
  color: #000;
  font-size: 16px;
`;

export const SolutionOptions = styled.View`
  margin-top: 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Image = styled.Image`
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const Box = styled.View`
  margin: 24px 12px 32px 12px;
  height: ${props => (props.collapsed ? 172 : 48)}px;
  border-color: #9c9c9c;
  border-radius: 8px;
  border-width: 1px;
`;
