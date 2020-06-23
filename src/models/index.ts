/**
 * Compose our models into a single store model.
 */
import { StoreModel } from 'types/model-types';
import { productsModel } from './products';
import { basketModel } from './basket';
import { auditModel } from './audit';

const storeModel: StoreModel = {
  products: productsModel,
  basket: basketModel,
  audit: auditModel,
};

export default storeModel;
