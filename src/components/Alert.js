import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import GlobalStyle from "./GlobalStyle";
import { useDispatch, useSelector } from "react-redux";
import { resetStates } from "../redux/redux";
const Alert = () => {
  const { loading, error } = useSelector((state) => state);
  const [time, setTime] = useState();
  const [message, setMessage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();
  //modal state
  useEffect(() => {
    if (loading) {
      setTime(
        setTimeout(() => {
          setMessage("Se termino el tiempo de espera, vuelve a intentarlo"),
            setModalVisible(true);
        }, 10000)
      );
    }
    if (loading === false || error === true) {
      clearTimeout(time);
    }
    if (error) {
      setMessage("Hubo un error en la busqueda, intentalo nuevamente"),
        setModalVisible(true);
    }
  }, [loading, error]);

  const onPress = () => {
    setModalVisible(false), dispatch(resetStates());
  };

  return (
    <View style={styles.containerHeader}>
      <Modal
        backdropOpacity={0.5}
        isVisible={isModalVisible}
        style={styles.contentView}>
        <View style={[styles.content, GlobalStyle.globalStyle]}>
          <Text style={[styles.modalText, GlobalStyle.bold]}>{message}</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => {onPress()}}style={styles.touchable}>
              <Text style={[GlobalStyle.extraBold, styles.textTouch]}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Alert;
const styles = StyleSheet.create({
  containerHeader: {
    display: "flex",
    flexDirection: "row",
    width: "90%",
    top: 60,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  content: {
    backgroundColor: "#232A2F",
    padding: 22,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
  },
  contentView: {
    justifyContent: "center",
    margin: 0,
    width: "100%",
    paddingHorizontal: 30,
    alignContent: "center",
    display: "flex",
    alignSelf: "center",
  },
  modalText: {
    paddingTop: 38,
    color: "white",
    textAlign: "center",
    paddingHorizontal: 6,
    paddingVertical: 32,
  },
  button: {
    display: "flex",
    flexDirection: "row",
  },
  touchable: {
    borderColor: "rgba(196, 196, 196, 0.3)",
    borderTopWidth: 1,
    paddingHorizontal: 42,
    paddingTop: 22,
    width: "120%",
  },
  textTouch: {
    color: "white",
    textAlign: "center",
  },
});
