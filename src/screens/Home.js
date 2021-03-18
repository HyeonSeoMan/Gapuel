import React from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  ScrollView,
} from 'react-native';
import SendBody from '../containers/SendBody';
import ReceiveBody from '../containers/ReceiveBody';

const SendMoney = (props) => {
  return (
    <ScrollView>
      <View style={styles.headerWrap}>
        <Text>{props.navigation.getParam('moneyParam') === 'Receive' ? '받을 돈' : '보낼 돈'}</Text>
        <Button
          title={
            props.navigation.getParam('moneyParam') === 'Receive'
              ? 'Go to SendMoney'
              : 'Go to ReceiveMoney'
          }
          onPress={() => {
            props.navigation.navigate('Home', {
              moneyParam:
                props.navigation.getParam('moneyParam') === 'Receive'
                  ? 'Send'
                  : 'Receive',
            });
          }}
        />
      </View>
      {props.navigation.getParam('moneyParam') === 'Receive' ? <ReceiveBody /> : <SendBody />}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: 'gray',
    padding: '10%',
  },
  listWrap: {
    padding: '10%',
  },
});

export default SendMoney;
