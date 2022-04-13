import React from 'react';
import HeaderProfileView from '@components/ProfleScreenComponents/HeaderProfileView';
import { useNavigation } from '@react-navigation/native';
import {
  ButtonTitle,
  CityName,
  EditButton,
  InfoNumber,
  InfoTitle,
  UserName,
  ViewFollowers,
  ViewHeaderProfile,
  ViewInfo,
  ViewInformations,
  ViewInformationsAndEdit,
} from './styles';
import translate from '../../locales';

const ProfileHeader = ({ user, boughtPhotosTotal }: any) => {
  const navigation = useNavigation();

  return (
    <>
      <ViewHeaderProfile>
        <HeaderProfileView user={user} />
      </ViewHeaderProfile>
      <ViewInformationsAndEdit>
        <ViewInformations>
          <UserName>{user?.name}</UserName>
          <CityName>
            {user?.contactInfo?.address?.city &&
              user?.contactInfo?.address?.state &&
              `${user?.contactInfo?.address?.city} - ${user?.contactInfo?.address?.state}`}
          </CityName>
        </ViewInformations>
        <EditButton onPress={() => navigation.navigate('ProfileEditor')}>
          <ButtonTitle>{translate('editProfile')}</ButtonTitle>
        </EditButton>
      </ViewInformationsAndEdit>
      <ViewFollowers>
        <ViewInfo>
          <InfoNumber>{boughtPhotosTotal}</InfoNumber>
          <InfoTitle>{translate('purchasedPhotos')}</InfoTitle>
        </ViewInfo>
        <ViewInfo>
          <InfoNumber>{user?.social?.followers?.length}</InfoNumber>
          <InfoTitle>{translate('followers')}</InfoTitle>
        </ViewInfo>
        <ViewInfo>
          <InfoNumber>{user?.social?.following?.length}</InfoNumber>
          <InfoTitle>{translate('following')}</InfoTitle>
        </ViewInfo>
      </ViewFollowers>
    </>
  );
};

export default ProfileHeader;
