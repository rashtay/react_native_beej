import 'react-native-gesture-handler';
import React, { useCallback } from 'react';
import { Platform, Linking } from 'react-native';
import storage from '@utils/storage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from '@containers/ProductList';
import Product from '@containers/Product';
import Basket from '@containers/Basket';
import BasketCount from '@containers/BasketCount';
import AuditLog from '@components/AuditLog';

const PERSISTENCE_KEY = 'NAVIGATION_STATE';

const Stack = createStackNavigator();

const screenOptions = ({ navigation, route }: ContainerProps) => ({
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerRight: () => <BasketCount navigation={navigation} route={route} />,
});

const Routes = () => {
  const [isReady, setIsReady] = React.useState(false);
  const [initialState, setInitialState] = React.useState();

  // We have written this function for persistent routing while we are developing the app
  const restoreState = useCallback(async () => {
    // We are persisting the state of screen transition. This helps is coming back to the same page when app reloads
    // It's experimental and hence we are running in the dev environment
    if (__DEV__) {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== 'web' && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await storage.getItem(PERSISTENCE_KEY);

          if (savedStateString) {
            setInitialState(savedStateString);
          }
        }
      } finally {
        setIsReady(true);
      }
    }
  }, []);

  const onStateChange = useCallback((state) => {
    if (__DEV__) {
      tronlog(state);
      storage.setItem(PERSISTENCE_KEY, state);
    }
  }, []);

  React.useEffect(() => {
    // Restore navigation state only in development
    if (__DEV__ && !isReady) {
      restoreState();
    }
  }, [isReady, restoreState]);

  // Do  not render anything until state is ready
  if (__DEV__ && !isReady) {
    return null;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={onStateChange}
    >
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="Product List" component={ProductList} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="Basket" component={Basket} />
      </Stack.Navigator>

      <AuditLog />
    </NavigationContainer>
  );
};

export default Routes;
