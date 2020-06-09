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
import { StatusBar } from 'react-native';
import { StoreProvider } from 'easy-peasy';
import { enableScreens } from 'react-native-screens';
import AppNavigation from 'routes';
import store from './store';

// Improves the performance of react-navigation
enableScreens();

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <StoreProvider store={store}>
        <AppNavigation />
      </StoreProvider>
    </>
  );
};

export default App;
