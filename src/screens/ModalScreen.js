import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import CreateDebt from '../containers/CreateDebt';

const ModalScreen = (props) => {
  const info = {
    phone: props.navigation.getParam('phone'),
    name: props.navigation.getParam('name'),
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CreateDebt navigation={props.navigation} info={info} />
      <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default ModalScreen;
