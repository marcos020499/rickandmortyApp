import React from "react";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Gradient = ({ children, bgColor }) => {
  //gradient containers
  return (
    <LinearGradient
      style={styles.containerData}
      colors={[bgColor, "rgba(15, 50, 54, 0.7)", "rgba(15, 50, 54, 0.7)", bgColor]}
      start={{ x: -0.15, y: 0 }}
      end={{ x: 1.15, y: 0 }}
    >
      <View>{children}</View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  containerData: {
    borderRadius: 10,
    width: "90%",
    marginTop: "2%",
    paddingVertical: 10,
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
  },
});
export default Gradient;
