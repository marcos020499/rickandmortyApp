import React from "react";
import { View, StyleSheet } from "react-native";
import LinearGradient from "react-native-linear-gradient";

const Gradient = ({ children, bgColor }) => {
  //gradient containers
  return (
    <LinearGradient
      style={styles.containerData}
      colors={[bgColor, "#232A30", "#232A30", bgColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View>{children}</View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  containerData: {
    borderRadius: 10,
    borderWidth: 1.5,
    width: "90%",
    marginTop: "2%",
    paddingVertical: 10,
    backgroundColor: "#64686B",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    shadowColor: "white",
    elevation: 2,
  },
});
export default Gradient;
