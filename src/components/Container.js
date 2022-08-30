import React from "react";
import { StyleSheet, View } from "react-native";
const Container = ({ children }) => {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FF7C66",
      paddingHorizontal: "12%",
      paddingVertical: "6%",
    },
  });
  return <View style={styles.container}>{children}</View>;
};
export default Container;
