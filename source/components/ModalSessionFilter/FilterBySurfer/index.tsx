import React  from 'react';

import ModalSessionFilter from '@components/ModalSessionFilter';
import {
  GaleryIcon,
  GaleryText,
  LupaIcon,
  PhotoMarkedText,
  SearchBar,
  SearchBarInputText,
  SeparatorLine,
  SurferCard,
  SurferInformationsView,
  SurferName,
  ViewAllPhotos,
  ViewGaleryIcon,
  ViewSearchBarAndAllPhotos,
} from './styles';
import { FlatList } from 'react-native';
import Avatar from '@components/Avatar';
import translate from '@locales/index';

interface IModalProps {
  visible: boolean;
  onRequestClose: any;
  onHandleChangeSearch: Function;
  items: object[];
  onSelectItem: Function;
  onShowAllPhotos: Function;
}

const ModalFilterBySurfer: React.FC<IModalProps> = ({
  visible,
  items,
  onHandleChangeSearch,
  onRequestClose,
  onSelectItem,
  onShowAllPhotos,
}) => {
  return (
    <ModalSessionFilter
      title={'Filtrar por surfista'}
      visible={visible}
      onRequestClose={onRequestClose}
    >
      <ViewSearchBarAndAllPhotos>
        <SearchBar>
          <LupaIcon />
          <SearchBarInputText
            onChangeText={text => onHandleChangeSearch(text)}
          />
        </SearchBar>
      </ViewSearchBarAndAllPhotos>

      <FlatList
        bounces={false}
        data={items}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => <SeparatorLine />}
        renderItem={({ item, index }): any => {
          return (
            <SurferCard key={index} onPress={() => onSelectItem(item)}>
              <Avatar user={item?.user} />
              <SurferInformationsView>
                <SurferName>{item?.user?.name}</SurferName>
                <PhotoMarkedText>
                  {item?.count} {translate('photos')}
                </PhotoMarkedText>
              </SurferInformationsView>
            </SurferCard>
          );
        }}
        ListHeaderComponent={
          <ViewSearchBarAndAllPhotos>
            <ViewAllPhotos
              onPress={() => {
                onShowAllPhotos();
              }}
            >
              <ViewGaleryIcon>
                <GaleryIcon />
              </ViewGaleryIcon>
              <GaleryText>Ver todas as fotos</GaleryText>
            </ViewAllPhotos>
            <SeparatorLine />
          </ViewSearchBarAndAllPhotos>
        }
      />
    </ModalSessionFilter>
  );
};

export default ModalFilterBySurfer;
