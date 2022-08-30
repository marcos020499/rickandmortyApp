import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import GlobalStyle from "./GlobalStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageColors from "react-native-image-colors";
import { FadeInImage } from "./FadeInImage";
import { episodesAsync, resetStates } from "../redux/redux";
import { useDispatch } from "react-redux";
import ScrollViewIndicator from "react-native-scroll-indicator";
import CharacterEpisodes from "./CharacterEpisodes";
import Gradient from "./Gradient";
import TextDetails from "./TextDetails";
const CharacterDetails = ({ route, navigation }) => {
  const { item } = route.params;
  const [bgColor, setBgColor] = useState("grey");
  const isMounted = useRef(true);
  const dispatch = useDispatch();
  useEffect(() => {
    ImageColors.getColors(item?.image, { fallback: "grey" }).then((colors) => {
      if (!isMounted.current) return;
      setBgColor(colors.dominant || "grey");
    });
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    if (item) {
      for (let i in item.episode) {
        dispatch(episodesAsync({ id: item.episode[i] }))
      }
    }
  }, []);
  return (
    <View style={[{ backgroundColor: bgColor }, styles.container]}>
      <FadeInImage uri={item?.image} key={item} route={route} />
      <TouchableOpacity
        onPress={() => {
          dispatch(resetStates());
          navigation.navigate("Home");
        }}
        style={styles.feedback}
      >
        <View style={styles.iconView}><Icon size={45} name="angle-left" color={"white"} /></View>
      </TouchableOpacity>
      <ScrollViewIndicator
        scrollIndicatorStyle={{ backgroundColor: "#FF7C66", height: 50 }}
      >
        <TextDetails>
          <Text style={[GlobalStyle.bold, styles.textTitle]}>Información</Text>
        </TextDetails>
        <Gradient bgColor={bgColor}>
          <Text style={[GlobalStyle.bold, styles.textName]}>
            {item?.name} ({item?.status})
          </Text>
          <Text style={[GlobalStyle.regular, styles.textSpecie]}>
            Especie: ( {item?.species}-{item?.gender} )
          </Text>
          <Text style={[GlobalStyle.regular, styles.textSpecie]}>
            Origen: {item?.origin?.name}
          </Text>
          <Text style={[GlobalStyle.regular, styles.textSpecie]}>
            Ubicación: {item?.location?.name}
          </Text>
        </Gradient>
        <CharacterEpisodes bgColor={bgColor} />
      </ScrollViewIndicator>
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
    width:40
  },
  textSpecie: {
    marginTop: 20,
    color: "white",
  },
  iconView:{
    display:'flex',
    alignSelf:'center'
  }
});
export default CharacterDetails;
