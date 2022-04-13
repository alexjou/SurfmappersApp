import styled from 'styled-components/native';

interface IIsSelected {
  isSelected: boolean;
}

export const SelectorProfileView = styled.View`
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ProfileButtonTitle = styled.Text`
  font-size: 15px;
  font-weight: 700;
  color: black;
  text-align: center;
  margin-top: 10px;
`;

export const ProfileButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: column;
  margin-left: 10px;
`;

export const TypeProfileImage = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 30px;
  height: 30px;
`;

export const ProfileButtonView = styled.View<IIsSelected>`
  width: 88px;
  height: 88px;
  align-items: center;
  justify-content: center;
  border-width: 7px;
  border-color: ${props => (props.isSelected ? '#fff' : '#ACACAC')};
  border-radius: 21px;
`;
