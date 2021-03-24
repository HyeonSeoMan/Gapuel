import React from 'react';
import {StyleSheet, Text, View, Alert} from 'react-native';
import ContactsItem from './ContactsItem';

const ContactsList = ({navigation, debt, contacts}) => {
  const moneyParam =
    navigation.getParam('moneyParam') === undefined
      ? 'Send'
      : navigation.getParam('moneyParam');
  const checkPhone = (e) => {
    const check = debt.reduce((accum, curr) => {
      if (curr.phone === e.phone) accum = false;
      return accum;
    }, true);

    if (check) {
      navigation.navigate('MyModal', {
        phone: e.phone,
        name: e.name,
      });
    } else {
      Alert.alert('이미 만들어진 번호입니다.', '디테일로 이동?', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Detail', {
              moneyParam: moneyParam,
              phone: e.phone,
            });
          },
        },
      ]);
    }
  };

  return (
    <View>
      <Text>ContactsList</Text>
      {contacts &&
        contacts.map((item) => (
          <ContactsItem
            key={item.phoneNumbers[0].number}
            item={item}
            checkPhone={(e) => checkPhone(e)}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactsList;
