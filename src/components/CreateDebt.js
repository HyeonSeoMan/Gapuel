import React, {useState} from 'react';
import {StyleSheet, Text, Button, TextInput, View} from 'react-native';

const CreateDebt = ({info, add}) => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const addDebt = () => {
    const payload = {
      phone: info.phone,
      title: info.name,
      date: date,
      amount: amount,
    };
    add(payload);
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <View>
          <Text>phone : </Text>
          <TextInput placeholder={'phone'} value={info.phone} />
        </View>
        <View>
          <Text>title : </Text>
          <TextInput placeholder={'title'} value={info.name} />
        </View>
        <View>
          <Text>date : </Text>
          <TextInput
            placeholder={'YYYY-MM-DD, HH:MI'}
            onChangeText={(text) => setDate(text)}
          />
        </View>
        <View>
          <Text>amount : </Text>
          <TextInput
            placeholder={'amount'}
            onChangeText={(text) => setAmount(text)}
          />
        </View>
        <Button title="Submit" onPress={() => addDebt()} />
      </View>
    </View>
  );
};

export default CreateDebt;
