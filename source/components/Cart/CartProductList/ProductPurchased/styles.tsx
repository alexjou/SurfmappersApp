import styled from 'styled-components/native';

export const ProductContainer = styled.TouchableOpacity`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ProductPreview = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const ProductPhoto = styled.Image`
  width: 100px;
  height: 70px;
  border-radius: 5px;
  resize-mode: cover;
`;

export const ProductDescription = styled.Pressable`
  margin-left: 10px;
  max-width: 50%;
  background-color: white;
`;

export const PhotoCode = styled.Text`
  font-weight: 300;
  font-size: 16px;
`;

export const PhotoType = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.primary_blue};
`;

export const ProductPrice = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const DeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Discount = styled.Text`
  font-size: 12px;
  text-decoration: line-through;
  color: gray;
`;

export const Price = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-left: 5px;
`;

export const ProductActionsButton = styled.TouchableOpacity`
  margin-left: 5px;
`;
