import React from 'react';
import { useStoreState } from 'easy-peasy';
import BasketCount from '@components/BasketCount';
import { NavProps, RouteNames } from '@routes/names';

export default function BasketCountContainer({
  navigation,
}: NavProps[RouteNames.BasketCount]) {
  const count = useStoreState((state) => state.basket.count);

  return (
    <BasketCount
      count={count}
      onLinkPress={() => navigation.navigate(RouteNames.Basket)}
    />
  );
}
