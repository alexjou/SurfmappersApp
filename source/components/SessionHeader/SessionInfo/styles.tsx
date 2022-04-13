import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DefaultTheme } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  padding: 20px 16px 0 16px;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const TitleAndSubtitleView = styled.View`
  flex: 0.9;
  flex-direction: column;
`;

export const Title = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: 20px;
  line-height: 20px;
  font-weight: 700;
  color: ${DefaultTheme.colors.text};
`;

export const Subtitle = styled.Text.attrs({
  ellipsizeMode: 'tail',
  numberOfLines: 1,
})`
  font-size: 16px;
  line-height: 16px;
  font-weight: 400;
  margin-top: 6px;
  color: #797979;
`;

export const ShareView = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.primary_blue};
  border-radius: 8px;
  padding: 6px;
`;

export const ShareIcon = styled(MaterialIcons).attrs({
  name: 'share-variant',
  size: 20,
  color: '#797979',
})``;

export const SeparatorLine = styled.View`
  width: ${width}px;
  height: 1px;
  margin: 24px 0 16px 0;
  background-color: #ededed;
`;
