import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import Header from '@components/Header';
import { WebView } from 'react-native-webview';

const webView: React.FC = () => {
  const navigation = useNavigation();
  const { title, externalUrl } = useRoute().params;
  console.log(externalUrl);

  return (
    <>
      <Header
        backButton
        title={title}
        navigation={navigation}
        // icons={cart?.items.length > 0
        //   ? [{
        //       icon: 'delete-empty-outline',
        //       color: 'black',
        //       title: translate('clean_cart'),
        //       action: async () => {
        //         await PythonApi.Cart.clearAllItems(cart.items);
        //         setRefetch(true);
        //         updateCart();
        //       }
        //     }]
        //   : []
        // }
      />
      <WebView source={{ uri: externalUrl }} style={{ flex: 1 }} />
    </>
  );
};

export default webView;
