// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useState } from 'react';
import _, { debounce } from 'lodash';
import { gql, useQuery } from '@apollo/client';
import PhotoGrid from '@components/PhotoGrid';
import SessionHeader from '@components/SessionHeader';
import Header from '@components/Header';
import AlbumDetailHeaderPlaceholder from '@components/DataPlaceholder/AlbumDetail/Header';
import AlbumDetailPhotoGridPlaceholder from '@components/DataPlaceholder/AlbumDetail/PhotoGrid';

import translate from '@locales/index';
import searchHelper from '@utils/SearchHelper';
import ModalFilterBySurfer from '@components/ModalSessionFilter/FilterBySurfer';
import ModalFilterByHourly from '@components/ModalSessionFilter/FilterByHourly';
import dayjs from 'dayjs';
import { ScrollView } from 'react-native';
import { Container } from './styles';

const albumDetailsQuery = gql`
  query GetAlbumDetails($slug: String) {
    album(slug: $slug) {
      id
      username
      spot {
        id
        name
        location {
          name
          state
          city
        }
      }
      date(format: "dddd, D MMMM  YYYY [•] HH[h]")
      author {
        id
        username
        name
      }
      photoCount
    }
  }
`;

const sessionQuery = gql`
  query GetSequencesFeedAlbum(
    $slug: String
    $taggedUser: ID
    $hourStart: String
    $hourEnd: String
    $cursor: String
  ) {
    album(slug: $slug) {
      id
      taggedUsers {
        count
        user {
          id
          name
          username
          images {
            avatar
          }
        }
      }
      allItems(
        taggedUser: $taggedUser
        cursor: $cursor
        hourStart: $hourStart
        hourEnd: $hourEnd
      ) {
        cursor
        hasMore
        feed {
          ... on Sequence {
            id
            images {
              id
              file {
                thumbnail
              }
            }
          }
          ... on Photo {
            id
            file {
              thumbnail
            }
          }
        }
      }
    }
  }
`;

const Session: React.FC = ({ route, navigation }: any) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalHourlyVisible, setModalHourlyVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [itemsToShow, setItemsToShow] = useState([]);
  const [taggedUserSelected, setTaggedUserSelected] = useState(null);
  const [taggedUsers, setTaggedUsers] = useState([]);

  const { slug } = route.params;

  const albumDetailsQueryOptions = {
    variables: {
      slug,
    },
  };

  const queryOptions = {
    notifyOnNetworkStatusChange: true,
    variables: {
      slug,
    },
  };

  const { loading: loadingHeader, data: albumDetail } = useQuery(
    albumDetailsQuery,
    albumDetailsQueryOptions,
  );
  const { loading, data, fetchMore, refetch } = useQuery(
    sessionQuery,
    queryOptions,
  );

  useEffect(() => {
    const items = data?.album?.taggedUsers || [];
    setTaggedUsers([...items]);
    setItemsToShow([...items]);
  }, [data]);

  const onFilterSurfers = useCallback(() => {
    const items = taggedUsers.filter(surfer =>
      searchHelper(surfer?.user?.name).includes(searchHelper(searchQuery)),
    );
    setItemsToShow([...items]);
  }, [taggedUsers, searchQuery]);

  useEffect(() => {
    if (taggedUsers) {
      if (searchQuery.length) {
        onFilterSurfers();
      } else {
        setItemsToShow([...taggedUsers]);
      }
    }
  }, [searchQuery]);

  const delayedSearch = useCallback(
    debounce((searchQuery: string) => setSearchQuery(searchQuery), 500),
    [],
  );

  const handleOnChangeSearch = (querySearch: string) => {
    delayedSearch(querySearch);
  };

  const onSelectItem = item => {
    setTaggedUserSelected(item);
    refetch({
      taggedUser: item?.user?.id,
    });
    setModalVisible(false);
  };

  const onSelectHourly = (start, end) => {
    setStartDate(start);
    setEndDate(end);
    refetch({
      hourStart: startDate ? dayjs(startDate).format('HH:mm') : '',
      hourEnd: endDate ? dayjs(endDate).format('HH:mm') : '',
    });
    setModalHourlyVisible(false);
  };

  const onShowAllPhotos = () => {
    setTaggedUserSelected(null);
    refetch({
      taggedUser: null,
    });
    setModalVisible(false);
  };

  const onClearHourly = () => {
    setStartDate(null);
    setEndDate(null);
    refetch({
      hourStart: null,
      hourEnd: null,
    });
  };

  return (
    <Container>
      <Header
        backButton
        title={translate('album')}
        navigation={navigation}
        icons={[
          {
            icon: 'cart-outline',
            color: 'black',
            route: 'Cart',
            onlyLogged: true,
          },
          {
            icon: 'dots-vertical',
            color: 'black',
          },
        ]}
      />
      <PhotoGrid
        headerComponent={
          <SessionHeader
            slug={slug}
            title={albumDetail?.album?.spot?.name}
            date={albumDetail?.album?.date}
            user={albumDetail?.album?.author}
            onShowAllPhotos={onShowAllPhotos}
            numberOfPhotos={albumDetail?.album?.photoCount}
            setModalVisible={setModalVisible}
            setModalHourlyVisible={setModalHourlyVisible}
            itemSelected={taggedUserSelected}
            onClearHourly={onClearHourly}
            startDate={startDate}
            endDate={endDate}
          />
        }
        navigation={navigation}
        loadingMore={loading}
        items={data?.album?.allItems.feed}
        // sequences={data?.album?.allItems?.sequences}
        fetchMore={() => {
          if (data.album.allItems.hasMore && !loading) {
            fetchMore({
              variables: {
                ...queryOptions.variables,
                cursor: data.album.allItems.cursor,
              },
            });
          }
        }}
      />

      <ModalFilterBySurfer
        items={data?.album?.taggedUsers}
        visible={modalVisible}
        onHandleChangeSearch={handleOnChangeSearch}
        onRequestClose={setModalVisible}
        onSelectItem={onSelectItem}
        onShowAllPhotos={onShowAllPhotos}
      />

      <ModalFilterByHourly
        visible={modalHourlyVisible}
        onRequestClose={setModalHourlyVisible}
        onSelectHourly={onSelectHourly}
      />
    </Container>
  );
};

export default Session;
