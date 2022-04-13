import React from 'react';
import { Fade, Placeholder } from 'rn-placeholder';
import { ExplorePlaceholder, SessionPlaceholderContainer } from './styles';

const PhotoGrid: React.FC = () => {
  return (
    <Placeholder Animation={Fade}>
      <SessionPlaceholderContainer>
        <ExplorePlaceholder />
        <ExplorePlaceholder />
        <ExplorePlaceholder />
      </SessionPlaceholderContainer>
      <SessionPlaceholderContainer>
        <ExplorePlaceholder />
        <ExplorePlaceholder />
        <ExplorePlaceholder />
      </SessionPlaceholderContainer>
      <SessionPlaceholderContainer>
        <ExplorePlaceholder />
        <ExplorePlaceholder />
        <ExplorePlaceholder />
      </SessionPlaceholderContainer>
    </Placeholder>
  );
};

export default PhotoGrid;
