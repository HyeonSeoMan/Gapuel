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
      navigation.navigate('AddDebtScreen', {
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
    <View style={styles.container}>
      <View style={styles.contactsListWrap}>
        <Text style={styles.contactsListTitle}>연락처 목록</Text>
        {contacts !== null &&
          contacts.length > 0 &&
          contacts.map((item) => (
            <ContactsItem
              key={item.phoneNumbers[0].number}
              item={item}
              checkPhone={(e) => checkPhone(e)}
            />
          ))}
        {contacts !== null && contacts.length === 0 && (
          <View style={styles.noContact}>
            <Text style={styles.noContactText}>연락처 없음</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 0,
  },
  contactsListWrap: {
    marginTop: 10,
    minHeight: '85%',
    padding: 12,
    borderRadius: 3,
    backgroundColor: 'white',
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  contactsListTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#657A8F90',
    marginBottom: 10,
  },
  noContact: {
    marginTop: 80,
    marginBottom: 80,
  },
  noContactText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#657A8F80',
    textAlign: 'center',
  },
});

export default ContactsList;
