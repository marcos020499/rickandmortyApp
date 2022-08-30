/**
 * @format
 */

import { AppRegistry } from "react-native";
import React from "react";
import App from "./App";
import { store } from "./src/redux/redux";
import { Provider } from "react-redux";
import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { RootSiblingParent } from "react-native-root-siblings";

const ReduxProvider = () => {
  return (
    <Provider store={store}>
      <RootSiblingParent>
        <App />
      </RootSiblingParent>
    </Provider>
  );
};
AppRegistry.registerComponent("rickandmortyApp", () =>
  gestureHandlerRootHOC(ReduxProvider)
);
