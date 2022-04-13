import React from 'react';
import { Share } from 'react-native';
import {
  Container,
  ShareIcon,
  ShareView,
  Subtitle,
  Title,
  TitleAndSubtitleView,
} from './styles';

const SessionInfo = ({ title, date, slug }) => {
  const onShare = async () => {
    try {
      const shareImageOptions = {
        url: `https://surfmappers.com/Home/${slug}`,
        message: `https://surfmappers.com/Home/${slug}`,
      };
      console.log(shareImageOptions);
      await Share.share(shareImageOptions);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <TitleAndSubtitleView>
        <Title>{title}</Title>
        <Subtitle>{date}</Subtitle>
      </TitleAndSubtitleView>
      <ShareView onPress={() => onShare()}>
        <ShareIcon />
      </ShareView>
    </Container>
  );
};

export default SessionInfo;
