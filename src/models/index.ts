/**
 * Compose our models into a single store model.
 */
import { productsModel, ProductsModel } from './products';
import { basketModel, BasketModel } from './basket';
import { auditModel, AuditModel } from './audit';

// The interface representing our entire store model
export interface StoreModel {
  audit: AuditModel;
  products: ProductsModel;
  basket: BasketModel;
}

const storeModel: StoreModel = {
  products: productsModel,
  basket: basketModel,
  audit: auditModel,
};

export default storeModel;
