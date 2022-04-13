// eslint-disable-next-line no-use-before-define
import React from 'react';
import SurferPlaceholder from '../../assets/placeholders/avatar.png';
import { AvatarUrl, Container, CounterImg } from './styles';

interface IListTaggedUsersProps {
  taggedUsers: any;
}

const TOTAL_TO_SHOW = 3;

const ListTaggedUsers = ({ taggedUsers }: IListTaggedUsersProps) => {
  const count = taggedUsers?.length || 0;
  const isMinimum = count <= TOTAL_TO_SHOW;
  const initialPosition = isMinimum ? 0 : 25;
  return (
    <Container style={{flex: 1}}>
      {taggedUsers?.slice(0, TOTAL_TO_SHOW).map((taggedUser, index) => {
        const position = initialPosition + 20 * index;
        let source = SurferPlaceholder;
        if (taggedUser?.images?.avatar) {
          source = { uri: taggedUser?.images?.avatar };
        }

        return (
          <AvatarUrl
            avatar={taggedUser?.images?.avatar}
            key={taggedUser?.id}
            style={{
              position: 'absolute',
              right: position,
            }}
            source={source}
          />
        );
      })}

      {!isMinimum ? <CounterImg>+{count - TOTAL_TO_SHOW}</CounterImg> : null}
    </Container>
  );
};

export default ListTaggedUsers;
