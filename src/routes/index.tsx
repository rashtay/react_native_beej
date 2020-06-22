import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { Platform, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SyncStorage from 'sync-storage';
import ProductList from '@containers/ProductList';
import Product from '@containers/Product';
import Basket from '@containers/Basket';
import BasketCount from '@containers/BasketCount';
import AuditLog from '@containers/AuditLog';
import { RouteNames } from './names';

type DefaultNav = {
  navigation: any;
  route: any;
};

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const Stack = createStackNavigator();

const screenOptions = ({ navigation, route }: DefaultNav) => ({
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerRight: () => <BasketCount navigation={navigation} route={route} />,
});

const AppNavigation = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  // Initialize the necessary services that should be configured before app starts
  const beforeAppStart = useCallback(async () => {
    try {
      // To access local storage of the phone, we have to do it asynchronously
      // We SyncStorage, we can access it asynchronously. We initialize it before we access it
      await SyncStorage.init();

      // We are persisting the state of screen transition. This helps is coming back to the same page when app reloads
      // It's experimental and hence we are running in the dev environment
      if (__DEV__) {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = SyncStorage.get(PERSISTENCE_KEY);

          if (savedStateString) {
            setInitialState(savedStateString);
          }
        }
      }
    } finally {
      setIsReady(true);
    }
  }, []);

  const onStateChange = useCallback((state) => {
    if (__DEV__) {
      SyncStorage.set(PERSISTENCE_KEY, state);
    }
  }, []);

  React.useEffect(() => {
    // Restore navigation state only in development
    if (!isReady) {
      beforeAppStart();
    }
  }, [isReady, beforeAppStart]);

  // Do  not render anything until state is ready
  if (!isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={onStateChange}
    >
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name={RouteNames.ProductList} component={ProductList} />
        <Stack.Screen name={RouteNames.Product} component={Product} />
        <Stack.Screen name={RouteNames.Basket} component={Basket} />
      </Stack.Navigator>

      <AuditLog />
    </NavigationContainer>
  );
};

export default AppNavigation;
