import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Modal } from 'react-native';
import { Rating } from 'react-native-ratings';
import translate from '../../../../locales';

import { mockupUser } from '../../../../mockup';

import {
  CloseButton,
  Container,
  FeedbackOption,
  FeedbackOptionsContainer,
  FeedbackOptionsRow,
  FeedbackOptionText,
  FeedbackText,
  PhotographerAvatar,
  PhotographerContainer,
  PhotographerName,
  RateFeedbackContainer,
  RateHeader,
  RateQuestionText,
  SendButton,
  SendButtonText,
  Title,
} from './styles';

const PhotographerRate: React.FC<any> = ({
  visible,
  changeVisibility,
  navigation,
}) => {
  const ratingCompleted = (rating: any) => {
    console.log(`Rating is: ${rating}`);
  };

  const toHome = () => {
    changeVisibility(false);
    navigation.navigate('Root');
  };

  return (
    <Modal style={{ flex: 1 }} visible={visible} animationType="slide">
      <Container>
        <RateHeader>
          <Title>{translate('rate_purchase_photos')}</Title>
          <CloseButton onPress={toHome}>
            <MaterialIcons name="close" size={24} />
          </CloseButton>
        </RateHeader>

        <PhotographerContainer>
          <PhotographerAvatar source={mockupUser.avatar} />
          <PhotographerName>{mockupUser.username}</PhotographerName>
          <Rating
            onFinishRating={ratingCompleted}
            style={{ paddingVertical: 16 }}
            jumpValue={0.5}
          />
        </PhotographerContainer>

        <RateFeedbackContainer>
          <RateQuestionText>{translate('how_improve')}</RateQuestionText>

          <FeedbackOptionsContainer>
            <FeedbackOptionsRow>
              <FeedbackOption>
                <FeedbackOptionText>
                  {translate('photos_underwater')}
                </FeedbackOptionText>
              </FeedbackOption>
              <FeedbackOption>
                <FeedbackOptionText>
                  {translate('distancing')}
                </FeedbackOptionText>
              </FeedbackOption>
            </FeedbackOptionsRow>
            <FeedbackOptionsRow>
              <FeedbackOption>
                <FeedbackOptionText>
                  {translate('get_more_face')}
                </FeedbackOptionText>
              </FeedbackOption>
              <FeedbackOption>
                <FeedbackOptionText>
                  {translate('more_helpful')}
                </FeedbackOptionText>
              </FeedbackOption>
            </FeedbackOptionsRow>
          </FeedbackOptionsContainer>

          <FeedbackText multiline placeholder={translate('write_note')} />
          <SendButton onPress={toHome}>
            <SendButtonText>{translate('send')}</SendButtonText>
          </SendButton>
        </RateFeedbackContainer>
      </Container>
    </Modal>
  );
};

export default PhotographerRate;
