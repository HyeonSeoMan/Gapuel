import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

const SendMoney = (props) => {
  return (
    <View>
      <Text>SendMoney</Text>
      <Button
        onPress={() => props.navigation.navigate('MyModal')}
        title="Info"
        color="black"
      />
      <Button
        title="Go to ReceiveMoney"
        onPress={() => {
          props.navigation.navigate('ReceiveMoney', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </View>
  );
};

export default SendMoney;
