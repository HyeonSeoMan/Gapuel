import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button, Alert} from 'react-native';
import HistoryList from './HistoryList';
import AddHistory from './AddHistory';

const DetailWrap = ({Debt, navigation, remove, addHistory}) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
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
          remove(Debt.phone);
          navigation.goBack();
        },
      },
    ]);
  };
  const addHistoryProp = (e) => {
    const payload = {
      ...e,
      phone: Debt.phone,
    };
    addHistory(payload);
  };
  const numComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <View>
      {Debt && (
        <>
          <View style={styles.detailHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.typeText}>
                {navigation.getParam('moneyParam') === 'Send'
                  ? '보내야 하는 돈'
                  : '받아야 하는 돈'}
              </Text>
              <Text style={styles.totalText}>₩ {numComma(Debt.total)}</Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={[styles.infoTitle, {marginTop: 'auto'}]}>이름</Text>
              <Text style={styles.infoText}>{Debt.title}</Text>
              <Text style={styles.infoTitle}>전화 번호</Text>
              <Text style={styles.infoText}>{Debt.phone}</Text>
              {/* <Button title="Delete" onPress={removeDebt} /> */}
            </View>
          </View>
          <TouchableOpacity onPress={() => setIsAddOpen(!isAddOpen)}>
            <Text>toggle</Text>
          </TouchableOpacity>
          {isAddOpen && (
            <View style={styles.AddHistoryWrap}>
              <AddHistory
                addHistoryProp={(payload) => addHistoryProp(payload)}
              />
            </View>
          )}
          <HistoryList Histories={Debt.history} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailHeader: {
    padding: 30,
    paddingTop: 40,
    paddingBottom: 20,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#F9FAFC',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerLeft: {
    flex: 2,
  },
  typeText: {
    marginTop: 'auto',
    fontSize: 15,
    fontWeight: '600',
    color: '#A8A9B8',
  },
  totalText: {
    fontSize: 32,
    fontWeight: '400',
    marginTop: 6,
    marginBottom: 6,
  },
  headerRight: {
    flex: 1,
  },
  infoTitle: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
    color: '#A8A9B8',
  },
  infoText: {
    textAlign: 'right',
    fontSize: 15,
    fontWeight: '500',
    color: '#535472',
    marginTop: 5,
    marginBottom: 5,
  },
  AddHistoryWrap: {
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
});
export default DetailWrap;
