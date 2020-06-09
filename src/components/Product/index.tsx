import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  product: Product;
  onAdd: () => any;
  loading: boolean;
}

export default function Product({ product, onAdd, loading }: Props) {
  return (
    <View>
      <Text>{product.name}</Text>
      <Text>£ {product.price}</Text>

      <Text onPress={onAdd}>{loading ? 'Adding...' : 'Add to basket'}</Text>
    </View>
  );
}
