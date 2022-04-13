import styled, { css } from 'styled-components/native';

interface ViewProps {
  new: boolean;
}

interface TitleColor {
  status?: string;
}

export const Container = styled.TouchableOpacity<ViewProps>`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 16px;
  border-bottom-width: 1px;
  border-bottom-color: #ededed;

  ${props =>
    props.new
      ? css`
          background-color: #f3f3f3;
        `
      : css`
          background-color: #ffffff;
        `}
`;

export const ContainerText = styled.View`
  max-width: 50%;
`;

export const ItemTextTitle = styled.Text<TitleColor>`
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  margin-bottom: 5px;

  ${props =>
    props.status === 'recused' &&
    css`
      color: #ff3b30;
    `}

  ${props =>
    props.status === 'cancel' &&
    css`
      color: #ff3b30;
    `}

  ${props =>
    props.status === 'pending_payment' &&
    css`
      color: #11aba6;
    `}
`;

export const ItemText = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #141414;
  margin-bottom: 8px;
`;

export const PaymentMethod = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #141414;
  margin-bottom: 8px;
`;

export const ItemTextValue = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #141414;
  margin-bottom: 8px;
`;

export const ItemTextDate = styled.Text`
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 12px;
  color: #797979;
`;

export const ContainerImage = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  width: 93.94px;
  height: 64px;
  border-radius: 8px;
`;

export const ItemAlert = styled.View`
  background-color: ${({ theme }) => theme.colors.primary_blue};
  height: 8px;
  width: 8px;
  border-radius: 50px;
  margin-left: 5px;
`;
