import React, { useMemo, useState } from 'react';
import { View } from 'react-native';
import { Row, SelectableText } from '@components/MultiLineSelector/styles';

interface IMultiLineSelector {
  data: any;
  onSelect: any;
  selected: any;
  keysToCompare: any;
}

const MultiLineSelector: ({
  data,
  onSelect,
  selected,
  keysToCompare,
}: IMultiLineSelector) => JSX.Element = ({
  data,
  onSelect,
  selected,
  keysToCompare,
}) => {
  const renderOption = (item, index) => {
    const isSelected =
      selected &&
      keysToCompare.map(key => item[key] === selected[key]).every(i => !!i);

    return (
      <Row
        key={item.description}
        selected={isSelected}
        onPress={() => onSelect(item)}
      >
        <SelectableText selected={isSelected}>
          {item?.description}
        </SelectableText>
        {item?.price ? (
          <SelectableText selected={isSelected}>R${item?.price}</SelectableText>
        ) : null}
      </Row>
    );
  };

  return (
    <>{data?.map(renderOption)}</>
  );
};

export default MultiLineSelector;
