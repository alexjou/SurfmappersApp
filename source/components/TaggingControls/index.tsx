import React from 'react';
import { View, Pressable, Text } from 'react-native';
import ListTaggedUsers from '@components/ListTaggedUsers';
import Button from '@components/Button';
import { PlusIcon, Container } from './styles';
import theme from '@styles/theme/theme';

const TaggingControls = ({ taggedUsers, setShowModal }) => {
  console.log(taggedUsers);
  return (
    <Container>
      <ListTaggedUsers taggedUsers={taggedUsers} />  
      <Pressable
        onPress={() => setShowModal(true)}
        style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-end', marginRight: 16}}
      >
        <PlusIcon />
        <Text style={{color: theme.colors.primary_blue}}>Marcar usuário</Text>
      </Pressable>
    </Container>
  );
};

export default TaggingControls;
