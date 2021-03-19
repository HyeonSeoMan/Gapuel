import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import DetailWrap from '../containers/DetailWrap';

const Detail = (props) => {
  return (
    <View>
      <DetailWrap
        navigation={props.navigation}
        debtId={String(props.navigation.getParam('debtId'))}
      />
    </View>
  );
};

export default Detail;
