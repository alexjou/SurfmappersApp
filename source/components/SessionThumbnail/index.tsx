// eslint-disable-next-line no-use-before-define
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ListTaggedUsers from '@components/ListTaggedUsers';
import {
  Container,
  InfoContainer,
  ThumbAction,
  ThumbActionText,
  ThumbImage,
  ThumbLocation,
} from './styles';

interface IThumbnailProps {
  navigation?: () => void;
  session?: object;
  author?: object;
  liked?: boolean;
}

const SessionThumbnail: React.FC<IThumbnailProps> = ({
  navigation,
  session,
  author,
  liked,
}: any) => {
  if (session) {
    return (
      <Container>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Session', {
              slug: session.slug,
            })
          }
          activeOpacity={0.8}
        >
          <View>
            <TouchableOpacity>
              <ThumbLocation>{session.title}</ThumbLocation>
            </TouchableOpacity>
            <Text>{session.date}</Text>
          </View>

          <ThumbImage source={{ uri: session.cover }} />
        </TouchableOpacity>
        <InfoContainer>
          <ThumbAction
            onPress={() =>
              navigation.navigate('UserPageScreen', { data: author })
            }
          >
            <MaterialIcons
              name="instagram"
              size={24}
              style={{
                fontWeight: 'bold',
              }}
            />
            <ThumbActionText>{author}</ThumbActionText>
          </ThumbAction>
          <View>
            {/* <ThumbAction> */}
            {/*  {liked ? ( */}
            {/*    <> */}
            {/*      <MaterialIcons name="heart" size={24} color="red" /> */}
            {/*      <ThumbActionText>Curtido</ThumbActionText> */}
            {/*    </> */}
            {/*  ) : ( */}
            {/*    <MaterialIcons name="heart-outline" size={24} color="gray" /> */}
            {/*  )} */}
            {/* </ThumbAction> */}
            <ListTaggedUsers taggedUsers={session.taggedUsers} />
          </View>
        </InfoContainer>
      </Container>
    );
  }

  return <View />;
};

export default SessionThumbnail;
