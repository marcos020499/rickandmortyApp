import React from "react";
import { View } from "react-native";
import Container from "../components/Container";
import CharacterDetails from "../components/CharacterDetails";
const DetailsScreen = ({ navigation, route }) => {
  return (
    <Container isFocused={false}>
      <CharacterDetails navigation={navigation} route={route} />
    </Container>
  );
};
export default DetailsScreen;
