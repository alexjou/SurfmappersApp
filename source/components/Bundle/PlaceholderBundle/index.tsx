import React from 'react';
import { Fade, Placeholder } from 'rn-placeholder';
import {
  ButtonAddItems,
  Container,
  LineHorizontal,
  ProductItemImage,
  RowCart,
  SessionTitle, Title,
} from '@components/Bundle/PlaceholderBundle/styles';

const PlaceholderBundle: React.FC<any> = () => (
  <Container>
    <Placeholder Animation={Fade}>
      <Title style={{ margin: 30 }} />

      <LineHorizontal style={{ marginTop: 10 }} />

      <SessionTitle />

      <SessionTitle />

      <SessionTitle />

      <SessionTitle />

      <SessionTitle style={{ marginTop: 10, width: 130 }} />

      <RowCart style={{ marginTop: 5 }}>
        <ProductItemImage />
        <ProductItemImage />
        <ProductItemImage />
      </RowCart>

      <LineHorizontal style={{ marginTop: 10 }} />

      <SessionTitle style={{ marginTop: 10, width: 130 }} />

      <RowCart style={{ marginTop: 5 }}>
        <ProductItemImage />
        <ProductItemImage />
        <ProductItemImage />
      </RowCart>

      <LineHorizontal style={{ marginTop: 10 }} />

      <ButtonAddItems>
        <SessionTitle style={{ height: 40 }} />
      </ButtonAddItems>
    </Placeholder>
  </Container>
);

export default PlaceholderBundle;
