import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useSelector } from "react-redux";
import Icon from "react-native-vector-icons/FontAwesome";
import GlobalStyle from "./GlobalStyle";
import { FadeInImage } from "./FadeInImage";
import Lottie from "./Lottie";
import Alert from "./Alert";

const CharacterCard = ({ navigation, route }) => {
  const { data, loading } = useSelector((state) => state);
  const onPress = (item) => {
    navigation.navigate("Details", { item: item });
  };
  //result items render
  _Item = ({ item, index }) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.containerProduct]}
        activeOpacity={1}
        onPress={() => {onPress(item)}}>
        <View style={styles.containerData}>
          <FadeInImage uri={item?.image} key={item + index} route={route} />
          <Text style={[GlobalStyle.bold, styles.textName]}>{item?.name}</Text>
          <Icon size={30} name="angle-right" color={"white"} />
        </View>
      </TouchableOpacity>
    );
  };
  
  //search render
  return (
    <View style={styles.container}>
      {loading === true ? (
        <ActivityIndicator color="#FF7C66" size={40} />
      ) : (
        <View>
          {data?.results === undefined ? (
            <View>
              <Text style={[GlobalStyle.bold, styles.textInit]}>
                Ingresa el nombre de un personaje para comenzar una búsqueda
              </Text>
              <Lottie width={140} height={140} />
            </View>
          ) : (
              <FlatList
              data={data.results}
              renderItem={_Item}
              keyExtractor={(e, i) => e + i.toString()}
            />
          )}
        </View>
      )}
  <Alert/>
    </View>
  );
};
export default CharacterCard;
const styles = StyleSheet.create({
  container:{ height:'100%', paddingBottom:210},
  containerProduct: {
    display: "flex",
    backgroundColor: "rgba(15, 50, 54, 0.9)",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    borderRadius: 20,
    marginTop: 20,
    height: 130,
    borderColor: "rgba(196, 196, 196, 0.3)",
    borderWidth: 0.2,
    shadowColor: "white",
    elevation: 3,
  },
  containerData: {
    top: "2.5%",
    display: "flex",
    flexDirection: "row",
    width: "93%",
    alignItems: "center",
    justifyContent: "space-between",
  },
  textName: {
    color: "white",
    width: "40%",
  },
  textInit: {
    color: "white",
    top: 250,
    fontSize: 15,
    letterSpacing: 1,
    marginHorizontal: 25,
  },
});
