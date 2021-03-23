import React from 'react';
import {StyleSheet, Text, Button, View, ScrollView} from 'react-native';

const DebtList = ({navigation, debt}) => {
  const moneyParam =
    navigation.getParam('moneyParam') === undefined
      ? 'Send'
      : navigation.getParam('moneyParam');

  return (
    <ScrollView style={styles.container}>
      <View>
        {debt.map((item, idx) => (
          <View key={'debt' + idx} style={styles.debtWrap}>
            <View style={styles.leftWrap}>
              <View style={styles.titleInfo}>
                <Text>{item.title}</Text>
                <Text>({item.phone})</Text>
              </View>
              <View>
                <Text>{item.total}원</Text>
              </View>
            </View>
            <View style={styles.rightWrap}>
              <Button
                title={'수정'}
                onPress={() => {
                  navigation.navigate('Detail', {
                    moneyParam: moneyParam,
                    phone: item.phone,
                  });
                }}
              />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#F6F6F6',
    paddingTop: '15%',
    paddingBottom: '15%',
  },
  debtWrap: {
    margin: 10,
    padding: 20,
    backgroundColor: 'gray',
    borderRadius: 20,
    flexDirection: 'row',
  },
  titleInfo: {
    flexDirection: 'row',
  },
  rightWrap: {
    marginLeft: 'auto',
  },
});

export default DebtList;
