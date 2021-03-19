import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, ScrollView, TextInput} from 'react-native';

const AddHistory = () => {
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState('');
  const submit = () => {
    console.log(date, amount);
  };

  return (
    <View>
      <Text>AddHistory</Text>
      <View>
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
        <Button title="Submit" onPress={() => submit()} />
      </View>
    </View>
  );
};

export default AddHistory;