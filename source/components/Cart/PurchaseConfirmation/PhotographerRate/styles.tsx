import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  width: 100%;
  padding-top: 48px;
  padding-bottom: 16px;
`;

export const RateHeader = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const CloseButton = styled.TouchableOpacity``;

export const PhotographerContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
  border-bottom-width: 1px;
  border-color: lightgray;
`;

export const PhotographerAvatar = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

export const PhotographerName = styled.Text`
  font-weight: bold;
  font-size: 24px;
  margin-top: 16px;
`;

export const RateQuestionText = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const RateFeedbackContainer = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const FeedbackOptionsContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const FeedbackOptionsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const FeedbackOption = styled.TouchableOpacity`
  border-width: 1px;
  border-radius: 5px;
  padding: 4px;
  margin: 4px;
`;

export const FeedbackOptionText = styled.Text``;

export const FeedbackText = styled.TextInput`
  height: 80px;
  width: 100%;
  background-color: #0001;
  border-radius: 5px;
  padding: 16px;
  margin-top: 32px;
  margin-bottom: 16px;
`;

export const SendButton = styled.TouchableOpacity`
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 50px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primary_blue};
`;

export const SendButtonText = styled.Text`
  color: white;
  font-weight: bold;
`;
