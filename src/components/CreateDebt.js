import React, {useState} from 'react';
import {StyleSheet, Text, Button, TextInput, View} from 'react-native';

const CreateDebt = ({info, add}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const addDebt = () => {
    const payload = {
      hisTitle: title,
      phone: info.phone,
      title: info.name,
      date: date,
      amount: amount,
    };
    add(payload);
  };
  const handleInputChange = (text) => {
    if (/^\d+$/.test(text)) {
      setAmount(text);
    }
  };
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View>
        <View>
          <Text>title : </Text>
          <TextInput
            placeholder={'title'}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
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
            numeric
            keyboardType={'numeric'}
            placeholder={'amount'}
            onChangeText={(text) => handleInputChange(text)}
          />
        </View>
        <Button title="Submit" onPress={() => addDebt()} />
      </View>
    </View>
  );
};

export default CreateDebt;
