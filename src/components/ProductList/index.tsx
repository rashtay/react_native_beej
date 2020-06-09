import React from 'react';
import { View, Text } from 'react-native';

interface Props {
  products: Product[];
  onProductPress: (product: Product) => any;
}

export default function ProductList({ products, onProductPress }: Props) {
  return (
    <View>
      <Text>Our products</Text>

      <View>
        {products.map((product: any) => (
          <Text key={product.id}>
            <Text onPress={() => onProductPress(product)}>{product.name}</Text>
          </Text>
        ))}
      </View>
    </View>
  );
}
