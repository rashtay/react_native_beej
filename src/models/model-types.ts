import { ActionOn, Action, Thunk, Computed } from 'easy-peasy';
import { Injections } from 'services';

export interface ProductsModel {
  items: Product[];
  getById: Computed<ProductsModel, (id: number) => Product | undefined>;
}

export interface BasketModel {
  productIds: number[];
  count: Computed<BasketModel, number>;
  products: Computed<BasketModel, (Product | undefined)[], StoreModel>;
  addedProduct: Action<BasketModel, number>;
  addProduct: Thunk<BasketModel, number, Injections>;
  removeProduct: Action<BasketModel, number>;
}

export interface AuditModel {
  logs: string[];
  onAddToBasket: ActionOn<AuditModel, StoreModel>;
}

// The interface representing our entire store model
export interface StoreModel {
  audit: AuditModel;
  products: ProductsModel;
  basket: BasketModel;
}
