/**
 * Author: Rahul Shetty
 *
 * Compose our models into a single store model.
 */
import productsModel from './products';
import basketModel from './basket';

const storeModel = {
  products: productsModel,
  basket: basketModel,
};

export default storeModel;
