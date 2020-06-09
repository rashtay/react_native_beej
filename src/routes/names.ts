import { StackScreenProps } from '@react-navigation/stack';

export enum RouteNames {
  ProductList = 'Product List',
  Product = 'Product',
  Basket = 'Basket',
  BasketCount = 'Basket Count',
}

type RootStackParamList = {
  [RouteNames.ProductList]: undefined;
  [RouteNames.Product]: { id: number };
  [RouteNames.Basket]: undefined;
};

export type NavProps = {
  [RouteNames.ProductList]: StackScreenProps<
    RootStackParamList,
    RouteNames.ProductList
  >;
  [RouteNames.Product]: StackScreenProps<
    RootStackParamList,
    RouteNames.Product
  >;
  [RouteNames.Basket]: StackScreenProps<RootStackParamList, RouteNames.Basket>;
  [RouteNames.BasketCount]: StackScreenProps<
    RootStackParamList,
    RouteNames.Basket
  >;
};
