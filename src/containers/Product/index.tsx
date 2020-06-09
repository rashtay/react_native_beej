import React, { useCallback, useState } from 'react';
import { View, Text } from 'react-native';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { NavProps, RouteNames } from '@routes/names';

export default function Product({ route }: NavProps[RouteNames.Product]) {
  const { id } = route.params;
  const chosenProduct: any = useStoreState((state) =>
    state.products.getById(id),
  );

  //  map our action 👇
  const addProductToBasket = useStoreActions(
    (actions: any) => actions.basket.addProduct,
  );

  // state to track when we are saving to basket
  const [adding, setAdding] = useState(false);

  // callback to handle click, saving to basket
  const onAddToBasketClick = useCallback(async () => {
    setAdding(true);
    await addProductToBasket(chosenProduct.id);

    setAdding(false);
  }, [chosenProduct, addProductToBasket]);

  return (
    <View>
      <Text>{chosenProduct.name}</Text>
      <Text>£ {chosenProduct.price}</Text>

      <Text onPress={onAddToBasketClick}>
        {adding ? 'Adding...' : 'Add to basket'}
      </Text>
    </View>
  );
}
