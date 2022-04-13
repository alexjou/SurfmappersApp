import styled from 'styled-components/native';

export const ProductListContainer = styled.View`
  padding: 16px;
  width: 100%;
`;

export const ProductListTitle = styled.Text`
  font-weight: bold;
`;

export const ProductListView = styled.View`
  margin-top: -30px;
`;

export const AddMoreButton = styled.TouchableOpacity`
  margin: 8px 0px;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: lightgray;
  justify-content: center;
  align-items: center;
  height: 60px;
`;

export const AddMoreButtonText = styled.Text`
  ${({ theme }) => theme.colors.primary_blue};
  font-weight: bold;
  font-size: 16px;
`;
