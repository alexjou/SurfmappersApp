// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Modal, Platform, StatusBar, Text } from 'react-native';
import { ModalContainer } from '../../styles';
import {
  ActionButtons,
  CancelButton,
  CancelButtonText,
  ContainerHelper,
  DeleteButton,
  DeleteButtonText,
  ModalContent,
  ModalHeader,
  ModalTitle,
  TextContainerHelper,
  TextHelper,
} from './styles';

interface IModalConfirmDeleteCardProps {
  visible: boolean;
  changeVisibility: Function;
  onDeleteCard: Function;
  setEdit: Function;
  cardBrand: string;
  cardId: string;
  cardLastNumbers: string;
}

const ConfirmModalDeleteCard: React.FC<IModalConfirmDeleteCardProps> = ({
  visible,
  changeVisibility,
  onDeleteCard,
  setEdit,
  cardId,
  cardBrand,
  cardLastNumbers,
}: IModalConfirmDeleteCardProps) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <ModalContainer>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" barStyle="light-content" />
        <ModalContent behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <ContainerHelper>
            <ModalHeader>
              <ModalTitle>Quer excluir este cartão ?</ModalTitle>
            </ModalHeader>
            <TextContainerHelper>
              <TextHelper>
                <Text>Ao confirmar, </Text>
                <Text style={{ fontWeight: 'bold' }}>
                  Cartão ({cardBrand}) • final {cardLastNumbers}
                </Text>
                <Text>
                  {' '}
                  não estará mais disponível na sua lista de cartões salvos no
                  aplicativo.
                </Text>
              </TextHelper>
            </TextContainerHelper>

            <ActionButtons>
              <DeleteButton
                onPress={() => {
                  setEdit(false);
                  changeVisibility(false);
                  onDeleteCard(cardId);
                }}
              >
                <DeleteButtonText>Excluir cartão</DeleteButtonText>
              </DeleteButton>

              <CancelButton
                onPress={() => {
                  changeVisibility(false);
                }}
              >
                <CancelButtonText>Cancelar</CancelButtonText>
              </CancelButton>
            </ActionButtons>
          </ContainerHelper>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
};

export default ConfirmModalDeleteCard;
