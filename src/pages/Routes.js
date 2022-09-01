import React, {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './HomeScreen'
import DetailsScreen from './DetailsScreen';
import Splash from './Splash';
import Toast from 'react-native-root-toast';
import { BackHandler } from 'react-native';

const Stack = createStackNavigator();
const Routes = () => {
  const [exitApp, setExitApp] = useState(false);

  //exit app with button return
  const backAction = () => {
    if (exitApp == false) {
      setExitApp(true);
      Toast.show('vuelve a presionar atras, para salir de la app', {
        duration: 1300,
        shadow: true,
        animation: true,
      });
    } else if (exitApp == true) {
      BackHandler.exitApp();
    }
    return true;
  };

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [exitApp]);

  return (
    <NavigationContainer>
      <Stack.Navigator
      optimizationsEnabled={true}
      initialRouteName='Splash'
        screenOptions={{
          animationEnabled: false,
          headerShown: false,
        }}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;