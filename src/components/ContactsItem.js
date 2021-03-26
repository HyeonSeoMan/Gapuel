import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const ContactsItem = (props) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => {
        const e = {
          phone: props.item.phoneNumbers[0].number,
          name: `${props.item.familyName} ${props.item.givenName}`,
        };
        props.checkPhone(e);
      }}>
      <View style={styles.infoWrap}>
        <View style={styles.leftWrap}>
          <Text style={styles.leftWrapTitle}>
            {`${props.item.familyName} `} {props.item.givenName}
          </Text>
          <Text style={styles.leftWrapPhone}>{props.item.phoneNumbers[0].number}</Text>
        </View>
        <View style={styles.rightWrap}>
          <Image
            style={styles.rightWrapButton}
            source={require('../assets/icons/ico_arrow.png')}
          />
        </View>
      </View>
      <View style={styles.hr} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    // paddingBottom: 20,
  },
  infoWrap: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 15,
  },
  leftWrapTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
  },
  leftWrapPhone: {
    fontSize: 12,
    fontWeight: '600',
    color: '#657A8F80',
  },
  rightWrap: {
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginRight: 10,
  },
  rightWrapButton: {
    width: 12,
    height: 12,
  },
  hr: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 1,
    width: '90%',
    opacity: 0.1,
    backgroundColor: '#909090',
  },
});

export default ContactsItem;
