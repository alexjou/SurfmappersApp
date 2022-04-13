import styled from 'styled-components/native';
import { PlaceholderLine, PlaceholderMedia } from 'rn-placeholder';

export const Container = styled.View``;

export const ThumbImagePlaceholder = styled(PlaceholderMedia)`
  height: 250px;
  width: 100%;
  border-radius: 5px;
`;

export const ExplorePlaceholder = styled(PlaceholderMedia)`
  width: 33.33%;
  height: 120px;
  border: solid 1px #fff;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: 14px;
  margin-top: 14px;
`;

export const Row = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-between;
`;

export const SessionPlaceholderContainer = styled.View`
  flex-direction: row;
`;

export const Title = styled(PlaceholderLine)`
  width: 163px;
  height: 16px;
  text-align: center;
`;
