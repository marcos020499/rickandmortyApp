import React from "react";
import { useIsFocused } from "@react-navigation/native";
import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import CharacterCard from "../components/CharacterCard";

const HomeScreen = ({ navigation }) => {
  const isFocused = useIsFocused();
  return (
    <Container isFocused={isFocused} >
        <SearchBar/>
        <CharacterCard navigation={navigation}/>
    </Container>
  );
};
export default HomeScreen;
