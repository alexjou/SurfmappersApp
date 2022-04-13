import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ContainerSearch = styled.View`
  width: 100%;
  position: absolute;
  z-index: 100;
`;

export const Search = styled.TextInput`
  background-color: #f3f3f3;
  width: 100%;
  padding: 0 16px;
  height: 48px;
  font-size: 16px;
  border-radius: 8px;
`;
