import React from 'react';
import {StyleSheet, Button, View} from 'react-native';
import CreateDebt from '../containers/CreateDebt';

const AddDebtScreen = (props) => {
  const info = {
    phone: props.navigation.getParam('phone'),
    name: props.navigation.getParam('name'),
  };
  return (
    <View>
      <CreateDebt navigation={props.navigation} info={info} />
    </View>
  );
};

export default AddDebtScreen;
