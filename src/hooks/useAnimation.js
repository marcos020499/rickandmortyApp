import {useRef} from 'react';
import {Animated} from 'react-native';

export const useAnimation = () => {
  //animation fade In
  const opacity = useRef(new Animated.Value(0)).current;
  const fadeIn = (duration = 300) => {
    Animated.timing(opacity, {
      toValue: 1,
      duration,
      useNativeDriver: true,
    }).start();
  };
  return { fadeIn };
};
