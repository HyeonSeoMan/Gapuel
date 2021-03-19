import React from 'react';
import {StyleSheet, Text, Button, View, ScrollView} from 'react-native';
import DebtList from '../containers/DebtList';

const SendMoney = (props) => {
  return (
    <ScrollView>
      <View style={styles.headerWrap}>
        <Text>
          {props.navigation.getParam('moneyParam') === 'Receive'
            ? '받을 돈'
            : '보낼 돈'}
        </Text>
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
      <DebtList navigation={props.navigation} />
      <Button
        title="작성하기"
        onPress={() => {
          props.navigation.navigate('MyModal', {
            moneyParam: props.navigation.getParam('moneyParam'),
          });
        }}
      />
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
