import React from "react";
import { Text, View} from "react-native";
import Container from "../components/Container";
import CharacterDetails from "../components/CharacterDetails";
const DetailsScreen = ({ navigation, route }) => {
  return (
    <Container isFocused={false}>
      <View>
        <CharacterDetails navigation={navigation} route={route} />
      </View>
    </Container>
  );
};
export default DetailsScreen;
