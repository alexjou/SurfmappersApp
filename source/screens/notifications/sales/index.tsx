// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react';
import Api from '@services/api';
import { FlatList } from 'react-native';
import EmptyNotifications from '@components/EmptyNotifications';
import { useNavigation } from '@react-navigation/native';
import { SalesItem } from '../../../components';

interface ISales {
  _id: string;
  buyer_name?: string;
  status: string;
  total?: number;
  photos_values?: {
    photo_price: number;
  };
  cover_photo?: string;
}

interface DataSales {
  count: number;
  sales: ISales[];
}

const Sales = () => {
  const [refreshing, setRefreshing] = useState<boolean>(false);
  const [dataSales, setDataSales] = useState<ISales[]>([]);
  const navigation = useNavigation();

  const getData = async () => {
    setRefreshing(true);
    const { data } = await Api.get<DataSales>('/sales/list');
    setDataSales(data.sales);
    setRefreshing(false);
  };

  useEffect(() => {
    getData().then();
  }, []);

  const onRefresh = () => {
    getData().then();
  };

  return (
    <FlatList
      refreshing={refreshing}
      onRefresh={onRefresh}
      bounces={false}
      showsVerticalScrollIndicator={false}
      data={dataSales}
      keyExtractor={item => item._id}
      ListEmptyComponent={EmptyNotifications}
      renderItem={({ item }) => (
        <SalesItem
          onPress={() => navigation.navigate('PurchasesDetails', { item })}
          status={item.status}
          thumbnail={item.cover_photo}
          buyerName={item.buyer_name}
          total={item.total}
        />
      )}
    />
  );
};

export default Sales;
