import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View, Image, Text} from 'react-native';

const ContactsSearch = (props) => {
  const [text, setText] = useState('');
  const onChange = (e) => {
    setText(e);
    props.getSearch(e);
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchWrap}>
        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => props.getSearch(text)}>
          <Image
            style={styles.icoImage}
            source={require('../assets/icons/ico_search.png')}
          />
        </TouchableOpacity>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.search}
            placeholder={'이름이나 번호를 입력해주세요.'}
            onChangeText={(e) => onChange(e)}
            value={text}
          />
        </View>
        <TouchableOpacity
          style={styles.iconBox}
          onPress={() => onChange('')}>
          <Image
            style={styles.icoImage}
            source={require('../assets/icons/ico_cancel.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  searchWrap: {
    flexDirection: 'row',
    width: '100%',
    padding: 10,
    borderRadius: 25,
    backgroundColor: 'white',
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  icoImage: {
    width: 20,
    height: 20,
  },
  iconBox: {
  },
  searchBox: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  search: {
    width: '100%',
    height: 22,
  },
});

export default ContactsSearch;
