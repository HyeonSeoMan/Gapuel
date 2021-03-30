import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

const HistoryList = ({Histories, isEdit, removeHistoryProp, toggleEdit}) => {
  return (
    <View style={styles.container}>
      {isEdit && (
        <TouchableOpacity
          style={styles.toggleWrap}
          onPress={() => toggleEdit()}>
          <Image
            style={styles.controlIco}
            source={require('../assets/icons/ico_setting.png')}
          />
          <Text style={styles.toggleWrapText}>닫기</Text>
        </TouchableOpacity>
      )}
      {Histories.map((history, idx) => (
        <View key={'history' + idx}>
          <View style={styles.historyWrap}>
            <View style={styles.leftWrap}>
              <Text style={styles.titleText}>{history.title}</Text>
            </View>
            <View style={styles.rightWrap}>
              <Text style={styles.amountText}>{history.amount}</Text>
              <Text style={styles.dateText}>{history.date}</Text>
            </View>
            {isEdit && (
              <TouchableOpacity
                style={styles.cancelIcoWrap}
                onPress={() => removeHistoryProp(history)}>
                <Image
                  style={styles.cancelIco}
                  source={require('../assets/icons/ico_cancel.png')}
                />
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.hr} />
        </View>
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
  toggleWrap: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 15,
    marginBottom: 10,
  },
  controlIco: {
    width: 15,
    height: 15,
  },
  toggleWrapText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 6,
    fontSize: 14,
    fontWeight: '500',
    color: '#8F8F8F',
  },
  cancelIcoWrap: {
    marginLeft: 15,
    marginRight: -15,
    justifyContent: 'center',
  },
  cancelIco: {
    width: 20,
    height: 20,
  },
});

export default HistoryList;
