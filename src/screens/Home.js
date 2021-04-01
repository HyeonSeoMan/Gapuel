import React from 'react';
import {View, Text, TouchableOpacity, Button, ScrollView, StyleSheet} from 'react-native';
import DebtList from '../containers/DebtList';
import HomeHeader from '../containers/HomeHeader';
import LocalNotification from '../Util/LocalNotification';

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
      {/* <Button title={'register'} onPress={() => LocalNotification.register()}></Button>
      <Button title={'cancelAll'} onPress={() => LocalNotification.cancelAll()}></Button>
      <Button title={'removeBadge'} onPress={() => LocalNotification.removeBadge()}></Button>
      <Button title={'getAllNoti'} onPress={() => LocalNotification.getAllNoti()}></Button> */}
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
    paddingBottom: 12,
    borderBottomWidth: 2,
    borderBottomColor: '#7A787850',
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
