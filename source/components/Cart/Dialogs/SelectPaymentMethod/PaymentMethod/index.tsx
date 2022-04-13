// components/Cart/Dialogs/SelectPaymentMethod/PixMethod/index.tsx
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import PaymentMethodInfo from './PaymentMethodInfo';

import { PaymentMethodContainer } from './styles';

const PaymentMethod = ({
  type,
  card,
  isSelected,
  onDeleteCard,
  onSelectCard,
  onSelectPaymentMethod,
}) => {
  const navigation = useNavigation();
  const cardLastNumbers = card && card.last4_digits;

  return (
    <PaymentMethodContainer
      selected={isSelected}
      activeOpacity={1}
      onPress={() => {
        if (onSelectCard) {
          onSelectCard(card);
        }

        if (onSelectPaymentMethod) {
          onSelectPaymentMethod(type);
        }
      }}
    >
      {type === 'CREDIT_CARD' ? (
        <PaymentMethodInfo
          type={type}
          onDeleteCard={onDeleteCard}
          cardId={card._id}
          cardType="Credit"
          cardBrand={card.card_brand}
          cardLastNumbers={cardLastNumbers}
        />
      ) : (
        <PaymentMethodInfo type={type} />
      )}
    </PaymentMethodContainer>
  );
};

export default PaymentMethod;
