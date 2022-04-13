import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  CameraIcon,
  CoverImage,
  Date,
  PhotographerInfo,
  PhotographerName,
  SessionCardContainer,
  SessionInfo,
  Title,
} from './styles';

const CompactSessionCard = ({
  thumbnailImg,
  title,
  authorUsername,
  date,
  slug,
}) => {
  const navigation = useNavigation();
  console.log(slug);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate('Session', {
          slug,
        })
      }
    >
      <SessionCardContainer>
        <CoverImage source={{ uri: thumbnailImg }} />
        <SessionInfo>
          <Title>{title}</Title>
          <Date>{date}</Date>
          <PhotographerInfo>
            <CameraIcon source={require('../../../assets/photo.png')} />
            <PhotographerName>{authorUsername}</PhotographerName>
          </PhotographerInfo>
        </SessionInfo>
      </SessionCardContainer>
    </Pressable>
  );
};

export default CompactSessionCard;
