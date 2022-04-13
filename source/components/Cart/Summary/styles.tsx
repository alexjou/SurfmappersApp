import styled from 'styled-components/native';

export const SummaryContainer = styled.View`
  padding: 16px;
  width: 100%;
`;

export const SummaryTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const SummaryRow = styled.View.attrs((props: any) => ({
  paddingTop: props.paddingTop || false,
}))`
  padding-top: ${props => (props.paddingTop ? '16px' : 0)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${props => (props.paddingTop ? '32px' : 0)};
  border-color: lightgray;
  border-bottom-width: ${props => (props.paddingTop ? '1px' : 0)};
`;

export const SummaryRowText = styled.Text.attrs((props: any) => ({
  color: props.color || 'gray',
}))`
  font-size: 16px;
  color: ${props => props.color};
`;

export const SummaryRowTextTotal = styled.Text`
  font-size: 24px;
  font-weight: bold;
`;
