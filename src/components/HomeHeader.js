import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

const HomeHeader = ({debt, navigation}) => {
  const totalAmount = debt.reduce((accum, curr) => {
    accum += curr.total;
    return accum;
  }, 0);
  return (
    <View style={styles.headerWrap}>
      <Text>
        {navigation.getParam('moneyParam') === 'Receive'
          ? '받을 돈'
          : '보낼 돈'}
      </Text>
      <Text>{totalAmount}</Text>
      <Button
        title={
          navigation.getParam('moneyParam') === 'Receive'
            ? 'Go to SendMoney'
            : 'Go to ReceiveMoney'
        }
        onPress={() => {
          navigation.navigate('Home', {
            moneyParam:
              navigation.getParam('moneyParam') === 'Receive'
                ? 'Send'
                : 'Receive',
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: 'gray',
    padding: '10%',
  },
});

export default HomeHeader;
