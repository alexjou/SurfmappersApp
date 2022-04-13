import theme from '@styles/theme/theme';
import styled from 'styled-components/native';

export const TipContainer = styled.View`
  padding: 16px;
  width: 100%;
`;

export const TipTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 16px;
`;

export const TipCall = styled.Text`
  font-weight: bold;
  color: gray;
`;

export const TipMessage = styled.Text`
  font-weight: 200;
`;

export const TipActions = styled.View`
  margin-top: 16px;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

export const TipButton = styled.TouchableOpacity.attrs((props: any) => ({
  width: props.width || '15%',
  selected: props.selected || false,
}))`
  flex-direction: row;
  width: ${props => props.width};
  height: 40px;
  border-width: ${props => (props.selected ? '2px' : '1px')};
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border-color: ${props =>
    props.selected ? theme.colors.primary_blue : 'gray'};
`;

export const TipButtonText = styled.Text.attrs((props: any) => ({
  selected: props.selected || false,
}))`
  font-weight: bold;
  color: ${props => (props.selected ? theme.colors.primary_blue : 'gray')};
`;
