import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import GlobalStyle from "./GlobalStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageColors from "react-native-image-colors";
import { FadeInImage } from "./FadeInImage";
import { episodesAsync, resetStates } from "../redux/redux";
import { useDispatch } from "react-redux";
import CharacterEpisodes from "./CharacterEpisodes";
import Gradient from "./Gradient";
import TextDetails from "./TextDetails";

const CharacterDetails = ({ route, navigation }) => {

  const { item } = route.params;
  const [bgColor, setBgColor] = useState("grey");
  const isMounted = useRef(true);
  const dispatch = useDispatch();
  //background color reference image character
  useEffect(() => {
    ImageColors.getColors(item?.image, { fallback: "grey" }).then((colors) => {
      if (!isMounted.current) return;
      setBgColor(colors.dominant || "grey");
    });
    return () => {
      isMounted.current = false;
    };
  }, []);
  //get episodes
  useEffect(() => {
    if (!item?.episode?.length) {
      return;
    }
    item?.episode.forEach((id,index) =>{index<5 ?dispatch(episodesAsync({ id })):null});
  }, []);
  //text elements
  const elements = [
    `Especie: ( ${item?.species}-${item?.gender} )`,
    `Origen: ${item?.origin?.name}`,
    `Ubicación: ${item?.location?.name}`,
  ];
  const onPress = () => {
    dispatch(resetStates());
    navigation.navigate("Home");
  };
  return (
    <View style={[{ backgroundColor: bgColor }, styles.container]}>
      <FadeInImage uri={item?.image} key={item} route={route} />
      <TouchableOpacity
        onPress={() => {onPress()}}
        style={styles.feedback}
      >
        <View style={styles.iconView}>
          <Icon size={45} name="angle-left" color={"white"} />
        </View>
      </TouchableOpacity>
      <ScrollView nestedScrollEnabled={true}>
        <TextDetails>
          <Text style={[GlobalStyle.bold, styles.textTitle]}>Información</Text>
        </TextDetails>
        <Gradient bgColor={bgColor}>
          <Text style={[GlobalStyle.bold, styles.textName]}>
            {item?.name} ({item?.status})
          </Text>
          {elements.map((el, index) => (
            <Text style={[GlobalStyle.bold, styles.textSpecie]} key={index}>
              {el}
            </Text>
          ))}
        </Gradient>
        <CharacterEpisodes bgColor={bgColor} />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  textTitle: {
    color: "white",
    textAlign: "center",
    marginVertical: 5,
  },
  textName: {
    color: "white",
    textTransform: "uppercase",
  },
  feedback: {
    position: "absolute",
    top: "3%",
    borderRadius: 10,
    zIndex: 1,
    left: "5%",
    width: 40,
  },
  textSpecie: {
    marginTop: 20,
    color: "white",
  },
  iconView: {
    display: "flex",
    alignSelf: "center",
  },
});
export default CharacterDetails;
