// ExploreMap/styles.ts
import styled from 'styled-components/native';
import MapView from 'react-native-maps';

export const ContainerMap = styled.View`
  width: 100%;
  margin-bottom: 4px;
`;

export const Map = styled(MapView)`
  width: 100%;
  height: 300px;
`;
