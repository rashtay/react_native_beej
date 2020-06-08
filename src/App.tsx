/**
 * Author: Rahul Shetty
 *
 * React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { StatusBar, SafeAreaView } from 'react-native';
import { StoreProvider } from 'easy-peasy';
import Routes from 'routes';
import store from './store';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView>
        <StoreProvider store={store}>
          <Routes />
        </StoreProvider>
      </SafeAreaView>
    </>
  );
};

export default App;
