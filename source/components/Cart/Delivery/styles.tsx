import styled from 'styled-components/native';
import Button from '@components/Button';

export const ButtonWithoutAddress = styled(Button)`
  height: 40px;
`;
export const ButtonWithAddress = styled(Button)`
  margin-top: 12px;
`;

export const DeliveryContainer = styled.View`
  padding: 16px;
  width: 100%;
  flex: 1;
`;
export const AdressData = styled.View`
  padding: 8px 0;
`;
export const AdressDataRow = styled(AdressData)`
  flex-direction: row;
`;
export const AdressColum = styled.View`
  width: 50%;
`;
export const LabelAdress = styled.Text`
  font-weight: 700;
`;
export const ValueAdress = styled.Text``;
export const DeliveryTitle = styled.Text`
  font-weight: bold;
  margin-bottom: 16px;
`;
