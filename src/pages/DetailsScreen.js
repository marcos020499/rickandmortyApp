import React, { useRef, useEffect } from "react";
import { Text, View, Animated, Easing, TouchableOpacity } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Container from "../components/Container";
import CharacterDetails from "../components/CharacterDetails";
const DetailsScreen = ({ navigation, route }) => {
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
        <CharacterDetails navigation={navigation} route={route} />
      </View>
    </Container>
  );
};
export default DetailsScreen;
