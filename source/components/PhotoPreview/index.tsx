/* eslint-disable no-tabs */
import React, { useEffect, useState } from 'react';
import { PythonApi } from '@services/api';
import Toast from 'react-native-toast-message';
import translate from '@locales/index';
import { Share } from 'react-native';
import { useApolloClient } from '@apollo/client';
import ModalTagSurfer from '@components/ModalTagSurfer';
import CarouselViewer from '@components/CarouselViewer';
import ViewOptionButtons from './ViewOptionButtons';
import AddToCartOptions from './AddToCartOptions';
import DownloadOptions from './DownloadOptions';
import { ScrollBody, SeparatorLine } from './styles';

const PhotoPreview = ({ item, focusedPhotoId, refetch }) => {
  const [focusedPhoto, setFocusedPhoto] = useState();
  const [showModal, setShowModal] = useState(false);

  const onShare = async () => {
    if (focusedPhoto?.isOwned) {
      try {
        const shareImageOptions = {
          url: focusedPhoto?.file?.thumbnail,
          message: focusedPhoto?.file?.thumbnail,
        };

        await Share.share(shareImageOptions);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const param = item.__typename.toLowerCase();
        const shareImageOptions = {
          url: `https://surfmappers.com/Home/${param}/${item.id}`,
          message: `https://surfmappers.com/Home/${param}/${item.id}`,
        };
        console.log(shareImageOptions);
        await Share.share(shareImageOptions);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    const isSelectedPhoto = photo => photo.id === focusedPhotoId;
    const initialFocusedPhoto = item?.images?.filter(isSelectedPhoto)[0];
    const selectionIndex = item?.images?.findIndex(isSelectedPhoto);

    setFocusedPhoto({
      index: (selectionIndex === -1) ? 0 : selectionIndex,
      photo: initialFocusedPhoto || item?.images?.[0] || item,
    });
  }, [item, focusedPhotoId]);

  const handleTagSurfer = async (tagUserId: string) => {
    try {
      await PythonApi.Photo.tagUser(focusedPhoto?.photo.id, tagUserId);

      Toast.show({
        type: 'success',
        text1: 'Usuário marcado com sucesso!',
      });

      refetch();

      setShowModal(false);
    } catch (e) {
      Toast.show({
        type: 'error',
        text1: translate('generic_error'),
      });
    }
  };

  return (
    <>
      <ScrollBody>
        <CarouselViewer
          items={[...(item?.images || [item])]}
          focusedPhoto={focusedPhoto}
          setFocusedPhoto={setFocusedPhoto}
        />

        <ViewOptionButtons
          isFavorite={focusedPhoto?.liked}
          setFavorite={() => {}}
          setShowModal={setShowModal}
          taggedUsers={focusedPhoto?.photo?.taggedUsers}
          onShare={() => {
            onShare();
          }}
        />

        <SeparatorLine />

        {focusedPhoto?.isOwned || focusedPhoto?.photo?.isOwned ? (
          <DownloadOptions id={focusedPhoto?.photo.id} data={item} />
        ) : (
          <AddToCartOptions
            id={item?.id}
            typeName={item?.__typename}
            focusedPhoto={focusedPhoto?.photo}
            selectionPrice={focusedPhoto?.photo ? focusedPhoto?.photo.price : ''}
            fullItemPrice={item?.price}
            refetch={refetch}
          />
        )}
      </ScrollBody>
      <ModalTagSurfer
        isVisible={showModal}
        tagSurfer={handleTagSurfer}
        onRequestClose={() => setShowModal(false)}
      />
    </>
  );
};

export default PhotoPreview;
