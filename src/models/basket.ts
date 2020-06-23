/**
 * Sample basket (cart) model for the dummy app
 */
// https://easy-peasy.now.sh/docs/tutorial/using-computed-properties.html
import { action, computed, thunk } from 'easy-peasy';
import { BasketModel } from './model-types';

export const basketModel: BasketModel = {
  productIds: [2],
  count: computed((state) => state.productIds.length),
  products: computed(
    // 👇 These are our state resolvers, ...
    [
      (state) => state.productIds,
      (state, storeState) => storeState.products.items,
    ],
    // the results of our state resolvers become the input args
    //   👇         👇
    (productIds, products) =>
      productIds.map((productId: number) =>
        products.find((product) => product.id === productId),
      ),
  ),
  //    add a new action which we can call when the call to the basket
  // 👇 service has completed
  addedProduct: action((state, payload: number) => {
    state.productIds.push(payload);
  }),
  //  👇 refactor our addProduct action into a thunk which will call the service
  addProduct: thunk(async (actions, payload: number, { injections }) => {
    const { basketService } = injections;

    // call our service
    await basketService.addProductToBasket(payload);
    // then dispatch an action to update state
    actions.addedProduct(payload);
  }),
  //  👇 define an action to remove a product from basket
  removeProduct: action((state, payload: number) => {
    state.productIds.splice(payload, 1);
  }),
};
