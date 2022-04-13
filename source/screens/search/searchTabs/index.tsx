import React, { useState } from 'react';
import { TabView } from 'react-native-tab-view';
import { TouchableOpacity, useWindowDimensions } from 'react-native';

import Sessions from './tabs/sessions';
import Places from './tabs/places';
import Photographers from './tabs/photographers';
import Main from './tabs/main';

import { TabBar, TabItem } from './styles';

const SearchTabs = ({ index, setCurrentTab, searchQuery }) => {
  const layout = useWindowDimensions();

  // Rotas das abas
  const [routes] = useState([
    { key: 'mainTab', title: 'Principais' },
    { key: 'spotsTab', title: 'Picos' },
    { key: 'photographersTab', title: 'Fotógrafos' },
    { key: 'sessionsTab', title: 'Sessões' },
  ]);

  console.log(index);
  // Componentes das abas
  const renderScene = ({ route }) => {
    console.log(route);
    switch (route.key) {
      case 'mainTab':
        return <Main searchQuery={searchQuery} />;
      case 'spotsTab':
        return <Places searchQuery={searchQuery} />;
      case 'photographersTab':
        return <Photographers searchQuery={searchQuery} />;
      case 'sessionsTab':
        return <Sessions searchQuery={searchQuery} />;
      default:
        return null;
    }
  };

  const renderTabBar = () => (
    <TabBar>
      {routes.map((route, i) => {
        return (
          <TouchableOpacity key={i} onPress={() => setCurrentTab(i)}>
            <TabItem isTrue={i === index}>{route.title}</TabItem>
          </TouchableOpacity>
        );
      })}
    </TabBar>
  );

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setCurrentTab}
      renderTabBar={renderTabBar}
      initialLayout={{ width: layout.width }}
      lazy
    />
  );
};

export default SearchTabs;
