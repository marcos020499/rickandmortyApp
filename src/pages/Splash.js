import React, { useRef, useEffect, useState } from "react";
import { Animated } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Container from "../components/Container";
import TouchableComponent from "../components/TouchableComponent";
import Lottie from "../components/Lottie";
const Splash = ({ navigation }) => {

  const isFocused = useIsFocused();
  const [time, setTime] = useState();
  const opacity = useRef(new Animated.Value(1)).current;
  
  //cancel animation and go to next page
  useEffect(() => {
    if (isFocused === true) {
      setTime(
        setTimeout(() => {
          navigation.navigate('Home');
        }, 5000),
      );
        Animated.timing(opacity, {
          toValue: 0,
          delay:4700,
          duration: 500,
          useNativeDriver: true,
        }).start();
    }
    if (isFocused === false) {
      clearTimeout(time);
    }
  }, [isFocused]);

  return (
    <Container isFocused={isFocused}>
      <Animated.View style={{ height: "100%" , opacity:opacity}}>
        <Lottie width={400} height={'100%'}/>
      </Animated.View>
      <TouchableComponent navigation={navigation} name={'Home'}/>
    </Container>
  );
};
export default Splash;
