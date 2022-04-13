import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 0px;
  padding: 16px;
  height: 60px;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 16px;
  margin-left: 10px;
  font-weight: 700;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'cover',
})`
  height: 30px;
  width: 40%;
`;

export const ContainerIcons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconItem = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin-left: 10px;
`;

export const TitleIcon = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 14px;
  margin-right: 4px;
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

export const Badge = styled.View`
  background-color: #f00;
  width: ${props => (props.length <= 9 ? 46 : 80)}%;
  border-radius: 50px;
  position: absolute;
  right: ${props => (props.length <= 9 ? 0 : -10)}px;
  top: -8px;
  padding: 1px;
`;
export const BadgeText = styled.Text`
  color: #fff;
  align-self: center;
  font-size: 12px;
`;
