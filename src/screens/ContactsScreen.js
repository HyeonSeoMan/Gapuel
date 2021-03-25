import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Platform,
  PermissionsAndroid,
  TouchableOpacity,
} from 'react-native';
import Contacts from 'react-native-contacts';
import ContactsList from '../containers/ContactsList';

const ContactsScreen = (props) => {
  const [contacts, setContacts] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
        title: 'Contacts',
        message: ' This app would like to see your contacts',
      }).then(() => {
        getList();
      });
    } else if (Platform.OS === 'ios') {
      getList();
    }
  }, []);

  const getList = () => {
    Contacts.getAll()
      .then((item) => {
        setContacts(item);
      })
      .catch((e) => {
        console.log('cannot access');
      });
  };
  return (
    <View style={styles.container}>
      <Text>검색기능 구현</Text>
      <ContactsList navigation={props.navigation} contacts={contacts} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactsScreen;
