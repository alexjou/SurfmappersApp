import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import translate from '@locales/index';
import { CARDS } from '@utils/card';
import {
  Transition,
  Transitioning,
  TransitioningView,
} from 'react-native-reanimated';
import ConfirmModalDeleteCard from '@components/Cart/Dialogs/SelectPaymentMethod/ConfirmModalDeleteCard';
import {
  ActionsButton,
  BrandIcon,
  Description,
  Options,
  OptionTitle,
  PaymentMethodIcon,
  Subtitle,
  Title,
} from './styles';
import PixIcon from '../../../../../../assets/icons/logo-pix-icone-256.png';

const PaymentMethodInfo = ({
  type,
  cardId,
  cardType,
  cardBrand,
  cardLastNumbers,
  onDeleteCard,
  viewOnly,
}) => {
  const ref = useRef<TransitioningView>(null);
  const [edit, setEdit] = useState(false);
  const [isModalOpen, setModalVisibility] = useState(false);

  const transition = (
    <Transition.Together>
      <Transition.In
        type={edit ? 'slide-left' : 'slide-right'}
        durationMs={300}
      />
      <Transition.Out type="slide-right" durationMs={300} />
    </Transition.Together>
  );

  return (
    <>
      {type === 'CREDIT_CARD' && (
        <>
          <View
            style={{
              justifyContent: 'space-between',
              flexDirection: 'row',
              flex: 1,
            }}
          >
            <Transitioning.View
              style={{ flex: 1 }}
              {...{
                ref,
                transition,
              }}
            >
              {edit ? (
                <Description>
                  {/* <Options> */}
                  {/*  <MaterialIcons name={'star'} size={24} color={'#FF9500'}/> */}
                  {/*  <OptionTitle color={'#FF9500'}>Favoritar</OptionTitle> */}
                  {/* </Options> */}
                  {/* <Options> */}
                  {/*  <MaterialIcons name={'border-color'} size={24} color={'#11ABA6'}/> */}
                  {/*  <OptionTitle color={'#11ABA6'}>Editar</OptionTitle> */}
                  {/* </Options> */}
                  <Options
                    onPress={() => {
                      setModalVisibility(true);
                    }}
                  >
                    <MaterialIcons
                      name="delete-outline"
                      size={24}
                      color="#FF3B30"
                    />
                    <OptionTitle color="#FF3B30">
                      {translate('remove')}
                    </OptionTitle>
                  </Options>
                  <Options>
                    <Title>{cardBrand.toUpperCase()}</Title>
                    <OptionTitle color="gray">{cardLastNumbers}</OptionTitle>
                  </Options>
                </Description>
              ) : (
                <Description>
                  <BrandIcon
                    source={CARDS[cardBrand].brand}
                    style={{ marginRight: 8 }}
                  />
                  <Title>
                    {cardType} • {cardBrand}
                  </Title>
                  <Subtitle>{cardLastNumbers}</Subtitle>
                </Description>
              )}
            </Transitioning.View>
            {!viewOnly && (
              <ActionsButton
                onPress={() => {
                  if (ref.current) {
                    ref.current.animateNextTransition();
                  }

                  setEdit(!edit);
                }}
              >
                <MaterialIcons
                  name={edit ? 'close' : 'dots-vertical'}
                  size={24}
                />
              </ActionsButton>
            )}
          </View>
        </>
      )}

      {type === 'PIX' && (
        <Description>
          <PaymentMethodIcon
            source={PixIcon}
            style={{
              height: 40,
              width: 40,
            }}
          />
          <Title>Pix</Title>
        </Description>
      )}

      {type === 'BANK_SLIP' && (
        <Description>
          <MaterialIcons name="barcode" size={40} style={{ marginRight: 8 }} />
          <Title>Boleto</Title>
        </Description>
      )}

      <ConfirmModalDeleteCard
        cardId={cardId}
        cardBrand={cardBrand}
        cardLastNumbers={cardLastNumbers}
        visible={isModalOpen}
        changeVisibility={setModalVisibility}
        onDeleteCard={onDeleteCard}
        setEdit={setEdit}
      />
    </>
  );
};

export default PaymentMethodInfo;
