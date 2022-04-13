import styled from 'styled-components/native';

export const RoundImage = styled.Image.attrs({
  resizeMode: 'cover',
})`
  ${props =>
    `width: ${props.size}px;
  height: ${props.size}px;
  border-radius: ${props.size}px;`}
  border-width: 2px;
  border-color: #fff;
`;
