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

  // const renderItem = ({item}) => (
  //   <TouchableOpacity
  //     style={styles.itemContainer}
  //     onPress={() => {
  //       props.navigation.navigate('MyModal', {
  //         phone: item.phoneNumbers[0].number,
  //         name: `${item.familyName} ${item.givenName}`,
  //       });
  //     }}>
  //     <Text style={styles.contactName}>
  //       Name: {`${item.familyName} `} {item.givenName}
  //     </Text>
  //     <Text style={styles.phones}>{item.phoneNumbers[0].number}</Text>
  //   </TouchableOpacity>
  // );
  return (
    <View style={styles.container}>
      {/* <FlatList
        data={contacts}
        renderItem={renderItem}
        numColumns={1}
        keyExtractor={(item, index) => index}
      /> */}
      <ContactsList navigation={props.navigation} contacts={contacts} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ContactsScreen;
