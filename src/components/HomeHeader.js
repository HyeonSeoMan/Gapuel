import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const HomeHeader = ({names, debt, navigation}) => {
  const totalAmount = debt.reduce((accum, curr) => {
    accum += curr.total;
    return accum;
  }, 0);
  const numComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <View style={styles.headerWrap}>
      <View style={styles.totalWrap}>
        <Text
          style={[
            styles.moneyParam,
            navigation.getParam('moneyParam') === 'Receive'
              ? {color: '#EC5C4F'}
              : {color: '#69B07E'},
          ]}>
          {navigation.getParam('moneyParam') === 'Receive'
            ? '보내야 하는 돈'
            : '받아야 하는 돈'}
        </Text>
        <Text style={styles.totalAmount}>{'₩ ' + numComma(totalAmount)}</Text>
      </View>
      <View style={styles.paramWrap}>
        <TouchableOpacity
          style={styles.paramBox}
          onPress={() => navigation.navigate('Home', {moneyParam: 'Send'})}>
          <View style={styles.typeChip}>
            <Text style={styles.typeChipText}>받을 돈</Text>
          </View>
          <View style={styles.namesWrap}>
            {names.send.length > 0 && (
              <Text style={[styles.names, {color: '#69B07E'}]}>
                {names.send[0]}
                {names.send.length > 1 && ` 외 ${names.send.length - 1} 명`}
              </Text>
            )}
            {names.send.length === 0 && (
              <Text style={[styles.names, {color: '#69B07E'}]}>-</Text>
            )}
          </View>
        </TouchableOpacity>
        <View style={styles.verticleLine} />
        <TouchableOpacity
          style={styles.paramBox}
          onPress={() => navigation.navigate('Home', {moneyParam: 'Receive'})}>
          <View style={styles.typeChip}>
            <Text style={styles.typeChipText}>보낼 돈</Text>
          </View>
          <View style={styles.namesWrap}>
            {names.receive.length > 0 && (
              <Text style={[styles.names, {color: '#EC5C4F'}]}>
                {names.receive[0]}
                {names.receive.length > 1 &&
                  ` 외 ${names.receive.length - 1} 명`}
              </Text>
            )}
            {names.receive.length === 0 && (
              <Text style={[styles.names, {color: '#EC5C4F'}]}>-</Text>
            )}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrap: {
    backgroundColor: '#223546',
    padding: '10%',
    zIndex: 998,
  },
  totalWrap: {
    textAlign: 'center',
    marginBottom: 40,
  },
  moneyParam: {
    textAlign: 'center',
    color: '#69B07E',
    fontSize: 14,
    fontWeight: '600',
  },
  totalAmount: {
    textAlign: 'center',
    color: 'white',
    fontSize: 28,
    fontWeight: '500',
    marginTop: 12,
  },
  paramWrap: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 999,
    alignSelf: 'center',
    bottom: -42,
    backgroundColor: 'white',
    width: 280,
    height: 84,
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  paramBox: {
    flex: 1,
  },
  typeChip: {
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'gray',
    paddingTop: 3,
    paddingBottom: 3,
    width: 70,
  },
  typeChipText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
  },
  verticleLine: {
    marginTop: 'auto',
    marginBottom: 'auto',
    height: '60%',
    width: 1,
    opacity: 0.2,
    backgroundColor: '#909090',
  },
  namesWrap: {
    marginTop: 10,
  },
  names: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '600',
  },
});

export default HomeHeader;
