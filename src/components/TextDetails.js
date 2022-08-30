import React from "react";
import { StyleSheet, View } from "react-native";

const TextDetails = ({ children }) => {

  return (
    <View style={styles.containerText}>
      {children}
    </View>
  );
};
const styles = StyleSheet.create({
  containerText:{
    backgroundColor:'#232A30',
    borderRadius:10,
    width:'30%',
    left:'5%',
    marginVertical:5
  }
})
export default TextDetails;
