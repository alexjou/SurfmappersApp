// ExploreThumbnail/index.tsx
import React from 'react';
import { TouchableOpacity } from 'react-native';

import {
  ExplorerItem,
  GradienteBG,
  ItemDetails,
  ItemText,
  ThumbnailIMG,
} from './styles';

const ExploreThumbnail = ({ navigation, slug, cover, name, date }: any) => {
  return (
    <ExplorerItem>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Session', {
            slug,
          })
        }
      >
        <ThumbnailIMG source={{ uri: cover }} />
        <GradienteBG
          colors={[
            'rgba(0, 122, 255, 0)',
            'rgba(20, 20, 20, 0)',
            'rgba(20, 20, 20, 1)',
          ]}
        />
        <ItemDetails>
          <ItemText>{name}</ItemText>
          <ItemText>{date}</ItemText>
        </ItemDetails>
      </TouchableOpacity>
    </ExplorerItem>
  );
};

export default ExploreThumbnail;
