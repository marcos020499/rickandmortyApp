import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import GlobalStyle from './GlobalStyle';
import {useDispatch} from 'react-redux';
import {resetModal} from '../redux/redux';
const Alerts = ({alerts, isModalVisible, setModalVisible}) => {
  const dispatch = useDispatch();
  return (
    <View style={styles.containerHeader}>
      <Modal
        backdropOpacity={0}
        isVisible={isModalVisible}
        style={styles.contentView}>
        <View style={[styles.content, GlobalStyle.globalStyle]}>
          <Text style={[styles.modalText, GlobalStyle.extraBold]}>
            {alerts}
          </Text>
          <View style={styles.buttons}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(false), dispatch(resetModal());
              }}
              style={styles.touchables}>
              <Text style={[styles.textTouch, GlobalStyle.globalStyle]}>
                OK
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default Alerts;
const styles = StyleSheet.create({
  containerHeader: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    top: 60,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  containerLeft: {
    display: 'flex',
    flexDirection: 'row',
  },
  text: {
    fontSize: 17,
    fontWeight: '700',
  },
  content: {
    backgroundColor: '#232A2F',
    padding: 22,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  contentView: {
    justifyContent: 'center',
    margin: 0,
    width: '100%',
    paddingHorizontal: 30,
    alignContent: 'center',
    display: 'flex',
    alignSelf: 'center',
    backgroundColor: '#FF7C66',
  },
  modalText: {
    paddingTop: 38,
    color: 'white',
    fontSize: 12,
    lineHeight: 18,
    textTransform: 'uppercase',
    fontWeight: '800',
    textAlign: 'center',
    paddingHorizontal: 6,
    paddingVertical: 32,
    letterSpacing: 5,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row',
  },
  touchables: {
    borderColor: 'rgba(196, 196, 196, 0.3)',
    borderTopWidth: 1,
    paddingHorizontal: 42,
    paddingTop: 22,
    width: '120%',
  },
  textTouch: {
    color: '#FF7C66',
    fontSize: 13,
    textAlign: 'center',
  },
});
