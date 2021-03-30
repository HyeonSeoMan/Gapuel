import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const DebtList = ({navigation, debt}) => {
  const moneyParam =
    navigation.getParam('moneyParam') === undefined
      ? 'Send'
      : navigation.getParam('moneyParam');
  const numComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <View>
      {debt.length > 0 &&
        debt.map((item, idx) => (
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
              <Text style={styles.rightWrapTotal}>₩ {numComma(item.total)}</Text>
            </View>
          </TouchableOpacity>
        ))}
      {debt.length === 0 && (
        <View style={styles.noDataBox}>
          <Image
            style={styles.noDataIco}
            source={require('../assets/icons/ico_noData.png')}
          />
          <Text style={styles.noDataText}>작성된 목록이 없습니다.</Text>
          <Text style={styles.noDataTextSub}>작성하기 버튼을 통해 새로운 목록을 작성해 주세요.</Text>
          <TouchableOpacity
            style={styles.noDataButton}
            onPress={() => {
              navigation.navigate('ContactsScreen', {
                moneyParam: navigation.getParam('moneyParam'),
              });
            }}>
            <Text style={styles.noDataButtonText}>작성하기</Text>
          </TouchableOpacity>
        </View>
      )}
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
  noDataBox: {
    marginTop: '10%',
    alignItems: 'center',
  },
  noDataIco: {
    width: 110,
    height: 110,
  },
  noDataText: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 19,
    fontWeight: '600',
    color: '#7A7878',
  },
  noDataTextSub: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7A7878',
  },
  noDataButton: {
    marginTop: 20,
    backgroundColor: '#7A7878',
    padding: 18,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 6,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  noDataButtonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});

export default DebtList;
