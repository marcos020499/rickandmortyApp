import React, {useState, useEffect, useRef} from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity} from "react-native";
import GlobalStyle from "./GlobalStyle";
import Icon from "react-native-vector-icons/FontAwesome";
import ImageColors from "react-native-image-colors";
import LinearGradient from 'react-native-linear-gradient';
import { FadeInImage } from "./FadeInImage";
import { episodesAsync, resetStates } from "../redux/redux";
import { useDispatch, useSelector } from "react-redux";
import ScrollViewIndicator from 'react-native-scroll-indicator';
import CharacterEpisodes from "./CharacterEpisodes";
const CharacterDetails = ({ route, navigation }) => {
const { item } = route.params;
  const [bgColor, setBgColor] = useState("grey");
  const isMounted = useRef(true);
  const dispatch = useDispatch();
  const [episodes, setEpisodes] = useState([])
  useEffect(() => {
    ImageColors.getColors(item?.image, { fallback: "grey" }).then((colors) => {
      if (!isMounted.current) return;
      setBgColor(colors.dominant || "grey");
    });
    return () => {
      isMounted.current = false;
    };
  }, []);
  useEffect(()=>{
    if(item){
        let episodes_info = []
        for (let i in item.episode){
            episodes_info.push(dispatch(episodesAsync({id:item.episode[i]})));
        }
        
        setEpisodes({episodes_info})
    }
  },[])
  return (
    <View style={[{backgroundColor:bgColor},styles.container]}>
       <ScrollViewIndicator
        scrollIndicatorStyle={{backgroundColor: '#FF7C66', height: 50}}>
      <FadeInImage uri={item?.image} key={item} route={route} />
      <TouchableOpacity
        onPress={() => {
            dispatch(resetStates())
          navigation.navigate("Home");
        }}
        style={styles.feedback}
      >
          <Icon size={45} name="angle-left" color={"white"} />
      </TouchableOpacity>
      <LinearGradient style={styles.containerData} colors={["#232A30","#232A30", bgColor]} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
      <Text style={[GlobalStyle.bold, styles.textName]}>{item?.name} ({item?.status})</Text>
      <Text style={[GlobalStyle.regular, styles.textSpecie]}>( {item?.species}-{item?.gender} )</Text>
      <Text style={[GlobalStyle.regular, styles.textSpecie]}>origen: {item?.origin?.name}</Text>
      <Text style={[GlobalStyle.regular, styles.textSpecie]}>ubicacion: {item?.location?.name}</Text>
      </LinearGradient>
      <CharacterEpisodes bgColor={bgColor}/>
      </ScrollViewIndicator>
    </View>
  );
};
const styles = StyleSheet.create({
    container:{
        height:'100%'
    },
  containerData:{
    borderRadius:10,
    borderWidth:1,
    width:'90%',
    marginTop:'-20%',
    paddingVertical:10,
    backgroundColor:'#64686B',
    display:'flex',
    alignItems:'center',
    alignSelf:'center',
  },
  textName: {
    color: "white",
    textTransform:'uppercase'
  },
  feedback:{
    position:'absolute',
    top:'3%',
    borderRadius:10,
    zIndex:1,
    left:'5%'
  },
  textSpecie:{
    marginTop:20,
    color: "white",
  }
});
export default CharacterDetails;
