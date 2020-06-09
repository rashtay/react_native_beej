import React from 'react';
import { View, Text } from 'react-native';
import Product from 'containers/Product';

interface Props {
  products: Product[];
  onProductPress: (product: Product) => any;
  onRemoveProduct: (idx: number) => any;
}

export default function Basket({
  products,
  onProductPress,
  onRemoveProduct,
}: Props) {
  return (
    <View>
      <Text>The merchandise</Text>
      <View>
        {products.map((product: any, idx: number) => {
          const key = idx + 1;

          return (
            <View key={key}>
              <Text onPress={() => onProductPress(product)}>
                {product.name}
              </Text>

              <Text onPress={() => onRemoveProduct(idx)}>Remove</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
