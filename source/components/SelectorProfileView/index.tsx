import React from 'react';
import {
  SelectorProfileView,
  ProfileButton,
  ProfileButtonTitle,
  ProfileButtonView,
  TypeProfileImage,
} from './styles';
import profileSurfer from '../../assets/icons/profileSurfer.png';
import profilePhotographer from '../../assets/icons/profilePhotographer.png';
import { PROFILE_TYPE } from '../../constants/ProfileTypes';

const SelectorProfileViewContainer = ({ setSelected, isSelected }) => {
  return (
    <SelectorProfileView>
      <ProfileButton onPress={() => setSelected(PROFILE_TYPE.SURFER)}>
        <ProfileButtonView isSelected={isSelected === PROFILE_TYPE.SURFER}>
          <TypeProfileImage source={profileSurfer} />
        </ProfileButtonView>
        <ProfileButtonTitle>{'SOU \nSURFISTA'}</ProfileButtonTitle>
      </ProfileButton>
      <ProfileButton onPress={() => setSelected(PROFILE_TYPE.PHOTOGRAPHER)}>
        <ProfileButtonView
          isSelected={isSelected === PROFILE_TYPE.PHOTOGRAPHER}
        >
          <TypeProfileImage source={profilePhotographer} />
        </ProfileButtonView>
        <ProfileButtonTitle>{'SOU \nFOTÓGRAFO'}</ProfileButtonTitle>
      </ProfileButton>
    </SelectorProfileView>
  );
};

export default SelectorProfileViewContainer;
