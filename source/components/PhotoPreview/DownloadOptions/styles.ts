import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

interface IPhotoInCart {
  photoInCart?: boolean;
}

interface ISequenceInCart {
  sequenceInCart?: boolean;
}

interface INumber {
  number?: number;
}

interface IPurchase {
  purchase?: boolean;
}

interface IDiscount {
  discount?: boolean;
}

interface IPaymentMethod {
  paymentMethod?: boolean;
}

export const Container = styled.View`
  width: ${width}px;
  padding: 16px;
`;

export const PhotoInformations = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 16px 0;
  justify-content: space-between;
`;

export const TextBold = styled.Text<IPurchase>`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: ${props => (props.purchase ? 8 : 0)}px;
  color: ${theme.colors.dark};
`;

export const PhotoDownloadButton = styled.TouchableOpacity<IPhotoInCart>`
  height: 55px;
  flex-direction: row;
  align-items: center;
  padding: 17px 16px;
  margin: 4px 0;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${theme.colors.primary_blue};
`;

export const SequenceDownloadButton = styled.TouchableOpacity<ISequenceInCart>`
  height: 55px;
  flex-direction: row;
  align-items: center;
  padding: 8px 16px;
  margin: 4px 0;
  justify-content: space-between;
  border-width: 1px;
  border-radius: 8px;
  border-color: ${theme.colors.primary_blue};
  background-color: white;
`;

export const AddCartButtonText = styled.Text<INumber>`
  font-weight: 700;
  color: ${(props: any) =>
    props.number !== 0 ? theme.colors.primary_blue : 'white'};
  font-size: ${(props: any) => (props.number === 1 ? 14 : 16)}px;
  line-height: ${(props: any) => (props.number === 1 ? 14 : 16)}px;
`;

export const ArrowIcon = styled(MaterialIcons).attrs({
  name: 'download',
  size: 26,
})`
  margin-left: 8px;
`;

export const PurchaseInformationsView = styled.View`
  width: 100%;
  padding: 24px 0;
`;

export const LineInformationsView = styled.View<IPaymentMethod>`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: ${props => (props.paymentMethod ? 48 : 16)}px;
`;

export const InformationTextLight = styled.Text<IDiscount>`
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${props =>
    props.discount ? theme.colors.primary_green : theme.colors.gray1};
`;

export const TotalText = styled.Text`
  font-size: 24px;
  font-weight: 700;
  line-height: 24px;
  color: ${theme.colors.dark};
`;

export const PaymentMethodView = styled.View`
  flex: 0.8;
  flex-direction: column;
`;

export const PaymentMethodText = styled.Text`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${theme.colors.dark};
`;

export const CardIcon = styled(MaterialIcons).attrs({
  name: 'credit-card',
  size: 30,
  color: 'gray',
})``;
