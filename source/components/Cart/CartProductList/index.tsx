import React from 'react';
import { FlatList, View } from 'react-native';
import { StackActions, useNavigation } from '@react-navigation/native';
import translate from '../../../locales';
import ProductItem from './ProductItem';
import ProductPurchased from './ProductPurchased';
import {
  AddMoreButton,
  AddMoreButtonText,
  ProductListContainer,
  ProductListTitle,
  ProductListView,
} from './styles';

const CartProductList: React.FC<any> = ({ items, finished, refetch }) => {
  const navigation = useNavigation();
  return (
    <>
      {items ? (
        <ProductListContainer>
          {!finished ? (
            <>
              <ProductListTitle>{translate('selected_items')}</ProductListTitle>
              {items?.map((item, index) => (
                <ProductItem
                  key={item?.product?.id}
                  product={item?.product}
                  frame={item?.frame}
                  price={item?.price}
                  discount={item?.discount}
                  index={index}
                />
              ))}
              <AddMoreButton
                onPress={() => navigation.dispatch(StackActions.pop(2))}
              >
                <AddMoreButtonText>
                  {translate('add_more_items')}
                </AddMoreButtonText>
              </AddMoreButton>
            </>
          ) : (
            <ProductListView>
              {items?.map((item, index) => (
                <ProductPurchased
                  key={item?.product?.id}
                  product={item?.product}
                  frame={item?.frame}
                  price={item?.price}
                  discount={item?.discount}
                  index={index}
                />
              ))}
            </ProductListView>
          )}
        </ProductListContainer>
      ) : (
        <ProductListContainer>
          <ProductListTitle>{translate('selected_photos')}</ProductListTitle>
          <AddMoreButton
            onPress={() => navigation.dispatch(StackActions.pop(2))}
          >
            <AddMoreButtonText>{translate('add_more_items')}</AddMoreButtonText>
          </AddMoreButton>
        </ProductListContainer>
      )}
    </>
  );
};

export default CartProductList;
