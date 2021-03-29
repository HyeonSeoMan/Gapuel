import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import HistoryList from './HistoryList';
import AddHistory from './AddHistory';

const DetailWrap = ({Debt, navigation, remove, addHistory}) => {
  const [isAddOpen, setIsAddOpen] = useState(false);
  const removeDebt = () => {
    Alert.alert('채무 내역 전체가 삭제됩니다', '정말 삭제하시겠습니까?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          remove(Debt.phone);
          navigation.goBack();
        },
      },
    ]);
  };
  const addHistoryProp = (e) => {
    const payload = {
      ...e,
      phone: Debt.phone,
    };
    addHistory(payload);
    setIsAddOpen(!isAddOpen);
  };
  const numComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return (
    <View>
      {Debt && (
        <>
          <View style={styles.detailHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.typeText}>
                {navigation.getParam('moneyParam') === 'Send'
                  ? '보내야 하는 돈'
                  : '받아야 하는 돈'}
              </Text>
              <Text style={styles.totalText}>₩ {numComma(Debt.total)}</Text>
            </View>
            <View style={styles.headerRight}>
              <Text style={[styles.infoTitle, {marginTop: 'auto'}]}>이름</Text>
              <Text style={styles.infoText}>{Debt.title}</Text>
              <Text style={styles.infoTitle}>전화 번호</Text>
              <Text style={styles.infoText}>{Debt.phone}</Text>
            </View>
          </View>
          <View style={styles.controlWrap}>
            <TouchableOpacity
              style={styles.controlBox}
              onPress={() => setIsAddOpen(!isAddOpen)}>
              <Image
                style={styles.controlIco}
                source={require('../assets/icons/ico_write.png')}
              />
              <Text style={styles.controlText}>작성하기</Text>
            </TouchableOpacity>
            <View style={styles.verticalHr} />
            <TouchableOpacity
              style={styles.controlBox}
              onPress={() => console.log('알림 설정하기')}>
              <Image
                style={styles.controlIco}
                source={require('../assets/icons/ico_notice.png')}
              />
              <Text style={styles.controlText}>알림 설정</Text>
            </TouchableOpacity>
            <View style={styles.verticalHr} />
            <TouchableOpacity
              style={styles.controlBox}
              onPress={() => removeDebt()}>
              <Image
                style={styles.controlIco}
                source={require('../assets/icons/ico_delete.png')}
              />
              <Text style={[styles.controlText, {color: '#DD5959'}]}>삭제하기</Text>
            </TouchableOpacity>
            <View style={styles.verticalHr} />
            <TouchableOpacity
              style={styles.controlBox}
              onPress={() => console.log('편집하기')}>
              <Image
                style={styles.controlIco}
                source={require('../assets/icons/ico_setting.png')}
              />
              <Text style={styles.controlText}>편집하기</Text>
            </TouchableOpacity>
          </View>
          {isAddOpen && (
            <View style={styles.AddHistoryWrap}>
              <TouchableOpacity
                style={styles.cancelWrap}
                onPress={() => setIsAddOpen(!isAddOpen)}>
                <Image
                  style={styles.cancelIco}
                  source={require('../assets/icons/ico_cancel.png')}
                />
                <Text style={styles.cancelText}>닫기</Text>
              </TouchableOpacity>
              <AddHistory
                addHistoryProp={(payload) => addHistoryProp(payload)}
              />
            </View>
          )}
          <HistoryList Histories={Debt.history} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  detailHeader: {
    padding: 30,
    paddingTop: 40,
    paddingBottom: 20,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#F9FAFC',
    shadowColor: '#000',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  headerLeft: {
    flex: 2,
  },
  typeText: {
    marginTop: 'auto',
    fontSize: 15,
    fontWeight: '600',
    color: '#A8A9B8',
  },
  totalText: {
    fontSize: 32,
    fontWeight: '400',
    marginTop: 6,
    marginBottom: 6,
  },
  headerRight: {
    flex: 1,
  },
  infoTitle: {
    textAlign: 'right',
    fontSize: 12,
    fontWeight: '500',
    color: '#A8A9B8',
  },
  infoText: {
    textAlign: 'right',
    fontSize: 15,
    fontWeight: '500',
    color: '#535472',
    marginTop: 5,
    marginBottom: 5,
  },
  controlWrap: {
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  controlBox: {
    alignItems: 'center',
    flex: 1,
  },
  controlIco: {
    width: 22,
    height: 22,
    marginBottom: 6,
  },
  controlText: {
    textAlign: 'center',
    fontSize: 13,
    fontWeight: '500',
    color: '#535472',
  },
  AddHistoryWrap: {
    margin: 10,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 2,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  cancelWrap: {
    marginLeft: 'auto',
    marginRight: 4,
    marginBottom: 10,
    flexDirection: 'row',
  },
  cancelIco: {
    width: 16,
    height: 16,
  },
  cancelText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: 6,
    fontSize: 12,
    fontWeight: '500',
    color: '#8F8F8F',
  },
  verticalHr: {
    marginLeft: 2,
    marginRight: 2,
    width: 2,
    height: '100%',
    opacity: 0.3,
    backgroundColor: '#BDBEC0',
  },
});
export default DetailWrap;
