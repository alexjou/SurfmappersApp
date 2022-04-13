import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: ${props => (props.read ? '#fff' : '#00000007')};
  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ededed;
`;

export const ContainerText = styled.View`
  max-width: 50%;
`;

export const ItemText = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  color: #141414;
  margin-bottom: 15px;
`;

export const ItemTextDate = styled.Text`
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
