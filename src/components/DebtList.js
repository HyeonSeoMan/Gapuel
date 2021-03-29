import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const DebtList = ({navigation, debt}) => {
  const moneyParam =
    navigation.getParam('moneyParam') === undefined
      ? 'Send'
      : navigation.getParam('moneyParam');
  const numComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <View>
      {debt.map((item, idx) => (
        <TouchableOpacity
          key={'debt' + idx}
          style={styles.debtWrap}
          onPress={() => {
            navigation.navigate('Detail', {
              moneyParam: moneyParam,
              phone: item.phone,
            });
          }}>
          <View style={styles.leftWrap}>
            <Text style={styles.leftWrapTitle}>{item.title}</Text>
            <Text style={styles.leftWrapPhone}>{item.phone}</Text>
          </View>
          <View style={styles.rightWrap}>
            <Text style={styles.rightWrapTotal}>
              ₩ {numComma(item.total)}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  debtWrap: {
    backgroundColor: '#F9F9F9',
    padding: 12,
    marginBottom: 12,
    flexDirection: 'row',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  titleInfo: {
    flexDirection: 'row',
  },
  leftWrapTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  leftWrapPhone: {
    fontSize: 12,
    fontWeight: '600',
    color: '#657A8F80',
  },
  rightWrap: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  rightWrapTotal: {
    fontSize: 14,
    fontWeight: '600',
  },
});

export default DebtList;
