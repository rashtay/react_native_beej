/**
 * Author: Rahul Shetty
 *
 * The central redux store of our app is created and exported to be used from
 * here.
 */
import { createStore, persist } from 'easy-peasy';
import { composeWithDevTools } from 'remote-redux-devtools';
import storeModel from '@models/index';
import { services } from '@services/index';
import storage from '@utils/storage';

const store = createStore(
  persist(storeModel, { whitelist: ['audit'], storage }),
  {
    injections: { ...services },
    compose: composeWithDevTools({ realtime: true, trace: true }),
  },
); // 👈 create our store

export default store;
