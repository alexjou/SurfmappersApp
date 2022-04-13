import styled from 'styled-components/native';

export const Divider = styled.View`
  background-color: ${props => props.theme.colors.gray6};
  height: 1px;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SectionButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 17px 16px 31px 16px;
`;

export const SectionText = styled.Text`
  font-weight: bold;
  font-size: 24px;
`;

export const StepText = styled.Text`
  font-weight: bold;
  color: ${props => props.theme.colors.gray};
  font-size: 16px;
`;

export const RoundContainer = styled.View`
  margin-left: 5px;
  border-radius: 10px;
  background-color: ${props =>
    props.correct
      ? props.theme.colors.primary_blue
      : props.theme.colors.primary_red};
`;
