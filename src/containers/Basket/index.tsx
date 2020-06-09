import React from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import Basket from '@components/Basket';
import { NavProps, RouteNames } from '@routes/names';

export default function BasketContainer({
  navigation,
}: NavProps[RouteNames.Basket]) {
  const basketProducts = useStoreState((state) => state.basket.products);

  //  map our action 👇
  const removeProductFromBasket = useStoreActions(
    (actions: any) => actions.basket.removeProduct,
  );

  return (
    <Basket
      products={basketProducts}
      onProductPress={(product) =>
        navigation.navigate(RouteNames.Product, {
          id: product.id,
        })
      }
      onRemoveProduct={(idx) => removeProductFromBasket(idx)}
    />
  );
}
