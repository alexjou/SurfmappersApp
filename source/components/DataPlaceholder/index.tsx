import React from 'react';
import { ThumbActionContainer } from '@components/SessionThumbnail/styles';

import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import { ViewFollowers } from '@components/ProfileHeader/styles';
import {
  AccordionPlaceholder,
  AvatarPlaceholder,
  BackgroundPlaceholder,
  ButtonAddItems,
  ButtonBigTip,
  ButtonRowContainer,
  ButtonSmallTip,
  ButtonsPlaceholder,
  Container,
  ExplorePlaceholder,
  ExplorePlaceholderContainer,
  FeedContainer,
  FollowPlaceholder,
  FullButtonPlaceholder,
  FullHeightButtonPlaceholder,
  LineHorizontal,
  MapPlaceholder,
  NamePlaceholder,
  PricePlacholder,
  ProductButtonPrice,
  ProductCode,
  ProductContainer,
  ProductDescription,
  ProductDescriptionImage,
  ProductItemImage,
  ProductName,
  ProductPrice,
  ProfileContainer,
  Row,
  RowCart,
  SequenceContainer,
  SequencePhotoPlaceholder,
  SessionPlaceholderContainer,
  SessionTitle,
  SmallPicPlaceholder,
  SubtitlePlaceholder,
  Teste,
  ThumbImagePlaceholder,
} from './styles';

type PlaceholderOptions =
  | 'feed'
  | 'cart'
  | 'explore'
  | 'profile'
  | 'profileEdit'
  | 'sequenceFeed'
  | 'sequence';

interface IPlaceholderProps {
  type: PlaceholderOptions;
}

const DataPlaceholder: React.FC<IPlaceholderProps> = ({ type }: any) => {
  return (
    <Container>
      {type === 'feed' && (
        <FeedContainer>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={30} />
            <PlaceholderLine width={80} />
            <ThumbImagePlaceholder />
            <ThumbActionContainer>
              <PlaceholderLine width={8} />
              <PlaceholderLine width={30} />
            </ThumbActionContainer>
          </Placeholder>
          <Placeholder style={{ marginTop: 20 }} Animation={Fade}>
            <PlaceholderLine width={30} />
            <PlaceholderLine width={80} />
            <ThumbImagePlaceholder />
            <ThumbActionContainer>
              <PlaceholderLine width={8} />
              <PlaceholderLine width={30} />
            </ThumbActionContainer>
          </Placeholder>
        </FeedContainer>
      )}
      {type === 'explore' && (
        <Placeholder Animation={Fade}>
          <MapPlaceholder />
          <ExplorePlaceholderContainer>
            <ExplorePlaceholder />
            <ExplorePlaceholder />
            <ExplorePlaceholder />
          </ExplorePlaceholderContainer>
        </Placeholder>
      )}
      {type === 'profile' && (
        <ProfileContainer>
          <Placeholder Animation={Fade}>
            <Teste>
              <BackgroundPlaceholder />
              <AvatarPlaceholder />
              <NamePlaceholder />
              <SubtitlePlaceholder />
              <ViewFollowers>
                <PlaceholderLine width={15} />
                <PlaceholderLine width={15} />
                <PlaceholderLine width={15} />
              </ViewFollowers>
            </Teste>
            <ButtonRowContainer>
              <ButtonsPlaceholder />
              <ButtonsPlaceholder />
            </ButtonRowContainer>
          </Placeholder>
        </ProfileContainer>
      )}
      {type === 'sequenceFeed' && (
        <SequenceContainer>
          <Placeholder Animation={Fade}>
            <PlaceholderLine width={30} />
            <PlaceholderLine width={65} />
            <Row>
              <FollowPlaceholder />
              <FollowPlaceholder />
            </Row>
            <Row style={{ marginTop: 30 }}>
              <FollowPlaceholder />
              <FollowPlaceholder style={{ width: 170 }} />
            </Row>
            <PlaceholderLine style={{ marginTop: 60 }} width={15} />
            <SessionPlaceholderContainer>
              <ExplorePlaceholder />
              <ExplorePlaceholder />
              <ExplorePlaceholder />
            </SessionPlaceholderContainer>
          </Placeholder>
        </SequenceContainer>
      )}
      {type === 'sequence' && (
        <Placeholder Animation={Fade}>
          <SequencePhotoPlaceholder />
          <SmallPicPlaceholder />
          <PricePlacholder>
            <Row>
              <PlaceholderLine width={10} />
              <PlaceholderLine width={30} />
              <PlaceholderLine width={10} />
              <PlaceholderLine width={30} />
            </Row>
            <FullButtonPlaceholder />
          </PricePlacholder>
        </Placeholder>
      )}
      {type === 'profileEdit' && (
        <Placeholder Animation={Fade}>
          <PricePlacholder>
            <AccordionPlaceholder />
          </PricePlacholder>
          <PricePlacholder>
            <AccordionPlaceholder />
          </PricePlacholder>
          <PricePlacholder>
            <AccordionPlaceholder />
          </PricePlacholder>
          <PricePlacholder>
            <AccordionPlaceholder />
          </PricePlacholder>
          <PricePlacholder>
            <FullHeightButtonPlaceholder />
          </PricePlacholder>
        </Placeholder>
      )}
      {type === 'cart' && (
        <Placeholder Animation={Fade}>
          <SessionTitle />

          {[1, 2].map(value => {
            return (
              <ProductContainer key={value.toString()}>
                <ProductDescriptionImage>
                  <ProductItemImage />
                  <ProductDescription>
                    <ProductCode />
                    <ProductName />
                  </ProductDescription>
                </ProductDescriptionImage>
                <ProductButtonPrice>
                  <ProductPrice />
                </ProductButtonPrice>
              </ProductContainer>
            );
          })}

          <ButtonAddItems>
            <SessionTitle style={{ height: 16 }} />
          </ButtonAddItems>

          <SessionTitle
            style={{
              marginTop: 20,
              width: 64,
            }}
          />

          <SessionTitle
            style={{
              marginTop: 10,
              width: 236,
            }}
          />

          <RowCart style={{ marginTop: 0 }}>
            <PlaceholderLine width={50} />
          </RowCart>
          <RowCart style={{ marginTop: 0 }}>
            <PlaceholderLine width={50} />
          </RowCart>

          <RowCart style={{ marginTop: 5 }}>
            <ButtonSmallTip />
            <ButtonSmallTip />
            <ButtonSmallTip />
            <ButtonSmallTip />
            <ButtonBigTip />
          </RowCart>

          <LineHorizontal style={{ marginTop: 30 }} />

          <SessionTitle
            style={{
              marginTop: 30,
              width: 136,
            }}
          />

          <RowCart style={{ marginTop: 5 }}>
            <PlaceholderLine width={30} />
            <PlaceholderLine width={30} />
          </RowCart>
          <RowCart style={{ marginTop: 5 }}>
            <PlaceholderLine width={30} />
            <PlaceholderLine width={30} />
          </RowCart>
          <RowCart style={{ marginTop: 5 }}>
            <PlaceholderLine width={30} />
            <PlaceholderLine width={30} />
          </RowCart>

          <RowCart style={{ marginTop: 10 }}>
            <PlaceholderLine height={20} width={30} />
            <PlaceholderLine height={20} width={30} />
          </RowCart>

          <LineHorizontal style={{ marginTop: 10 }} />
        </Placeholder>
      )}
    </Container>
  );
};

export default DataPlaceholder;
