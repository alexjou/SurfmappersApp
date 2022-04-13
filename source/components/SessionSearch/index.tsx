// eslint-disable-next-line no-use-before-define
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import translate from '../../locales';

import { Container, SearchBarButton, TextSearchBar } from './styles';

const SessionSearch = ({ navigation }: any) => {
  return (
    <Container>
      {/* <View>
        <Title>
          <Text>{translate('where_did_you')} </Text>
          <TextBold>{translate('surf_today')}</TextBold>
        </Title>
      </View> */}

      <SearchBarButton onPress={() => navigation.navigate('SearchScreen')}>
        <MaterialIcons name="magnify" size={24} color="darkgray" />
        <TextSearchBar>{translate('where_did_you_surf')}</TextSearchBar>
      </SearchBarButton>
    </Container>
  );
};

export default SessionSearch;
