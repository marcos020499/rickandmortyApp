import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  StyleSheet,
} from "react-native";
import { fetchDataAsync } from "../redux/redux";
import Icon from 'react-native-vector-icons/FontAwesome';
import GlobalStyle from "./GlobalStyle";
import { useDispatch } from "react-redux";
const SearchBar = () => {
  //search name character
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const onPress =()=>{
    dispatch(fetchDataAsync({ query }));
  }

  return (
    <View style={styles.Search}>
      <TextInput
        value={query}
        onChangeText={setQuery}
        placeholderTextColor={'white'}
        placeholder="Que personaje estas buscando?"
        style={[styles.textInput, GlobalStyle.regular]}
      />
      <TouchableWithoutFeedback onPress={() => {onPress()}}>
        <View style={styles.feedback}>
        <Icon size={38} name="search" style={styles.icon}/>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  Search: {
    display: "flex",
    flexDirection: "column",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "13%",
    alignSelf: "center",
  },
  textInput: {
    backgroundColor: "rgba(229, 229, 229, 0.4)",
    borderRadius: 14,
    height: 50,
    width: "93%",
    fontSize: 18,
    paddingLeft: 15,
    color: "rgba(229, 229, 229, 0.7)",
    textDecorationLine:'none'
  },
  feedback:{
    position:'absolute',
    right: 12,
    width: 40,
    zIndex:10,
    height: 40,
    backgroundColor:'transparent'
  },
  icon:{
    width:40,
    height:40
  }
});
export default SearchBar;
