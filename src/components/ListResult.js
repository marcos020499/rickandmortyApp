import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {useDispatch,useSelector} from 'react-redux';
import ScrollViewIndicator from 'react-native-scroll-indicator';
import GlobalStyle from './GlobalStyle';
const ListResult = ({navigation}) => {
  const {data} = useSelector(state => state);
  _Item = ({item, index}) => {
    return (
      <TouchableOpacity
        key={index}
        activeOpacity={1}
        onPress={() => {navigation.navigate('Details', {item:item})}}>
          <View style={styles.containerProduct}>
            <Text style={[GlobalStyle.bold, styles.textName]}>{item?.name}</Text>
            <Image style={styles.image} source={{uri:item?.image}}/>
          </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ height: '100%'}}>
      <ScrollViewIndicator
        scrollIndicatorStyle={{backgroundColor: '#FF7C66', height: 50}}>
        <FlatList data={data?.results} renderItem={_Item} />
      </ScrollViewIndicator>
    </View>
  );
};
export default ListResult;
const styles = StyleSheet.create({
  containerProduct: {
    display: 'flex',
    backgroundColor: '#232A30',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    width: '94%',
    borderRadius: 20,
    marginTop: 35,
    height: 130,
    justifyContent: 'space-between',
    borderColor: 'rgba(196, 196, 196, 0.3)',
    borderWidth: 1,
    zIndex: 10,
    shadowColor: 'white',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 20,
  },
  textName:{
    color:'white'
  },
  image:{
    width:100,
    borderRadius:10,
    height:100
  }
});
