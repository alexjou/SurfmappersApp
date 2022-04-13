import styled from 'styled-components/native';

export const Container = styled.Pressable`
  flex: 1;
  height: ${props => props.small ? 'auto' : '48px'};
  align-items: center;
  justify-content: center;
  background-color: ${props =>
    !props.outline ? props.theme.colors.primary_blue : 'transparent'};

  border: ${props => (props.outline ? 1 : 0)}px solid
    ${props => props.theme.colors.primary_blue};
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
 color: ${props =>
   props.outline ? props.theme.colors.primary_blue : '#ffffff'}
  font-weight: bold;
  font-size: ${props => props.small ? '14px' : '16px'}
  align-items: center;
`;
