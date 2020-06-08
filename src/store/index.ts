/**
 * Author: Rahul Shetty
 *
 * The central redux store of our app is created and exported to be used from
 * here.
 */
import { createStore } from 'easy-peasy'; // 👈 import
import storeModel from '@models/index';

const store = createStore(storeModel); // 👈 create our store

export default store;
