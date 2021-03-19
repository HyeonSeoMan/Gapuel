import React, {useState} from 'react';
import {StyleSheet, Text, Button, TextInput, View} from 'react-native';

const CreateDebt = ({add}) => {
  const [phone, setPhone] = useState('');
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const addDebt = () => {
    const payload = {
      phone: phone,
      title: title,
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
          <TextInput
            placeholder={'phone'}
            onChangeText={(text) => setPhone(text)}
          />
        </View>
        <View>
          <Text>title : </Text>
          <TextInput
            placeholder={'title'}
            onChangeText={(text) => setTitle(text)}
          />
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
