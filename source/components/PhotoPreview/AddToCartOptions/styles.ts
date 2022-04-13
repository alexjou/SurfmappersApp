import { Dimensions } from 'react-native';
import styled, { css } from 'styled-components/native';
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

export const Container = styled.View`
  width: ${width}px;
  padding: 12px 16px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Button = styled.TouchableOpacity<ISequenceInCart>`
  height: 55px;
  flex-direction: column;
  flex: 1;
  align-items: flex-start;
  padding: 17px 16px;
  margin: 4px 0;
  justify-content: center;
  border-radius: 8px;
  background-color: ${props => props.theme.colors.primary_blue};
  ${(props: any) =>
    props.isInCart &&
    css`
      background-color: ${props.theme.colors.button_green};
      flex-direction: row;
      justify-content: space-between;
    `};
`;

export const ButtonText = styled.Text<INumber>`
  font-weight: 500;
  color: white;
  font-size: ${(props: any) => (props.number === 1 ? 14 : 16)}px;
  line-height: ${(props: any) => (props.number === 1 ? 14 : 16)}px;
`;

export const PhotoInformations = styled.View`
  width: 100%;
  align-items: center;
  flex-direction: row;
  padding: 16px 0;
  justify-content: space-between;
`;

export const NumberPhoto = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  color: ${theme.colors.dark};
`;

export const PhotoPrice = styled.Text`
  font-size: 20px;
  font-weight: 700;
  line-height: 24px;
  color: ${theme.colors.white};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 12px;
  color: ${theme.colors.dark};
`;

export const AddPhotoInCartButton = styled.TouchableOpacity<IPhotoInCart>`
  height: 55px;
  flex-direction: row;
  align-items: center;
  padding: 17px 16px;
  margin: 4px 0;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${(props: any) =>
    props.photoInCart ? '#299E46' : theme.colors.primary_blue};
`;

export const ViewTextAndArrowButton = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const ArrowButton = styled(MaterialIcons).attrs({
  name: 'arrow-right',
  size: 20,
  color: 'white',
})`
  margin-left: 8px;
`;

export const AddChoosePhotoInCartButton = styled.TouchableOpacity`
  height: 55px;
  flex-direction: row;
  align-items: center;
  padding: 17px 16px;
  margin: 4px 0;
  border-radius: 8px;
  background-color: ${(props: any) =>
    props.photoInCart ? '#299E46' : theme.colors.primary_blue};
`;

export const AddChooseCartButtonText = styled.Text<INumber>`
  font-weight: 700;
  color: white;
  font-size: ${(props: any) => (props.number === 1 ? 14 : 16)}px;
  line-height: ${(props: any) => (props.number === 1 ? 14 : 16)}px;
  margin-left: 10px;
`;

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ModalView = styled.View`
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 40%;
  border-radius: 20px;
  background-color: ${theme.colors.white};
  shadow-color: ${theme.colors.dark};
  shadow-offset: {
    width: 0px;
    height: 12px;
  }
  shadow-opacity: 0.58;
  elevation: 24;
`;

export const ModalViewButton = styled.View`
  height: 60px;
  width: 80px;
`;

export const TextModalView = styled.Text`
  font-size: 20px;
  text-align: center;
  padding: 20px;
`;

export const TextModalButton = styled.Text`
  color: ${theme.colors.white};
  font-weight: bold;
  align-self: center;
`;
