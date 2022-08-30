import React, { useRef, useEffect } from "react";
import { Text, View, Animated, Easing } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Container from "../components/Container";
const Home = ({ navigation, route }) => {
  const isFocused = useIsFocused();
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      delay: 10,
      duration: 3000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  return (
    <Container isFocused={isFocused}>
      <View style={{ height: "100%" }}>
        <LottieView
          progress={progress}
          source={require("../../assets/39133-the-morty-dance-loader.json")}
          autoPlay
        />
        <Text>hello</Text>
        <Text>hello</Text>
      </View>
    </Container>
  );
};
export default Home;
