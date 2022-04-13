// ExploreMap/index.tsx
import React, { useRef, useEffect, useState } from 'react';
import { Marker } from 'react-native-maps';
import { ContainerMap, Map } from './styles';

const ExploreMap = ({ markers, shouldAnimate, setShouldAnimate, region, regionCallback }) => {
  // Animamos o mapa com initialRegion e animate, ao invés de usar a prop `region` do react-native-maps
  // devido a um bug conhecido na lib: https://github.com/react-native-maps/react-native-maps/issues/3639
  const mapRef = useRef(null);

  useEffect(() => {
    if (shouldAnimate) {
      mapRef?.current?.animateToRegion(region);
    }
  }, [region, mapRef, shouldAnimate]);

  return (
    <ContainerMap>
      <Map
        ref={mapRef}
        showsUserLocation
        onRegionChangeComplete={currentRegion => {
          regionCallback(currentRegion);
          setShouldAnimate(false)
        }}
        provider="google"
        initialRegion={region}
      >
        {markers &&
          markers.map(({ spot, slug }: any) => (
            <Marker
              key={slug}
              image={require('./custom_pin.png')}
              coordinate={{
                latitude: spot.coordinates.lat,
                longitude: spot.coordinates.long,
              }}
            />
          ))}
      </Map>
    </ContainerMap>
  );
};

export default ExploreMap;
