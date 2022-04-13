import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { EditContainer } from '@components/EditIcon/styles';
import React from 'react';

const EditIcon: React.FC = ({ style }) => {
  return (
    <EditContainer style={style}>
      <MaterialIcons size={20} name="pencil" color="#FFFFFF" />
    </EditContainer>
  );
};

export default EditIcon;
