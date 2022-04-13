// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import translate from '@locales/index';
import { PythonApi } from '@services/api';
import EmptyWallet from '@components/Wallet/EmptyWallet';
import Toast from 'react-native-toast-message';
import {
  NewCardButton,
  NewCardButtonContainer,
  NewCardButtonText,
  PaymentMethodsList,
} from './styles';
import PaymentMethod from './PaymentMethod';
import AddNewCreditCard from './AddNewCreditCard';

interface IPaymentMethodsProps {
  onlyShowCards: boolean;
  showEmptyCards: boolean;
  disableSelectCard: boolean;
}

const SelectPaymentMethod: React.FC<IPaymentMethodsProps> = ({
  onlyShowCards,
  showEmptyCards,
  disableSelectCard,
}: IPaymentMethodsProps) => {
  const [registeredPaymentMethods, setRegisteredPaymentMethods] = useState([]);
  const [chosenMethod, setChosenMethod] = useState();
  const navigation = useNavigation();
  const { params } = useRoute();

  const loadCards = async () => {
    const cards = await PythonApi.Card.getCards();
    setRegisteredPaymentMethods([...cards]);
  };

  useEffect(() => {
    if (params?.newCard) {
      Toast.show({
        type: 'success',
        text1: translate('card_registered_successfully'),
        autoHide: true,
      });
    }

    loadCards();
  }, [params]);

  const onDeleteCard = async (creditCardId: string) => {
    try {
      await PythonApi.Card.deleteCard(creditCardId);

      await loadCards();

      Toast.show({
        type: 'success',
        text1: translate('deleted_card'),
        autoHide: true,
      });
    } catch (e) {
      Alert.alert(translate('failed_to_delete_card'));
    }
  };

  const onSelectPaymentMethod = type => {
    navigation.navigate('CartScreen', {
      paymentMethod: type,
    });
  };

  const onSelectCard = card => {
    navigation.navigate('CartScreen', {
      paymentMethod: 'CREDIT_CARD',
      cardSelected: card,
    });
  };

  const onPressAddNewCard = () => {
    navigation.navigate('AddNewCreditCard');
  };

  if (showEmptyCards && !registeredPaymentMethods.length) {
    return <EmptyWallet onPressAddNewCard={onPressAddNewCard} />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator bounces={false}>
        <PaymentMethodsList>
          {!onlyShowCards && (
            <>
              <PaymentMethod
                type="PIX"
                onSelectPaymentMethod={onSelectPaymentMethod}
                setChosenMethod={setChosenMethod}
              />
              <PaymentMethod
                type="BANK_SLIP"
                onSelectPaymentMethod={onSelectPaymentMethod}
                setChosenMethod={setChosenMethod}
              />
            </>
          )}
          {registeredPaymentMethods.length > 0 &&
            registeredPaymentMethods.map((cardItem, index) => (
              <PaymentMethod
                onDeleteCard={onDeleteCard}
                type="CREDIT_CARD"
                card={cardItem}
                onSelectCard={disableSelectCard ? null : onSelectCard}
                key={index.toString()}
              />
            ))}
        </PaymentMethodsList>
      </ScrollView>
      <NewCardButtonContainer>
        <NewCardButton onPress={onPressAddNewCard}>
          <NewCardButtonText>{translate('add_new_card')}</NewCardButtonText>
        </NewCardButton>
      </NewCardButtonContainer>
    </View>
  );
};

export default SelectPaymentMethod;
