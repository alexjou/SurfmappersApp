/* eslint-disable multiline-ternary */
// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import { gql, useLazyQuery, useQuery } from '@apollo/client';

import { useNavigation, useRoute } from '@react-navigation/native';

// components
import theme from '@styles/theme/theme';
import { Header, SessionSearch } from '../../components';
import ExploreResults from '../../components/ExploreResults';
import ExploreMap from '../../components/ExploreMap';
import translate from '../../locales';

// styles
import { Container, ContainerSearch } from './styles';
import { useLocation } from '../../hooks/geolocation';

// Query para popular os álbums a partir da posição do mapa
const spotsByCoordinatesQuery = gql`
  query FindSessionsByCoordinates(
    $coordinates: [Float]
    $cursor: String
    $limit: Int
  ) {
    allAlbums(coordinates: $coordinates, cursor: $cursor, limit: $limit) {
      cursor
      hasMore
      albums {
        id
        cover {
          file {
            thumbnail
          }
        }
        date(format: "dddd, D MMMM  YYYY [•] HH[h]")
        author {
          id
          name
        }
        spot {
          id
          name
          coordinates {
            long
            lat
          }
        }
        slug
      }
    }
  }
`;

const relevantSpotsQuery = gql`
  query GetUserRelevantSpots {
    self {
      id
      places {
        recent {
          id
          coordinates {
            lat
            long
          }
        }
      }
    }
  }
`;

const Explorer: React.FC<any> = () => {
  const [shouldAnimateMap, setShouldAnimateMap] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();
  const { currentLocation } = useLocation();

  const initialRegion = {
    latitude: currentLocation?.latitude || -7.0465781,
    longitude: currentLocation?.longitude || -34.8348564,
    latitudeDelta: 0.17,
    longitudeDelta: 0.17,
  };

  const [region, setRegion] = useState(initialRegion);

  const searchedSpot = route.params?.spot;

  // Query de spots recentes
  const { data: recentSpotData, loading: recentSpotsLoading } =
    useQuery(relevantSpotsQuery);

  // Seta o estado inicial do mapa com o último spot em que o user esteve, caso n tenha dado de geoloc
  useEffect(() => {
    if (!currentLocation && recentSpotData && !recentSpotsLoading) {
      const recentSpots = recentSpotData?.self?.places?.recent;
      const lastSpot = recentSpots[recentSpots?.length - 1];

      const userSpot = {
        latitude: lastSpot?.coordinates?.lat,
        longitude: lastSpot?.coordinates?.long,
        latitudeDelta: 0.17,
        longitudeDelta: 0.17,
      };

      setRegion(userSpot);
    }
  }, [recentSpotData, currentLocation, recentSpotsLoading]);

  // Query da busca
  const [getQuery, { loading, data, fetchMore }] = useLazyQuery(
    spotsByCoordinatesQuery,
    { notifyOnNetworkStatusChange: true },
  );

  // Seta o mapa de cordo com a busca
  useEffect(() => {
    if (searchedSpot?.coordinates.lat && searchedSpot?.coordinates.long) {
      setShouldAnimateMap(true);

      const newRegion = {
        latitude: searchedSpot?.coordinates.lat,
        longitude: searchedSpot?.coordinates.long,
        latitudeDelta: 0.17,
        longitudeDelta: 0.17,
      };

      setRegion(newRegion);
    }
  }, [searchedSpot]);

  // Atualiza a lista de álbums quando  o mapa é movido
  useEffect(() => {
    const queryVariables = {
      variables: {
        limit: 15,
        coordinates: [region?.latitude, region?.longitude],
      },
    };

    getQuery(queryVariables);
  }, [region, getQuery]);

  return (
    <>
      <Header
        backButton={false}
        navigation={navigation}
        title={translate('suggestionsForYou')}
        icons={[
          {
            icon: 'map-marker',
            color: `${theme.colors.primary_blue}`,
            title: translate('yourLocation'),
            action: () => {
              if (currentLocation) {
                setRegion({
                  latitude: currentLocation.latitude,
                  longitude: currentLocation.longitude,
                  latitudeDelta: 0.17,
                  longitudeDelta: 0.17,
                });
              }
            },
          },
          {
            icon: 'cart-outline',
            onlyLogged: true,
            color: 'black',
            route: 'Cart',
          },
        ]}
      />
      <Container>
        <ExploreResults
          fetchMore={fetchMore}
          loadingMore={loading}
          data={data}
          navigation={navigation}
          // O mapa entra como header da lista
          headerComponent={
            <>
              <ContainerSearch>
                <SessionSearch navigation={navigation} />
              </ContainerSearch>
              <ExploreMap
                markers={!loading && data && data.allAlbums.albums}
                shouldAnimate={shouldAnimateMap}
                setShouldAnimate={setShouldAnimateMap}
                region={region}
                regionCallback={setRegion}
              />
            </>
          }
        />
      </Container>
    </>
  );
};

export default Explorer;
