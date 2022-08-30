import { LogBox } from "react-native";

if (__DEV__) {
  const ignoreWarns = [
    "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types",
    "Animated: `useNativeDriver` was not specified",
    "VirtualizedLists should never be nested inside plain ScrollViews"
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
}