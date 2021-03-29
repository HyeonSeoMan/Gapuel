import React from 'react';
import {View, Text, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import DebtList from '../containers/DebtList';
import HomeHeader from '../containers/HomeHeader';

const Home = (props) => {
  return (
    <ScrollView>
      <HomeHeader navigation={props.navigation} />
      <View style={styles.container}>
        <View style={styles.debtTitle}>
          <Text style={styles.debtTitleText}>채무 목록</Text>
          <TouchableOpacity
            style={styles.addDebtWrap}
            onPress={() => {
              props.navigation.navigate('ContactsScreen', {
                moneyParam: props.navigation.getParam('moneyParam'),
              });
            }}>
            <Text style={styles.addDebtText}>+ 작성하기</Text>
          </TouchableOpacity>
        </View>
        <DebtList navigation={props.navigation} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 40,
    marginTop: 80,
  },
  debtTitle: {
    marginBottom: 14,
    flexDirection: 'row',
  },
  debtTitleText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#657A8F',
  },
  addDebtWrap: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginRight: 10,
  },
  addDebtText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#657A8F',
  },
});

export default Home;
