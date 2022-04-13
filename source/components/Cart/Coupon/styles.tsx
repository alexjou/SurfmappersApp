import styled from 'styled-components/native';

export const CouponContainer = styled.View`
  padding: 16px;
  width: 100%;
`;

export const CouponContent = styled.Pressable`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;
  border-color: lightgray;
  border-bottom-width: 1px;
`;

export const CouponCall = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CouponCallTexts = styled.View`
  justify-content: center;
  align-items: flex-start;
  margin-left: 8px;
`;

export const CouponTitle = styled.Text`
  font-weight: bold;
`;

export const CouponSubtitle = styled.Text`
  font-size: 12px;
`;
