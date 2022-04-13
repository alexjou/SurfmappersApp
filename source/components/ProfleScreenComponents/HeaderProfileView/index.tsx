// eslint-disable-next-line no-use-before-define
import React from 'react';

import Avatar from '@components/Avatar';
import Cover from '@components/Cover';
import { Container, ViewAvatarProfile } from './styles';

const HeaderProfileView = ({ user }: IUserData) => {
  return (
    <Container>
      <Cover img={user?.images.cover}>
        <ViewAvatarProfile>
          <Avatar size="md" user={user} />
        </ViewAvatarProfile>
      </Cover>
    </Container>
  );
};

export default HeaderProfileView;
