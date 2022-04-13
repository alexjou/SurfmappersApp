import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Box = styled(Animated.View)`
  width: 148px;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary_blue};
  height: 42px;
  top: 4px;
  z-index: 1;
  position: absolute;
`;
export const ContainerAbsolute = styled.View`
  position: absolute;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  width: 100%;
  z-index: 2;
`;

export const Container = styled.View`
  background: #f3f3f3;
  border-radius: 8px;
  height: 50px;
  width: 300px;
`;
export const TypeText = styled.Text`
  font-weight: bold;
  text-align: center;
  color: ${props => (props.active ? '#FFFFFF' : 'black')};
`;

export const OptionButton = styled.TouchableOpacity`
  padding: 16px 0px;
  flex: 1;
`;
