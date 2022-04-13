import React from 'react';
import { Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ITEMS_TYPES } from '../../../../constants/ItemsTypes';
import {
  PhotoCode,
  PhotoType,
  ProductContainer,
  ProductDescription,
  ProductPhoto,
  ProductPreview,
} from './styles';

interface CartItem {
  product: any;
  frame: any;
  price: number;
  discount: number;
}

const ProductPurchased: React.FC<CartItem> = ({
  product,
  frame,
  index,
}: CartItem) => {
  const navigation = useNavigation();
  const cover =
    product?.file?.thumbnail ||
    (product?.images?.length > 0 && product?.images[0]?.file.thumbnail) ||
    (product?.sequences?.length > 0 &&
      product?.sequences[0]?.images[0]?.file.thumbnail);

  const navigateToTarget = product => {
    if (
      product.__typename === ITEMS_TYPES.SEQUENCE ||
      product.__typename === ITEMS_TYPES.PHOTO
    ) {
      navigation.navigate('PhotoPreview', {
        id: product.id,
        typeName: product.__typename,
      });

      return;
    }

    if (product.__typename === ITEMS_TYPES.PACKAGE) {
      navigation.navigate('BundleDetails', {
        item: product,
      });
      return;
    }
  };

  const getLabel = product => {
    switch (product.__typename) {
      case ITEMS_TYPES.SEQUENCE:
        return 'Sequência';
      case ITEMS_TYPES.PACKAGE:
        return 'Pacote';
      default:
        return `${product.__typename} - ${frame ? 'Impressa' : 'Digital'}`;
    }
  };

  return (
    <>
      <ProductContainer>
        <ProductPreview>
          <Pressable onPress={() => navigateToTarget(product)}>
            <ProductPhoto source={{ uri: cover }} />
          </Pressable>
          <ProductDescription>
            <PhotoCode>#{index + 1}</PhotoCode>
            <PhotoType>{getLabel(product)}</PhotoType>
          </ProductDescription>
        </ProductPreview>
      </ProductContainer>
    </>
  );
};

export default ProductPurchased;
