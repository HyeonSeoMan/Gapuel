import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const ContactsItem = (props) => {
  return (
    <View>
      <TouchableOpacity
        style={styles.itemContainer}
        onPress={() => {
          const e = {
            phone: props.item.phoneNumbers[0].number,
            name: `${props.item.familyName} ${props.item.givenName}`,
          };
          props.checkPhone(e);
        }}>
        <Text style={styles.contactName}>
          Name: {`${props.item.familyName} `} {props.item.givenName}
        </Text>
        <Text style={styles.phones}>{props.item.phoneNumbers[0].number}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 10,
  },
  contactName: {
    fontSize: 16,
    color: 'blue',
  },
});

export default ContactsItem;
