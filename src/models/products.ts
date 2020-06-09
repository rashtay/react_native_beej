/**
 * Author: Rahul Shetty
 *
 * Sample product model for the dummy app
 */
import { computed, Computed } from 'easy-peasy';

export interface ProductsModel {
  items: Product[];
  getById: Computed<ProductsModel, (id: number) => Product | undefined>;
}

export const productsModel: ProductsModel = {
  items: [
    { id: 1, name: 'Broccoli', price: 2.5 },
    { id: 2, name: 'Carrots', price: 4 },
  ],
  getById: computed((state) =>
    // 👇 return a function that accepts an "id" argument
    (id: number) => state.items.find((product: any) => product.id === id),
  ),
};
