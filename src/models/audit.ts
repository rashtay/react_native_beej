import { actionOn, ActionOn } from 'easy-peasy';
import { StoreModel } from 'models';

export interface AuditModel {
  logs: string[];
  onAddToBasket: ActionOn<AuditModel, StoreModel>;
}

export const auditModel: AuditModel = {
  logs: [],

  // 👇 the listener
  onAddToBasket: actionOn(
    // targetResolver function, resolving the addedProduct action as our target
    //                                                👇
    (actions, storeActions) => storeActions.basket.addedProduct,

    // action handler which gets executed when our target action executes
    (state, target) => {
      state.logs.push(`Added product to basket: ${target.payload}`);
      //                                                    👆
      // receives a target obj containing the payload of the target
    },
  ),
};
