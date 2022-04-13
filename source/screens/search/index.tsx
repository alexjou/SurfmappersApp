// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import SearchTabs from './searchTabs';

import {
  Container,
  Input,
  SearchIcon,
  SearchInputContainer,
  ViewSearchBar,
} from './styles';

const mockArray = [
  { name: 'Carlos Manoel', username: 'carlosmano_' },
  { name: 'Felipe Augusto', username: 'felipe_augusto123' },
  { name: 'Vitória Silva', username: 'silvavit22' },
  { name: 'Eduardo Carvalho', username: 'duducarvlho' },
];

const Search: React.FC = ({ route, navigation }: any) => {
  // Query
  const [searchQuery, setSearchQuery] = useState('');
  // Aba selecionada
  const [currentTab, setCurrentTab] = useState(0);

  const delayedSearch = useCallback(
    debounce((searchQuery: string) => setSearchQuery(searchQuery), 500),
    [], // will be created only once initially
  );

  const handleOnChangeSearch = (querySearch: string) => {
    delayedSearch(querySearch);
  };

  return (
    <Container>
      <ViewSearchBar>
        <SearchInputContainer>
          <SearchIcon />
          <Input
            autoFocus
            placeholder="Pesquisa"
            onChangeText={text => handleOnChangeSearch(text)}
          />
        </SearchInputContainer>
      </ViewSearchBar>
      <SearchTabs
        index={currentTab}
        setCurrentTab={setCurrentTab}
        searchQuery={searchQuery}
      />
    </Container>
  );
};

export default Search;
