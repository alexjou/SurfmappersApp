import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import theme from '@styles/theme/theme';

const { width } = Dimensions.get('window');

export const Container = styled.View`
  width: ${width}px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const PhotoCountText = styled.Text`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary_blue}; ;
`;

export const ViewGroup = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
`;

export const FilterButton = styled.TouchableOpacity`
  align-items: center;
  flex-direction: row;
  border-radius: 16px;
  background-color: ${(props: Props) =>
    !props.selected ? 'rgba(11, 186, 231, 0.24)' : 'rgba(196,196,196,0.24)'};
  margin-left: 5px;
  padding: 5px;
`;

export const ViewFilterIcon = styled.View`
  width: 26px;
  height: 26px;
  border-radius: 26px;
  align-items: center;
  justify-content: center;
  background-color: ${(props: Props) =>
    !props.selected ? theme.colors.primary_blue : '#FFF'};
`;

export const FilterIcon = styled(MaterialIcons).attrs((props: any) => ({
  name: props.selected ? 'close' : 'filter',
  color: props.selected ? '#C4C4C4' : 'white',
  size: 18,
}))``;

export const FilterText = styled.Text`
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary_blue};
  margin: 0 8px;
`;

export const ArrowDown = styled(MaterialIcons).attrs({
  name: 'chevron-down',
  color: theme.colors.primary_blue,
  size: 25,
})``;

export const ViewTextHour = styled.View`
  width: ${width}px;
  padding: 20px 16px;
`;

export const TextHour = styled.Text`
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary_blue}; ;
`;

export const ViewLoading = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
  flex-direction: row;
`;

export const LoadingIcon = styled.ActivityIndicator.attrs({
  color: theme.colors.primary_blue,
  size: 'large',
})``;

export const LoadingText = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primary_blue};
  margin-left: 10px;
`;
