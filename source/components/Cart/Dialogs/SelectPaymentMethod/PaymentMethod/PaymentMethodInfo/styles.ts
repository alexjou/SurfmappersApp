// PaymentMethodInfo/styles.ts
import styled from 'styled-components/native';

export const Description = styled.View`
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
  flex: 2;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Subtitle = styled.Text`
  color: gray;
  margin-right: 8px;
  margin-left: 8px;
`;

export const Options = styled.TouchableOpacity`
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  flex: 2;
`;

export const OptionTitle = styled.Text.attrs((props: any) => ({
  color: props.color || 'gray',
}))`
  font-weight: normal;
  color: ${props => props.color};
`;

export const ActionsButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
`;

export const PaymentMethodIcon = styled.Image`
  margin-right: 8px;
`;

export const BrandIcon = styled.Image`
  width: 50px;
  height: 50px;
  resize-mode: contain;
`;
