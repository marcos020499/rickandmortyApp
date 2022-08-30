import React from "react";
import { View } from "react-native";
import { useIsFocused } from "@react-navigation/native";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";
const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <Container isFocused={isFocused} >
      <View >
        <SearchBar/>
        <CharacterCard navigation={navigation}/>
      </View>
    </Container>
  );
};
export default HomeScreen;
