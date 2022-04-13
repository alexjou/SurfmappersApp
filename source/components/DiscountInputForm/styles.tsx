import styled from 'styled-components/native';

export const InputRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const InputRowHeader = styled(InputRow)`
  margin-right: 50px;
`;

export const RoundButton = styled.TouchableOpacity`
  margin-left: 5px;
  border-radius: 10px;
  background-color: ${props =>
    props.green
      ? props.theme.colors.primary_blue
      : props.theme.colors.primary_red};
`;
