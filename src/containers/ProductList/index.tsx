import React from 'react';
import { View, Text } from 'react-native';
import { useStoreState } from 'easy-peasy';

export default function ProductList({ navigation }: ContainerProps) {
  const products = useStoreState((state) => state.products.items);

  return (
    <View>
      <Text>Our products</Text>

      <View>
        {products.map((product: any) => (
          <Text key={product.id}>
            <Text
              onPress={() =>
                navigation.navigate('Product', {
                  id: product.id,
                })
              }
            >
              {product.name}
            </Text>
          </Text>
        ))}
      </View>
    </View>
  );
}
