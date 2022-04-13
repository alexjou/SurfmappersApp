import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

export const TabBar = styled.View`
  display: flex;
  padding-left: 20px;
  padding-right: 38px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TabItem = styled.Text<TabItemProps>`
  color: ${({ isTrue }) =>
    isTrue ? theme.colors.primary_blue : theme.colors.gray2};
  font-weight: 700;
  font-size: 14px;
`;

export const Header = styled.View`
  width: ${width}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 16px 6px;
`;

export const ButtonBack = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const ArrowLeft = styled(MaterialIcons).attrs({
  name: 'chevron-left',
  size: 30,
  color: 'gray',
})``;

export const ViewButtonsHeader = styled.View`
  padding: 0 16px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonHeader = styled.TouchableOpacity``;

export const CartIcon = styled(MaterialIcons).attrs({
  name: 'cart-outline',
  size: 24,
  color: theme.colors.dark,
})``;

export const WhereDidYouSurfTodayView = styled.View`
  width: ${width}px;
  padding: 0 16px;
`;

export const Title = styled.Text`
  font-size: 24px;
`;

export const TitleBold = styled.Text`
  font-weight: bold;
`;

export const TextSubtitle = styled.Text`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  margin-top: 8px;
  color: ${theme.colors.dark};
`;

export const CardBeachFound = styled.TouchableOpacity`
  width: ${width}px;
  padding: 16px;
`;

export const SeparatorLine = styled.View`
  width: 100%;
  height: 1px;
  margin: 8px 0;
  background-color: #ededed;
`;

export const ViewLoading = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  flex-direction: row;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: theme.colors.dark,
  size: 'large',
})``;

export const LoadingText = styled.Text`
  font-size: 12px;
  color: ${theme.colors.dark};
  margin-left: 10px;
`;

export const SearchContainer = styled.View`
  flex: 1;
  padding-horizontal: 16px;
  margin-top: 34px;
`;

export const ResultContainer = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Photo = styled.Image`
  border-radius: 50px;
  width: 56px;
  height: 56px;
`;

export const TextColumn = styled.View<ColumnProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ isCentered }) => (isCentered ? 'center' : 'flex-start')}
  margin-left: 16px;
`;

export const MainText = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 700;
  font-size: 14px;
`;

export const SubText = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 400;
  font-size: 14px;
`;

export const Line = styled.View`
  border: 1px solid #faf7f7;
  height: 0px;
  width: 100%;
  margin-vertical: 8px;
`;

export const RecentText = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 400;
  font-size: 14px;
`;

export const LightSubText = styled.Text`
  color: #c8c8c8;
  font-size: 14px;
  font-weight: 400;
`;

export const LocationIcon = styled.Image`
  width: 24px;
  height: 24px;
  align-self: center;
  margin-left: 14px;
`;

export const LocationText = styled.Text`
  color: ${theme.colors.gray2};
  font-weight: 700;
  font-size: 16px;
`;

export const SessionImage = styled.Image`
  width: 120px;
  height: 84px;
  border-radius: 12px;
`;

export const SessionText = styled.Text`
  font-size: 14px;
  font-weight: 700;
  color: ${theme.colors.primary_blue};
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 8px;
`;

export const CameraIcon = styled.Image`
  width: 14px;
  height: 14px;
`;

export const PhotographerName = styled.Text`
  font-weight: 700;
  font-size: 12px;
  margin-left: 3px;
  color: ${theme.colors.dark};
`;
