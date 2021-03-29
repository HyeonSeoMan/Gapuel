import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HistoryList = ({Histories}) => {
  return (
    <View style={styles.container}>
      {Histories.map((history, idx) => (
        <>
          <View key={'history' + idx} style={styles.historyWrap}>
            <View style={styles.leftWrap}>
              <Text style={styles.titleText}>{history.title}</Text>
            </View>
            <View style={styles.rightWrap}>
              <Text style={styles.amountText}>{history.amount}</Text>
              <Text style={styles.dateText}>{history.date}</Text>
            </View>
          </View>
          <View style={styles.hr} />
        </>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    minHeight: '100%',
    padding: 12,
    borderRadius: 3,
    backgroundColor: 'white',
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  historyWrap: {
    margin: 20,
    marginTop: 8,
    marginBottom: 8,
    padding: 8,
    flexDirection: 'row',
  },
  leftWrap: {

  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#6F708F',
  },
  rightWrap: {
    marginLeft: 'auto',
  },
  amountText: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: '600',
    color: '#6F708F',
    marginBottom: 6,
  },
  dateText: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
    color: '#A8A9B8',
  },
  hr: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 1,
    width: '90%',
    opacity: 0.2,
    backgroundColor: '#909090',
  },
});

export default HistoryList;
