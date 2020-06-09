import React from 'react';
import { View, Text } from 'react-native';
import { useStoreState } from 'easy-peasy';
import { NavProps, RouteNames } from '@routes/names';

export default function ProductList({
  navigation,
}: NavProps[RouteNames.Basket]) {
  const products = useStoreState((state) => state.products.items);

  return (
    <View>
      <Text>Our products</Text>

      <View>
        {products.map((product: any) => (
          <Text key={product.id}>
            <Text
              onPress={() =>
                navigation.navigate(RouteNames.Product, {
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
