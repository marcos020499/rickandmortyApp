import React, { useRef, useEffect, useState } from "react";
import { Text, View, Animated, Easing, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Container from "../components/Container";
import TouchableComponent from "../components/TouchableComponent";
import Lottie from "../components/Lottie";
const Splash = ({ navigation }) => {
  const isFocused = useIsFocused();
  const [time, setTime] = useState();
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
    <Container isFocused={isFocused}>
      <View style={{ height: "100%" }}>
        <Lottie width={400} height={'100%'}/>
      </View>
      <TouchableComponent navigation={navigation} name={'Home'}/>
    </Container>
  );
};
export default Splash;
