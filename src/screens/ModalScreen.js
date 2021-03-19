import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import CreateDebt from '../containers/CreateDebt';

const ModalScreen = (props) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <CreateDebt navigation={props.navigation} />
      <Button onPress={() => props.navigation.goBack()} title="Dismiss" />
    </View>
  );
};

export default ModalScreen;
