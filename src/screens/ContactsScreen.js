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
import ContactsSearch from '../components/ContactsSearch';

const ContactsScreen = (props) => {
  const [contacts, setContacts] = useState(null);
  const [searchText, setSearchText] = useState('');

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
        const testItem = item.reduce((accum, curr) => {
          curr['search'] = curr.familyName + curr.givenName + curr.phoneNumbers[0].number.replace(/\-/g, '');
          accum.push(curr);
          return accum;
        }, []);
        setContacts(testItem);
      })
      .catch((e) => {
        console.log('cannot access');
      });
  };
  const getSearch = (e) => {
    const item = e.replace(/\-/g, '');
    setSearchText(item);
  };

  const searchedContacts = () => {
    if (contacts !== null) {
      const searched = contacts.reduce((accum, curr) => {
        if (curr.search.includes(searchText)) {
          accum.push(curr);
        }
        return accum;
      }, []);
      return searched;
    }
    return null;
  };

  return (
    <View style={styles.container}>
      <ContactsSearch getSearch={(e) => getSearch(e)} />
      <ContactsList
        navigation={props.navigation}
        contacts={searchedContacts()}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactsScreen;
