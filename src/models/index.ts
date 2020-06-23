/**
 * Compose our models into a single store model.
 */
import { productsModel } from './products';
import { basketModel } from './basket';
import { auditModel } from './audit';
import { StoreModel } from './model-types';

const storeModel: StoreModel = {
  products: productsModel,
  basket: basketModel,
  audit: auditModel,
};

export default storeModel;
