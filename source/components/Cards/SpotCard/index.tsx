import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Location, SpotCardContainer, SpotInfo, Title } from './styles';

const SpotCard = ({ spot }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Explorer', {
          spot,
        })
      }
    >
      <SpotCardContainer>
        <MaterialIcons name="place" size={24} />
        <SpotInfo>
          <Title>{spot.name}</Title>
          <Location>
            {spot.location.city} - {spot.location.state}
          </Location>
        </SpotInfo>
      </SpotCardContainer>
    </Pressable>
  );
};

export default SpotCard;
