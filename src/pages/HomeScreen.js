import React, { useRef, useEffect } from "react";
import { Text, View, Animated, Easing, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import ListResult from "../components/ListResult";
const HomeScreen = ({ navigation, route }) => {
  const isFocused = useIsFocused();

  return (
    <Container isFocused={isFocused} >
      <View >
        <SearchBar/>
        <ListResult navigation={navigation}/>
      </View>
    </Container>
  );
};
export default HomeScreen;
