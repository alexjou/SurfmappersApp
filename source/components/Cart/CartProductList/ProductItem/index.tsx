import React, { useEffect, useMemo, useState } from 'react';
import { Text, Pressable } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { PythonApi } from '@services/api';
import Collapsible from 'react-native-collapsible';
import MultiLineSelector from '@components/MultiLineSelector';
// import productsType from '@components/Cart/Dialogs/productsTypeMock';
import { useQuery, gql, useApolloClient } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import { useCart } from '../../../../hooks/cart';
import { ITEMS_TYPES } from '../../../../constants/ItemsTypes';
import {
  DeleteButton,
  Discount,
  PhotoCode,
  PhotoType,
  Price,
  ProductContainer,
  ProductDescription,
  ProductPhoto,
  ProductPreview,
  ProductPrice,
} from './styles';

interface CartItem {
  product: any;
  frame: any;
  price: number;
  discount: number;
}

const albumFormatsQuery = gql`
  query GetFrameOptions {
    frameOptions {
      price
      description
      size
      material
    }
  }
`;

const ProductItem: React.FC<CartItem> = ({
  product,
  frame,
  price,
  discount,
  index,
}: CartItem) => {
  const { changeProductType } = useCart();
  const apolloClient = useApolloClient();
  const { data } = useQuery(albumFormatsQuery);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const navigation = useNavigation();

  // CartItem.cover deveria vir direto da api. Implementação temporária
  const cover =
    product?.file?.thumbnail ||
    (product?.images?.length > 0 && product?.images[0]?.file.thumbnail) ||
    (product?.sequences?.length > 0 &&
      product?.sequences[0]?.images[0]?.file.thumbnail);

  const isPhoto = product.__typename === ITEMS_TYPES.PHOTO;

  const navigateToTarget = product => {
    if (product.__typename === ITEMS_TYPES.SEQUENCE || product.__typename === ITEMS_TYPES.PHOTO) {
      navigation.navigate('PhotoPreview', {
        id: product.id,
        typeName: product.__typename,
      });

      return
    }
    
    if (product.__typename === ITEMS_TYPES.PACKAGE) {
      navigation.navigate('BundleDetails', {
        item: product,
      });
      return
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
          <ProductDescription onPress={() => setIsCollapsed(!isCollapsed)}>
            <PhotoCode>
              #{index + 1}{' '}
              {isPhoto && (
                <MaterialIcons
                  size={16}
                  name={isCollapsed ? 'chevron-down' : 'chevron-up'}
                />
              )}
            </PhotoCode>
            <PhotoType>{getLabel(product)}</PhotoType>
          </ProductDescription>
        </ProductPreview>
        <ProductPrice>
          {discount && <Discount>R$ {discount}</Discount>}
          <Price>R${price}</Price>
          <DeleteButton
            onPress={async () => {
              await PythonApi.Cart.removeItem(product.id, product.__typename);
              apolloClient.refetchQueries({
                include: ['GetMyCart', 'GetOwnedStatus'],
              });
            }}
          >
            <MaterialIcons name="delete" size={24} color="#898A8D" />
          </DeleteButton>
        </ProductPrice>
      </ProductContainer>
      {product.__typename === ITEMS_TYPES.PHOTO && (
        <Collapsible collapsed={isCollapsed}>
          <MultiLineSelector
            data={data?.frameOptions}
            optionComponent={item => (
              <>
                <Text>{item.description}</Text>
                <Text>{item.price}</Text>
              </>
            )}
            selected={frame}
            keysToCompare={['size', 'material']}
            onSelect={frame => {
              console.log(product.id, frame);
              changeProductType(product.id, frame);
            }}
          />
        </Collapsible>
      )}
    </>
  );
};

export default ProductItem;
