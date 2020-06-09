import React from 'react';
import { View, Text } from 'react-native';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { NavProps, RouteNames } from '@routes/names';

export default function Basket({ navigation }: NavProps[RouteNames.Basket]) {
  const basketProducts = useStoreState((state) => state.basket.products);

  //  map our action 👇
  const removeProductFromBasket = useStoreActions(
    (actions: any) => actions.basket.removeProduct,
  );

  return (
    <View>
      <Text>The merchandise</Text>
      <View>
        {basketProducts.map((product: any, idx: number) => {
          const key = idx + 1;

          return (
            <View key={key}>
              <Text
                onPress={() =>
                  navigation.navigate(RouteNames.Product, {
                    id: product.id,
                  })
                }
              >
                {product.name}
              </Text>

              <Text onPress={() => removeProductFromBasket(idx)}>Remove</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}
