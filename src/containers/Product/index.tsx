import React, { useCallback, useState } from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import { NavProps, RouteNames } from '@routes/names';
import Product from '@components/Product';

export default function ProductContainer({
  route,
}: NavProps[RouteNames.Product]) {
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
    <Product
      product={chosenProduct}
      onAdd={onAddToBasketClick}
      loading={adding}
    />
  );
}
