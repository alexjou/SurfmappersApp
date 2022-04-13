import styled from 'styled-components/native';
import { PlaceholderLine, PlaceholderMedia } from 'rn-placeholder';

export const Container = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  margin-vertical: 20px;
`;

export const RowCart = styled.View`
  margin-top: 20px;
  margin-right: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SessionTitle = styled(PlaceholderLine)`
  width: 100%;
`;

export const Title = styled(PlaceholderLine)`
  width: 163px;
  height: 16px;
  text-align: center;
`;


export const ProductItemImage = styled(PlaceholderMedia)`
  width: 100px;
  height: 70px;
  border-radius: 5px;
`;

export const LineHorizontal = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-color: #ededed;
`;

export const ButtonAddItems = styled.View`
  border-top-width: 1px;
  border-bottom-width: 1px;
  height: 64px;
  border-color: #ededed;
  justify-content: center;
  align-items: center;
`;
