import React, { createContext, useContext, useEffect, useState } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_Location } from '@services/query/Location';
import Geolocation, { GeoCoordinates } from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform } from 'react-native';
import { useAuth } from './auth';

const LocationContext = createContext({
  currentLocation: null,
});

const LocationProvider: React.FC = ({ children }) => {
  const [currentLocation, setCurrentLocation] = useState<GeoCoordinates>();

  const init = () => {
    Geolocation.watchPosition(
      postion => {
        // Neste trecho, será feito o que for necessário com a localização
        // Salvar no banco, armazenar no prórprio device, etc...
        setCurrentLocation(postion.coords);
      },
      error => {
        console.log(error);
        console.log(error);
      },
    );
  };

  const observeUserLocation = async () => {
    if (Platform.OS === 'ios') {
      // IOS: pedir a autorização do usuário para usar a localização, caso o app ainda não tenha essa autorização
      Geolocation.requestAuthorization('whenInUse').then(auth => {
        if (
          auth === PermissionsAndroid.RESULTS.GRANTED ||
          auth === PermissionsAndroid.RESULTS.RESTRICTED
        ) {
          init();
        }
      });
    } else {
      // ANDROID: verificando se o app está com as permissões de localização necessárias
      const hasPermissionFine = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      const hasPermissionCoarse = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
      const hasPermission = hasPermissionFine && hasPermissionCoarse;

      if (!hasPermission) {
        // ANDROID: caso o app não tenha as permissões, pedir essas permissões de acesso ao usuário
        const grantedPermissions = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
        ]);
        const fine =
          grantedPermissions['android.permission.ACCESS_FINE_LOCATION'] ===
          PermissionsAndroid.RESULTS.GRANTED;
        const coarse =
          grantedPermissions['android.permission.ACCESS_COARSE_LOCATION'] ===
          PermissionsAndroid.RESULTS.GRANTED;
        const permission = fine && coarse;

        if (permission) {
          init();
        }
      } else {
        init();
      }
    }
  };

  useEffect(() => {
    observeUserLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        currentLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

function useLocation() {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error('LocationLocation must be used within an LocationProvider');
  }

  return context;
}

export { LocationProvider, useLocation };
