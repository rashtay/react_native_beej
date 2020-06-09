import React from 'react';
import { useStoreState } from 'easy-peasy';
import { NavProps, RouteNames } from '@routes/names';
import ProductList from '@components/ProductList';

export default function ProductListContainer({
  navigation,
}: NavProps[RouteNames.Basket]) {
  const products = useStoreState((state) => state.products.items);

  return (
    <ProductList
      products={products}
      onProductPress={(product) =>
        navigation.navigate(RouteNames.Product, {
          id: product.id,
        })
      }
    />
  );
}
