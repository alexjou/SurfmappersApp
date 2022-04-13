const productsType = [
  { type: 'mdf', size: 'A4', description: 'Quadro MDF A4', price: 60 },
  { type: 'mdf', size: 'A3', description: 'Quadro MDF A3', price: 100 },
  {
    type: 'glass',
    size: 'A4',
    description: 'Quadro Com Moldura Preta com Vidro A4',
    price: 150,
  },
  {
    type: 'glass',
    size: 'A3',
    description: 'Quadro Com Moldura Preta com Vidro A3',
    price: 210,
  },
];

export const getName = (
  { size, type, option, description, price },
  showPrice,
) => {
  const currentProductType = productsType.find(
    productType =>
      productType.size === size && productType.type === (option || type),
  );
  if (currentProductType) {
    return `${currentProductType?.description}${
      showPrice ? ` - R$${currentProductType?.price},00` : ''
    }`;
  }
  return `${description}${showPrice ? ` - R$${price},00` : ''}`;
};
export default productsType;
