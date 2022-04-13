import {
  InputRow,
  InputRowHeader,
  RoundButton,
} from '@components/DiscountInputForm/styles';
import { FlatList, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import Input from '@components/Input';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useField } from 'formik';

const DiscountInputForm: React.FC = ({ name }) => {
  const [field, meta, helpers] = useField({ name, type: 'text' });

  const [discounts, setDiscounts] = useState(field.value || [{}]);

  useEffect(() => {
    const event = {
      target: {
        name,
        value: discounts,
      },
    };
    field.onChange(event);
  }, [discounts]);

  const renderItem = ({ item, index: itemIndex }) => {
    return (
      <InputRow>
        <Input
          name="quantity"
          placeholder="3"
          keyboardType="numeric"
          width="40%"
          defaultValue={item.quantity.toString()}
          onChangeText={percentage => {
            const newDiscounts = [...discounts];
            newDiscounts[itemIndex] = {
              ...newDiscounts[itemIndex],
              quantity: percentage,
            };
            setDiscounts(newDiscounts);
          }}
        />
        <Input
          name="percentage"
          placeholder="10"
          keyboardType="numeric"
          width="40%"
          defaultValue={item.percentage.toString()}
          onChangeText={percentage => {
            const newDiscounts = [...discounts];
            newDiscounts[itemIndex] = {
              ...newDiscounts[itemIndex],
              percentage,
            };
            setDiscounts(newDiscounts);
          }}
        />
        {itemIndex < discounts.length - 1 ? (
          <RoundButton>
            <MaterialIcons
              name="minus"
              size={20}
              color="white"
              onPress={() => {
                setDiscounts(
                  discounts.filter((item, index) => index !== itemIndex),
                );
              }}
            />
          </RoundButton>
        ) : (
          <RoundButton green onPress={() => setDiscounts([...discounts, {}])}>
            <MaterialIcons name="plus" size={20} color="white" />
          </RoundButton>
        )}
      </InputRow>
    );
  };
  return (
    <>
      <FlatList
        ListHeaderComponent={
          <InputRowHeader>
            <Text>Em pacotes de</Text>
            <Text>Aplicar desconto de</Text>
          </InputRowHeader>
        }
        keyExtractor={(_, index) => `discount${index}`}
        data={discounts}
        renderItem={renderItem}
      />
      {meta.touched && meta.error && (
        <Text style={{ color: '#f00' }}>{meta.error}</Text>
      )}
    </>
  );
};

export default DiscountInputForm;
