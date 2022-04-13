import styled from 'styled-components/native';

export const Row = styled.TouchableOpacity`
  flex-direction: row;
  padding: 16px;
  justify-content: space-between;
  border: 1px solid ${props => (props.selected ? '#11ABA6' : '#9c9c9c')};
  margin: 4px 0;
  border-radius: 8px;
`;

export const SelectableText = styled.Text`
  color: ${props => (props.selected ? '#11ABA6' : 'black')};
  font-weight: ${props => (props.selected ? 700 : 300)};
  max-width: 220px;
`;
