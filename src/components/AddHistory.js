import React, {useState} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

const AddHistory = ({addHistoryProp}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [amount, setAmount] = useState(null);
  const submit = () => {
    const payload = {
      title: title,
      date: date,
      amount: Number(amount),
    };
    addHistoryProp(payload);
  };
  const handleInputChange = (text) => {
    if (/^\d+$/.test(text)) {
      setAmount(text);
    }
  };

  return (
    <View>
      <Text>AddHistory</Text>
      <View>
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
            numeric
            keyboardType={'numeric'}
            placeholder={'amount'}
            onChangeText={(text) => handleInputChange(text)}
          />
        </View>
        <Button title="Submit" onPress={() => submit()} />
      </View>
    </View>
  );
};

export default AddHistory;
