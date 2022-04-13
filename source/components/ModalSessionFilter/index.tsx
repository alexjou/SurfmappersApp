import React  from 'react';
import {
  Modal,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalTitle,
} from './styles';

interface IModalProps {
  visible: boolean;
  title: string;
  onRequestClose: any;
}

const ModalSessionFilter: React.FC<IModalProps> = ({
  visible,
  onRequestClose,
  title,
  children,
}) => {
  return (
    <Modal animationType="slide" transparent visible={visible}>
      <ModalContainer>
        <StatusBar backgroundColor="rgba(0,0,0,0.4)" barStyle="light-content" />
        <ModalBody>
          <ModalHeader>
            <ModalTitle>{title}</ModalTitle>
            <TouchableOpacity onPress={() => onRequestClose(false)}>
              <MaterialIcons name="close" size={18} />
            </TouchableOpacity>
          </ModalHeader>
          {children}
        </ModalBody>
      </ModalContainer>
    </Modal>
  );
};

export default ModalSessionFilter;
