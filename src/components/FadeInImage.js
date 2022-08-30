import React, {useState} from 'react';
import {ActivityIndicator, Animated, StyleSheet, View} from 'react-native';
import {useAnimation} from '../hooks/useAnimation';
export const FadeInImage = ({uri, route}) => {
  const {fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };
  const onError = () => {
    setIsLoading(false);
  };

  return (
    <View>
      {isLoading && (
        <ActivityIndicator
          style={{
            position: 'absolute',
            top: route?.name === 'Details' ? -30 :70,
            left: route?.name === 'Details' ? -100 :70,
          }}
          color="grey"
          size={30}
        />
      )}

      
      <Animated.Image
        source={{uri}}
        onError={onError}
        onLoad={finishLoading}
        style={
          route?.name === 'Details'
            ? styles.characterImages
            : styles.characterImage
        }
      />

    </View>
  );
};

const styles = StyleSheet.create({
  characterImage: {
    width: 110,
    height: 110,
    borderRadius:10,
  },
  characterImages: {
    width: '100%',
    height: '80%',
    zIndex:1,
    opacity:0.66,
    backgroundColor:'black',
  },
});
