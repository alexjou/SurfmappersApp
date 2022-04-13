import theme from '@styles/theme/theme';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex-direction: column;
  padding: 0 16px 16px 16px;
`;

export const DescriptionText = styled.Text`
  font-size: 16px;
  color: ${theme.colors.gray1};
`;

export const AppoitnmentButton = styled.TouchableOpacity`
  width: 100%;
  background-color: rgba(156, 156, 156, 0.24);
  margin-top: 16px;
  padding: 15px 17px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  border-radius: 16px;
`;

export const CameraIconView = styled.View`
  width: 28px;
  height: 28px;
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.dark};
  border-radius: 22px;
`;

export const CameraIcon = styled(MaterialIcons).attrs({
  name: 'camera',
  size: 20,
  color: theme.colors.background,
})``;

export const AppointmentTitle = styled.Text`
  font-size: 14px;
  font-weight: 700;
  margin-left: 8px;
  color: ${theme.colors.dark};
`;
