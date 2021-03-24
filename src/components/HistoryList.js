import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const HistoryList = ({Histories}) => {
  return (
    <ScrollView style={styles.container}>
      <View>
        {Histories.map((history, idx) => (
          <View key={'history' + idx} style={styles.historyWrap}>
            <View style={styles.leftWrap}>
              <Text>{history.title}</Text>
              <Text>{history.date}</Text>
              <Text>{history.amount}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#F6F6F6',
    paddingTop: '15%',
    paddingBottom: '15%',
  },
  historyWrap: {
    backgroundColor: 'gray',
    margin: 20,
    padding: 20,
  },
});

export default HistoryList;
