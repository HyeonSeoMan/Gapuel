import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Button,
  TextInput,
  View,
  ScrollView,
} from 'react-native';

const ReceiveBody = ({
  ReceiveDebt,
  ReceiveAdd,
  ReceiveRemove,
}) => {
  // const [from, setFrom] = useState('');
  // const [to, setTo] = useState('');
  // const [date, setDate] = useState('');
  // const [amount, setAmount] = useState('');
  // const addDebt = () => {
  //   const payload = {
  //     id: debt.length,
  //     from: from,
  //     to: to,
  //     amount: amount,
  //     date: date,
  //   };
  //   handleAddCounter(payload);
  // };

  return (
    <ScrollView style={styles.container}>
      <View>
        {ReceiveDebt.map((item, idx) => (
          <View key={'ReceiveDebt' + idx} style={styles.debtWrap}>
            <Text>{item.phone}</Text>
            <Text>{item.total}</Text>
            <Text>---history---</Text>
            {item.history.map((his, index) => (
              <View key={'ReceiveDebtHis' + index}>
                <Text>{his.date}</Text>
                <Text>{his.amount}</Text>
              </View>
            ))}
          </View>
        ))}
        <Button title="Delete" onPress={ReceiveRemove} />
        {/* <View style={styles.addDebt}>
          <View style={styles.inputWrap}>
            <Text>from : </Text>
            <TextInput
              placeholder={'from'}
              onChangeText={(text) => setFrom(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text>to : </Text>
            <TextInput
              placeholder={'to'}
              onChangeText={(text) => setTo(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text>date : </Text>
            <TextInput
              placeholder={'YYYY-MM-DD, HH:MI'}
              onChangeText={(text) => setDate(text)}
            />
          </View>
          <View style={styles.inputWrap}>
            <Text>amount : </Text>
            <TextInput
              placeholder={'amount'}
              onChangeText={(text) => setAmount(text)}
            />
          </View>
          <Button title="Submit" onPress={() => addDebt()} />
        </View> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6F6F6',
    paddingTop: '15%',
    paddingBottom: '15%',
  },
  counterAddRemoveContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
  counterAddRemoveButton: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: '#8041D9',
  },
  debtWrap: {
    margin: 10,
    padding: 20,
    backgroundColor: 'gray',
    borderRadius: 20,
  },
  addDebt: {
    margin: 30,
    padding: 20,
    backgroundColor: 'gray',
    borderRadius: 20,
    height: 200,
  },
  inputWrap: {
    flexDirection: 'row',
    margin: 8,
  },
});

export default ReceiveBody;
