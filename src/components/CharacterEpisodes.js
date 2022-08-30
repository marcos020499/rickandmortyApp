import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import GlobalStyle from "./GlobalStyle";
const CharacterEpisodes = ({ bgColor }) => {
  const { data, loading, episode } = useSelector((state) => state);
  _Item = ({ item, index }) => {
    console.log(item);
    return (
      <LinearGradient
        style={styles.containerData}
        colors={["#232A30", "#232A30", bgColor]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text style={[GlobalStyle.regular, styles.textName]}>
          nombre {item?.name}
        </Text>
        <Text style={[GlobalStyle.regular, styles.textName]}>
          name {item?.air_date}
        </Text>
      </LinearGradient>
    );
  };
  return (
    <View>
      {loading === true ? (
        <ActivityIndicator color="#FF7C66" />
      ) : (
        <>
          <Text style={[GlobalStyle.bold, styles.textTitle]}>Episodios</Text>
          <FlatList data={episode} renderItem={_Item} />
        </>
      )}
    </View>
  );
};
export default CharacterEpisodes;
const styles = StyleSheet.create({
  containerData: {
    borderRadius: 10,
    borderWidth: 1,
    width: "90%",
    paddingVertical: 10,
    backgroundColor: "#64686B",
    display: "flex",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 4,
  },
  textTitle: {
    color: "white",
    left: "5%",
    marginVertical: 10,
  },
  textName: {
    color: "white",
  },
  image: {
    width: 100,
    borderRadius: 10,
    height: 100,
  },
});
