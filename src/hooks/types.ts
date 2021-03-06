import { createTypedHooks } from 'easy-peasy'; // 👈import the helper
import { StoreModel } from 'types/model-types';

// Provide our model to the helper      👇
const typedHooks = createTypedHooks<StoreModel>();

// 👇 export the typed hooks
export const { useStoreActions } = typedHooks;
export const { useStoreDispatch } = typedHooks;
export const { useStoreState } = typedHooks;
