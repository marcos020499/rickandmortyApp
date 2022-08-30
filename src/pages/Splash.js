import React, { useRef, useEffect, useState } from "react";
import { Text, View, Animated, Easing, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Container from "../components/Container";
import TouchableComponent from "../components/TouchableComponent";
const Splash = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [time, setTime] = useState();
  const progress = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      delay: 10,
      duration: 4000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);
  useEffect(() => {
    if (isFocused === true) {
      setTime(
        setTimeout(() => {
          navigation.navigate('Home');
        }, 6300),
      );
    }
    if (isFocused === false) {
      clearTimeout(time);
    }
  }, [isFocused]);
  return (
    <Container>
      <View style={{ height: "100%" }}>
        <LottieView
        autoPlay
          progress={progress}
          source={require("../../assets/39133-the-morty-dance-loader.json")}
        />
      </View>
      <TouchableComponent navigation={navigation} name={'Home'}/>
    </Container>
  );
};
export default Splash;
