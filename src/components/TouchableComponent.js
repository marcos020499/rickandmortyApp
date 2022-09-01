import React from 'react';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
const TouchableComponent = ({navigation, name}) => {
  //onPress next page
  const onPress =()=>{
    navigation.navigate(name);
  }
  return (
      <TouchableWithoutFeedback
        onPress={() => {onPress()}}>
        <View style={styles.nextPage}></View>
      </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  nextPage: {
    position: 'absolute',
    width: '40%',
    bottom: 0,
    top: '0%',
    right: -50,
    height: '100%',
    backgroundColor: 'transparent',
  },
});
export default TouchableComponent;
