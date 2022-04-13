import React from 'react';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Avatar from '@components/Avatar';
import { Name, UserCardContainer, UserInfo, Username } from './styles';

interface IUserData {
  user: {
    contactInfo: {
      address: {
        city: string;
        state: string;
      };
    };
    isPhotographer: boolean;
    name: string;
    username: string;
  };
}

const UserCard = ({ user }: IUserData) => {
  const navigation = useNavigation();

  console.log('user', user);
  return (
    <Pressable
      // Depende de ajuste no profile para poder navegar para lá
      onPress={() =>
        navigation.navigate('UserPageScreen', { data: user.username })
      }
    >
      <UserCardContainer>
        <Avatar user={user} size="sm" />
        <UserInfo>
          <Name>{user?.name}</Name>
          <Username>{user?.username}</Username>
          {user?.contactInfo?.address?.city ? (
            <Username numberOfLines={1}>
              {`${user?.contactInfo?.address?.city} - ${user?.contactInfo?.address?.state}`}
            </Username>
          ) : null}
        </UserInfo>
      </UserCardContainer>
    </Pressable>
  );
};

export default UserCard;
