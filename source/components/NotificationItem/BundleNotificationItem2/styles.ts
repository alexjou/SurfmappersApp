import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => (props.read ? 'transparent' : '#00000007')};
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ededed;
`;

export const ContainerInfo = styled.View`
  margin-left: 10px;
`;

export const ContainerActions = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const ItemTextTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #c4c4c4;
  margin-bottom: 5px;
`;

export const ItemTextPhotographer = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #3a3a3a;
  margin-bottom: 5px;
`;

export const ItemTextValue = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #797979;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80px;
  height: 64px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const AcceptButton = styled.TouchableOpacity`
  align-items: center;
  width: 70px;
  height: 30px;
  justify-content: center;
  margin-left: 16px;
  background-color: ${theme.colors.primary_blue};
  border-radius: 4px;
  border-width: 1px;
  border-color: ${theme.colors.primary_blue};
  margin-bottom: 10px;
`;

export const AcceptButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

export const RefuseButton = styled.TouchableOpacity`
  align-items: center;
  width: 70px;
  height: 30px;
  justify-content: center;
  margin-left: 16px;
  background-color: #c4c4c4;
  border-radius: 4px;
`;

export const RefuseButtonText = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;
