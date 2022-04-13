import Header from '@components/Header';
import { StackActions, useNavigation } from '@react-navigation/native';
// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Alert, FlatList, View } from 'react-native';
import { get } from 'lodash';

import { gql, useQuery } from '@apollo/client';
import { PythonApi } from '@services/api';
import {
  AcceptButton,
  AcceptButtonText,
  Container, ContainerScrollView,
  Date,
  TitleAlbum,
  DetailsTitle,
  GridContainer,
  Img,
  Line,
  PhotographerName,
  Text,
} from './styles';
import PlaceholderBundle from '@components/Bundle/PlaceholderBundle';

const BundleDetails: React.FC = ({ route }: any) => {
  const navigation = useNavigation();
  const { item } = route.params;

  const photoListQuery = gql`
    query {
      bundle(id: "${item.id}") {
        id
        price
        album {
          id
          spot {
            id
            name
          }
        }
        photographer {
          id
          name
          username
        }
        surfer {
          id
          name
        }
        sequences {
          id
          images {
            id
            price
            isOwned
            file {
              highRes
              watermarked
              thumbnail
            }
          }
        }
      }
    }
  `;

  const queryOptions = {
    variables: {
      ids: item?.id,
    },
    fetchPolicy: 'no-cache',
  };

  const { loading, data, error, refetch } = useQuery(photoListQuery, queryOptions,);

  const handleAddPackage = async () => {
    try {
      const { id } = item;
      await PythonApi.Cart.addBundle(id);

      navigation.dispatch(StackActions.pop(2));

      navigation.navigate('Cart');
    } catch (e) {
      Alert.alert(
        get(e, 'response.data.title'),
        'Não foi possível adicionar o pacote!',
      );
    }
  };

  const bundle = get(data, 'bundle', {});
  const sequences = get(bundle, 'sequences', []);
  const album = get(bundle, 'album', {});
  const spot = get(album, 'spot', {});
  const photographer = get(bundle, 'photographer', {});
  const surfer = get(bundle, 'surfer', {});

  if (loading) {
    return <PlaceholderBundle />;
  }

  return (
    <Container>
      <Header
        backButton
        title="Detalhes do pacote"
        navigation={navigation}
        icons={[]}
      />

      <Line />
      <TitleAlbum>{spot?.name}</TitleAlbum>
      <DetailsTitle>Fotógrafo</DetailsTitle>
      <PhotographerName>{photographer?.name}</PhotographerName>
      <DetailsTitle>Surfista</DetailsTitle>
      <Text size={14}>{surfer?.name}</Text>
      <DetailsTitle>Valor do pacote</DetailsTitle>
      <Text size={16}>R$ {bundle?.price},00</Text>

      <Line />

      {sequences.map((sequence, index) => {
        return (
          <View>
            <DetailsTitle>
              Sequência #{(index + 1).toString().padStart(2, '0')}
            </DetailsTitle>
            <GridContainer>
              <FlatList
                data={sequence?.images}
                keyExtractor={item => item?._id}
                numColumns={3}
                renderItem={({ item }) => (
                  <Img
                    resizeMode="contain"
                    source={{
                      uri: item?.file?.highRes,
                    }}
                  />
                )}
              />
            </GridContainer>
            <Line />
          </View>
        );
      })}

      <AcceptButton onPress={handleAddPackage}>
        <AcceptButtonText>Comprar Pacote</AcceptButtonText>
      </AcceptButton>
    </Container>
  );
};

export default BundleDetails;
