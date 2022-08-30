import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from "react-native-vector-icons/FontAwesome";
import ScrollViewIndicator from 'react-native-scroll-indicator';
import GlobalStyle from './GlobalStyle';
import { FadeInImage } from './FadeInImage';
const CharacterCard = ({navigation, route}) => {
  const {data, loading} = useSelector(state => state);
  
  _Item = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        style={[styles.containerProduct]}
        activeOpacity={1}
        onPress={() => {navigation.navigate('Details', {item:item})}}>
          <View style={styles.containerData}>
          <FadeInImage uri={item?.image} key={item + index} route={route} />
            <Text style={[GlobalStyle.bold, styles.textName]}>{item?.name}</Text>
            <Icon size={35} name="angle-right" color={"white"} />
          </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ height: '100%'}}>
      {loading===true?(
        <ActivityIndicator color='#FF7C66'/>
      ):(
      <ScrollViewIndicator
        scrollIndicatorStyle={{backgroundColor: '#FF7C66', height: 50}}>
        <FlatList data={data?.results} renderItem={_Item} />
      </ScrollViewIndicator>
      )}
    </View>
  );
};
export default CharacterCard;
const styles = StyleSheet.create({
  containerProduct: {
    display: 'flex',
    backgroundColor:'#232A30',
    alignItems: 'center',
    alignSelf: 'center',
    width: '94%',
    borderRadius: 20,
    marginTop: 35,
    height: 130,
    justifyContent: 'space-between',
    borderColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    shadowColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20,
  },
  containerData:{
    top:'4%',
    display:'flex',
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    justifyContent:'space-between'
  },
  textName:{
    color:'white',
    width:'40%'
  },
  image:{
    width:100,
    borderRadius:10,
    height:100
  }
});
