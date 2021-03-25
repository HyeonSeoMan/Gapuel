import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Alert} from 'react-native';
import HistoryList from './HistoryList';
import AddHistory from './AddHistory';

const DetailWrap = ({Debt, navigation, remove, addHistory}) => {
  const removeDebt = () => {
    Alert.alert('Debt Delete', '정말 삭제?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          remove(navigation.getParam('phone'));
          navigation.goBack();
        },
      },
    ]);
  };
  const addHistoryProp = (e) => {
    const payload = {
      ...e,
      phone: navigation.getParam('phone'),
    };
    addHistory(payload);
  };
  const numComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <View>
      <Text>Detail</Text>
      {Debt && <Text>{numComma(Debt.total)}</Text>}
      <Button title="Delete" onPress={removeDebt} />
      <Text>{navigation.getParam('moneyParam')}</Text>
      <Text>{String(navigation.getParam('phone'))}</Text>
      {Debt && <HistoryList Histories={Debt.history} />}
      <AddHistory addHistoryProp={(payload) => addHistoryProp(payload)} />
    </View>
  );
};

export default DetailWrap;
