import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import GlobalStyle from "./GlobalStyle";
import Gradient from "./Gradient";
import TextDetails from "./TextDetails";

const CharacterEpisodes = ({ bgColor }) => {
  
  const { episode } = useSelector((state) => state);
  //episodes items render
  _Item = ({ item, index }) => {
    return index <= 10 ? (
      <Gradient bgColor={bgColor} key={index}>
        <Text style={[GlobalStyle.regular, styles.textName]}>{item?.name}</Text>
        <Text style={[GlobalStyle.regular, styles.textName]}>
          {item?.air_date}
        </Text>
      </Gradient>
    ) : null;
  };

  return (
    <View style={styles.container}>
      <TextDetails>
        <Text style={[GlobalStyle.bold, styles.textTitle]}>Episodios</Text>
      </TextDetails>
      <FlatList
        nestedScrollEnabled
        data={episode}
        renderItem={_Item}
        keyExtractor={(e, i) => e + i.toString()}
      />
    </View>
  );
};
export default CharacterEpisodes;
const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  textTitle: {
    color: "white",
    textAlign: "center",
    marginVertical: 5,
  },
  textName: {
    color: "white",
    textAlign: "center",
  },
});
