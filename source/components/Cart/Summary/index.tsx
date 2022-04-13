// eslint-disable-next-line no-use-before-define
import React from 'react';
import translate from '../../../locales';
import {
  SummaryContainer,
  SummaryRow,
  SummaryRowText,
  SummaryRowTextTotal,
  SummaryTitle,
} from './styles';

const Summary: React.FC<any> = ({
  cartFinalPrice,
  cartFullPrice,
  cartDiscount,
  cartCoupon,
  cartTippings,
  cartItemsNumber,
  cartFramesPrice,
  cartShippingPrice,
}) => {
  return (
    <SummaryContainer>
      <SummaryTitle>{translate('summary')}</SummaryTitle>
      <SummaryRow>
        <SummaryRowText>
          {cartItemsNumber} {translate('items')}
        </SummaryRowText>
        <SummaryRowText>R$ {cartFullPrice}</SummaryRowText>
      </SummaryRow>
      <SummaryRow>
        <SummaryRowText>{translate('discount')}</SummaryRowText>
        <SummaryRowText color="green">
          - R${cartCoupon || cartDiscount}
        </SummaryRowText>
      </SummaryRow>
      {cartFramesPrice ? (
        <SummaryRow>
          <SummaryRowText>{translate('framesPrice')}</SummaryRowText>
          <SummaryRowText>R$ {cartFramesPrice}</SummaryRowText>
        </SummaryRow>
      ) : null}
      {cartShippingPrice ? (
        <SummaryRow>
          <SummaryRowText>{translate('shipping')}</SummaryRowText>
          <SummaryRowText>R$ {cartShippingPrice}</SummaryRowText>
        </SummaryRow>
      ) : null}
      <SummaryRow>
        <SummaryRowText>{translate('tip')}</SummaryRowText>
        <SummaryRowText>R$ {cartTippings}</SummaryRowText>
      </SummaryRow>
      <SummaryRow paddingTop>
        <SummaryRowTextTotal>Total</SummaryRowTextTotal>
        <SummaryRowTextTotal>R$ {cartFinalPrice}</SummaryRowTextTotal>
      </SummaryRow>
    </SummaryContainer>
  );
};

export default Summary;
