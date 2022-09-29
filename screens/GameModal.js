import { Text, View, Modal, TouchableOpacity } from 'react-native';
import { mainApp } from '../styles/styles';
import { useNavigation } from '@react-navigation/native';

import React from 'react';

export default function GameModal({ result, newGame, modal, toggleModal }) {
  const navigation = useNavigation();
  function onPressHandler() {
    navigation.navigate('Statics Screen', {
      params: { toggleModal },
    });
    //toggleModal(false);
  }

  return (
    <View>
      <Modal animationType={'slide'} visible={modal}>
        <View style={mainApp.centeredView}>
          <View style={mainApp.modalView}>
            <Text style={mainApp.h2}> {result}</Text>
            <TouchableOpacity style={mainApp.purpleButton} onPress={newGame}>
              <Text style={mainApp.whiteButtonText}>Start a new game</Text>
            </TouchableOpacity>
          </View>
          <View style={mainApp.modalView}>
            <TouchableOpacity
              style={mainApp.blueButton}
              onPress={onPressHandler}
            >
              <Text style={mainApp.whiteButtonText}>show statistics</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
