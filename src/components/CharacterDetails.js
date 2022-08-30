import React from "react";
import {View, Text, StyleSheet, Image,TouchableOpacity} from 'react-native';
import GlobalStyle from "./GlobalStyle";
import Icon from 'react-native-vector-icons/FontAwesome';
const CharacterDetails=({route, navigation})=>{
    const { item } = route.params;
    return(
        <View>
            <TouchableOpacity
        onPress={() => {
          navigation.navigate('Home')
        }}
      >
        <View style={styles.feedback}>
        <Icon  size={38} name="arrow-left" />
        </View>
      </TouchableOpacity>
            <Image style={styles.image} source={{uri: item?.image}}/>
            <Text style={[GlobalStyle.bold, styles.textName]}>{item?.name}</Text>
            <Text style={[GlobalStyle.bold, styles.textName]}>{item?.gender}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    image:{
        width:100,
        height:100
    },
    textName:{
        color:'white'
    }
})
export default CharacterDetails;