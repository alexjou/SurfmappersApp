import styled from 'styled-components/native';

const LoadingIndicator = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
`;

const LoadingIndicatorContainer = styled.ActivityIndicator.attrs({
  size: 'small',
  color: '#999'
})`
  margin: 30px 0;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export { LoadingIndicator, LoadingIndicatorContainer };
