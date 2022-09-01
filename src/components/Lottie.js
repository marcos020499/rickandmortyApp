import React, { useRef, useEffect } from "react";
import { View, Animated, Easing, StyleSheet} from "react-native";
import LottieView from "lottie-react-native";

const Lottie = ({width, height}) => {
  //lottie animation
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <View style={{ height: "100%" }}>
      <LottieView
        autoPlay
        style={[styles.lottieStyle, {width:width, height:height}]}
        progress={progress}
        source={require("../../assets/39133-the-morty-dance-loader.json")}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  lottieStyle: {
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
  },
});
export default Lottie;
