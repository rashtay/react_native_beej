/**
 * Author: Rahul Shetty
 *
 * The central redux store of our app is created and exported to be used from
 * here.
 */
import { createStore, persist } from 'easy-peasy';
import storeModel from '@models/index';
import { services } from '@services/index';
import storage from '@utils/storage';

// Add any additional store enhancers
let storeEnhancers: any[] = [];

if (__DEV__) {
  // eslint-disable-next-line global-require
  const reactotron = require('./reactotron.config').default;
  // @types/ws
  const reactotronConfig = reactotron();

  // Global variable. Use it to log your variable and you can see the result in reactotrons
  tronlog = reactotronConfig.log;
  storeEnhancers = [...storeEnhancers, reactotronConfig.createEnhancer()];
}

const store = createStore(
  persist(storeModel, { blacklist: ['audit', 'basket', 'products'], storage }),
  {
    injections: { ...services },
    enhancers: [...storeEnhancers],
  },
); // 👈 create our store

if (__DEV__) {
  // @types/webpack-env
  if (module.hot) {
    module.hot.accept('../models/', () => {
      store.reconfigure(storeModel); // 👈 Here is the magic
    });
  }
}

export default store;
