import React from 'react';
import { Fade, Placeholder, PlaceholderLine } from 'rn-placeholder';
import { Container, FollowPlaceholder, Row, HeaderContainer } from './styles';

const AlbumDetailHeader: React.FC = () => {
  return (
    <Container>
      <HeaderContainer>
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
        </Placeholder>
      </HeaderContainer>
    </Container>
  );
};

export default AlbumDetailHeader;
