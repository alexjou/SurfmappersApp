// eslint-disable-next-line no-use-before-define
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList, Modal, StatusBar, TouchableOpacity } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { GET_SEARCH_MODAL } from '@services/query/search_user_modal';
import { useQuery } from '@apollo/client';
import { debounce } from 'lodash';
import SurferPlaceholder from '../../assets/placeholders/SurferAvatar.png';
import {
  LupaIcon,
  ModalBody,
  ModalContainer,
  ModalHeader,
  ModalTitle,
  SearchBar,
  SearchBarInputText,
  SeparatorLine,
  SurferAvatar,
  SurferCard,
  SurferInformationsView,
  SurferName,
  UseridText,
  ViewSearchBarAndAllPhotos,
} from './styles';

interface IModalProps {
  isVisible: boolean;
  onRequestClose: any;

  tagSurfer(tagUserId: string): void;
}

const ModalTagSurfer: React.FC<IModalProps> = ({
  isVisible,
  onRequestClose,
  tagSurfer,
}) => {
  const { data, refetch } = useQuery(GET_SEARCH_MODAL);
  const [searchQuery, setSearch] = useState('');

  useEffect(() => {
    refetch({ searchQuery });
  }, [searchQuery, refetch]);

  const delayedSearch = useCallback(
    debounce((searchQuery: string) => setSearch(searchQuery), 500),
    [], // will be created only once initially
  );

  const handleOnChangeSearch = (querySearch: string) => {
    delayedSearch(querySearch);
  };

  return (
    <>
      <Modal animationType="slide" transparent visible={isVisible}>
        <ModalContainer>
          <StatusBar
            backgroundColor="rgba(0,0,0,0.4)"
            barStyle="light-content"
          />
          <ModalBody>
            <ModalHeader>
              <ModalTitle>Marcar surfista</ModalTitle>
              <TouchableOpacity onPress={() => onRequestClose(false)}>
                <MaterialIcons name="close" size={18} />
              </TouchableOpacity>
            </ModalHeader>
            <ViewSearchBarAndAllPhotos>
              <SearchBar>
                <LupaIcon />
                <SearchBarInputText
                  onChangeText={text => handleOnChangeSearch(text)}
                />
              </SearchBar>
            </ViewSearchBarAndAllPhotos>
            {data && (
              <FlatList
                bounces={false}
                data={data.allContactSuggestions}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 60 }}
                keyExtractor={(item, index) => item.id}
                ItemSeparatorComponent={() => <SeparatorLine />}
                ListHeaderComponent={
                  <>
                    {/* <SurferCard>
                      <SurferAvatar source={{ uri: data?.allContactSuggestions.profileImg }} />
                      <SurferInformationsView>
                        <SurferName mySelf={true}>Eu</SurferName>
                        <UseridText>{data.allContactSuggestions.id}</UseridText>
                      </SurferInformationsView>
                    </SurferCard>
                    <SeparatorLine /> */}
                  </>
                }
                renderItem={({ item, index }): any => (
                  <SurferCard key={item.id} onPress={() => tagSurfer(item.id)}>
                    {item.images.avatar ? (
                      <SurferAvatar source={{ uri: item.images.avatar }} />
                    ) : (
                      <SurferAvatar source={SurferPlaceholder} />
                    )}
                    <SurferInformationsView>
                      <SurferName>{item.username}</SurferName>
                      <UseridText>{item.name}</UseridText>
                    </SurferInformationsView>
                  </SurferCard>
                )}
              />
            )}
          </ModalBody>
        </ModalContainer>
      </Modal>
    </>
  );
};

export default ModalTagSurfer;
