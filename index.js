import {AppRegistry} from 'react-native';
import React from 'react';
import App from './App';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {store} from './src/redux/redux';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent('rickandmortyApp', () =>
  gestureHandlerRootHOC(ReduxProvider),
);
