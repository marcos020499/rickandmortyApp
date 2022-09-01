import React, { useRef, useEffect } from "react";
import { StyleSheet, Animated } from "react-native";

const Container = ({ children, isFocused }) => {
  
  const color = useRef(new Animated.Value(0)).current;
  //animation interpolate background color
  useEffect(() => {
    Animated.parallel([
      Animated.timing(color, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: false,
      }),
    ]).start();
  }, [isFocused]);

  const colors = color.interpolate({
    inputRange: [0, 1],
    outputRange: ["#E5E5E5", "#232A30"],
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: "5%",
      height: "100%",
    },
  });

  return (
    <Animated.View style={(styles.container, { backgroundColor: colors })}>
      {children}
    </Animated.View>
  );
};
export default Container;
