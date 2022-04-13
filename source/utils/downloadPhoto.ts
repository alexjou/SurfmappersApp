// utils/downloadPhoto.js
import CameraRoll from '@react-native-community/cameraroll';
import { Alert, PermissionsAndroid, Platform } from 'react-native';
import RNFetchBlob, { RNFetchBlobConfig } from 'rn-fetch-blob';

export async function downloadPhoto(photoUrl: string) {
  // Checa as permissões
  const hasPermissions = async () => {
    // Permissões no iOS
    if (Platform.OS === 'ios') return true;

    // Permissões no Android
    const hasAndroidPermissions = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    return hasAndroidPermissions;
  };

  // Pede as permissões
  const askForPermissions = async () => {
    const promptResult = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Storage Permission Required',
        message: 'App needs access to your storage to download Photos',
        buttonPositive: 'Allow access',
      },
    );

    return promptResult === 'granted';
  };

  // Verifica as permissões, senão pede as permissões
  const permissionsCheck =
    (await hasPermissions()) || (await askForPermissions());
  // Caso o usuário não permita o acesso no prompt que abrimos faz
  // um alert de que a permissão é necessária p/ download}
  if (!permissionsCheck) {
    Alert.alert(
      'As permissões são necessárias para fazer o download. Revise as permissões.',
    );
    return;
  }

  // Instancia e configura o RNFetchBlob para fazer o download
  const date = new Date();
  const { config, fs } = RNFetchBlob;
  const dir = `${fs.dirs.PictureDir}/Surfmappers/surfmappers-${photoUrl?.time}-${photoUrl?.spot?.name}-${photoUrl?.number}.jpg`;
  //surfmappers-YYYYMMDD-spotslug-photonumber.jpg
  console.log(dir)
  const options = {
    fileCache: true,
    appendExt: 'jpg',
    addAndroidDownloads: {
      path: dir,
      useDownloadManager: true,
      mime: 'image/jpeg',
      mediaScannable: true,
      notification: true,
      overwrite: true,
      title: 'Aloha! Sua foto Surfmappers está aqui.',
      description: 'Image taken by the photographers at Surfmappers.com',
    },
  };

  if (Platform.OS === 'android') {
    // Faz o download usando o `config` do RNFetchBlob
    config(options as RNFetchBlobConfig)
      .fetch('GET', photoUrl?.file?.raw)
      .then(response => {
        // Showing alert after successfull downloading
        Alert.alert('Download concluído verifique suas notificações');
      })
      .catch(error => {
        Alert.alert(error);
      });
  } else {
    await CameraRoll.save(photoUrl?.file?.raw);
    Alert.alert('Download concluído verifique nas suas imagens');
  }
}
