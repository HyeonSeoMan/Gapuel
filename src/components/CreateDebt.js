import React from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';
import AddHistory from './AddHistory';

const CreateDebt = ({info, navigation, add}) => {
  const addHistoryProp = (e) => {
    const payload = {
      phone: info.phone,
      title: info.name,
      hisTitle: e.title,
      date: e.date,
      amount: e.amount,
    };
    add(payload);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.createBox}>
        <View>
          <View style={styles.titleWrap}>
            <Image
              style={styles.icoStyle}
              source={require('../assets/icons/ico_contact.png')}
            />
            <Text style={styles.infoTitle}>Contact Info</Text>
          </View>
          <Text style={styles.infoDetail}>
            해당 번호를 기반으로 부채 목록에 추가됩니다. 번호 데이터는 받을 돈과 보낼 돈에 각각 하나씩 만 생성할 수 있습니다.
          </Text>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputStyle}
              placeholder={'Phone'}
              value={info.phone}
            />
          </View>
          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputStyle}
              placeholder={'Name'}
              value={info.name}
            />
          </View>
        </View>
        <View style={styles.hr} />
        <View>
          <View style={styles.titleWrap}>
            <Image
              style={styles.icoStyle}
              source={require('../assets/icons/ico_history.png')}
            />
            <Text style={styles.infoTitle}>Add History</Text>
          </View>
          <Text style={styles.infoDetail}>
            해당 부채의 세부 내용을 작성해 주세요. 지금 작성하는 내용이 첫 로그로 기록됩니다.
          </Text>
          <AddHistory addHistoryProp={(payload) => addHistoryProp(payload)} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  createBox: {
    backgroundColor: 'white',
    width: '100%',
    minHeight: '95%',
    padding: '13%',
    borderRadius: 2,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  titleWrap: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  icoStyle: {
    width: 26,
    height: 26,
  },
  infoTitle: {
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
    fontSize: 16,
    fontWeight: '600',
  },
  infoDetail: {
    fontSize: 12,
    fontWeight: '400',
    color: '#657A8F98',
    marginBottom: 15,
  },
  inputBox: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: '#BDBEC080',
    borderRadius: 4,
    marginBottom: 16,
    padding: 3,
  },
  inputStyle: {
    width: '100%',
    height: 35,
    marginLeft: 10,
    fontSize: 15,
    fontWeight: '500',
  },
  hr: {
    margin: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 2,
    width: '100%',
    opacity: 0.2,
    backgroundColor: '#909090',
  },
});
export default CreateDebt;
