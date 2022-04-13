import React from 'react';
import PhotoGrid from '@components/PhotoGrid';
import { SectionList, Text, View } from 'react-native';
import { LoadingIndicatorContainer } from '@components/LoadingIndicator';

const AlbumSections = ({ sections, headerComponent, imagesIds, isUserCollection }) => {
  // Formata um objeto `sections` conforme as exigências da Sectionlist
  const sectionData =
    sections &&
    sections.map(({ title, images }) => {
      return {
        title,
        data: [
          {
            list: images,
            imagesIds,
          },
        ],
      };
    });

  const renderSection = ({ item }) => (
    <View style={{ marginBottom: 20 }}>
      <PhotoGrid
        items={item.list} 
        isUserCollection={isUserCollection}
      />
    </View>
  );

  return (
    <SectionList
      sections={sectionData}
      keyExtractor={(item, index) => item.title}
      ListHeaderComponent={headerComponent}
      ListEmptyComponent={<LoadingIndicatorContainer />}
      renderItem={renderSection}
      renderSectionHeader={({ section: { title } }) => (
        <Text
          style={{
            padding: 16,
            fontSize: 16,
            color: 'gray',
          }}
        >
          {title}
        </Text>
      )}
    />
  );
};

export default AlbumSections;
