import styled from 'styled-components/native';
import theme from '@styles/theme/theme';

export const Container = styled.View`
  align-items: flex-start;
  margin-top: 12px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-bottom: 8px;
`;

export const TextBold = styled.Text`
  font-weight: bold;
`;
export const SearchBarButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  padding: 4px 16px;
  width: 100%;
  height: 48px;
  border-radius: 8px;
`;

export const TextSearchBar = styled.Text`
  justify-content: flex-start;
  align-items: center;
  font-size: 16px;
  color: ${theme.colors.gray};
`;
