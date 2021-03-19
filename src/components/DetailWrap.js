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
          remove(navigation.getParam('debtId'));
          navigation.goBack();
        },
      },
    ]);
  };
  const addHistoryProp = (e) => {
    const payload = {
      ...e,
      id: navigation.getParam('debtId'),
    };
    addHistory(payload);
  };
  return (
    <View>
      <Text>Detail</Text>
      <Text>{Debt.total}</Text>
      <Button title="Delete" onPress={removeDebt} />
      <Text>{navigation.getParam('moneyParam')}</Text>
      <Text>{String(navigation.getParam('debtId'))}</Text>
      {Debt && <HistoryList Histories={Debt.history} />}
      <AddHistory addHistoryProp={(payload) => addHistoryProp(payload)} />
    </View>
  );
};

export default DetailWrap;
