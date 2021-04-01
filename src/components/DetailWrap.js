import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Alert, Image, Button} from 'react-native';
import HistoryList from './HistoryList';
import AddHistory from './AddHistory';
import AddNoti from './AddNoti';
import LocalNotification from '../Util/LocalNotification';

const DetailWrap = ({Debt, navigation, remove, addHistory, removeHistory}) => {
  const [isControll, setIsControll] = useState(null);
  const removeDebt = () => {
    Alert.alert('상세 페이지 전체가 삭제됩니다', '정말 삭제하시겠습니까?', [
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
    changeControll(isControll);
  };
  const addNotiProp = (e) => {
    console.log(e);
    // LocalNotification.register(e, `${Debt.title}님에게 ${navigation.getParam('mneyParam') === 'Send' ? '받아야 하는 돈' : '보내야 하는 돈'}`)
  };
  const numComma = (num) =>
    num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const removeHistoryProp = (e) => {
    const payload = {
      phone: Debt.phone,
      amount: e.amount,
      createAt: e.createAt,
    };
    removeHistory(payload);
  };
  const changeControll = (e) => {
    if (e === isControll) setIsControll(null);
    else setIsControll(e);
  };
  return (
    <View>
      {Debt && (
        <>
          <View style={styles.detailHeader}>
            <View style={styles.headerLeft}>
              <Text style={styles.typeText}>
                {navigation.getParam('moneyParam') === 'Send'
                  ? '받아야 하는 돈'
                  : '보내야 하는 돈'}
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
              onPress={() => changeControll('add')}>
              <Image
                style={styles.controlIco}
                source={require('../assets/icons/ico_write.png')}
              />
              <Text style={styles.controlText}>작성하기</Text>
            </TouchableOpacity>
            <View style={styles.verticalHr} />
            <TouchableOpacity
              style={styles.controlBox}
              onPress={() => changeControll('noti')}>
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
              onPress={() => changeControll('edit')}>
              <Image
                style={styles.controlIco}
                source={require('../assets/icons/ico_setting.png')}
              />
              <Text style={styles.controlText}>편집하기</Text>
            </TouchableOpacity>
          </View>
          {isControll === 'add' && (
            <View style={styles.AddHistoryWrap}>
              <TouchableOpacity
                style={styles.cancelWrap}
                onPress={() => changeControll(isControll)}>
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
          {isControll === 'noti' && (
            <View style={styles.AddHistoryWrap}>
              <Text>noti</Text>
              <AddNoti addNotiProp={(payload) => addNotiProp(payload)} />
            </View>
          )}
          {Debt.history.length > 0 && (
            <HistoryList
              Histories={Debt.history}
              isControll={isControll}
              toggleEdit={() => changeControll(isControll)}
              removeHistoryProp={(e) => removeHistoryProp(e)}
            />
          )}
          {Debt.history.length === 0 && (
            <View style={styles.noDataWrap}>
              <View style={styles.noDataBox}>
                <Image
                  style={styles.noDataIco}
                  source={require('../assets/icons/ico_noData.png')}
                />
                <Text style={styles.noDataText}>작성된 내역이 없습니다.</Text>
                <Text style={styles.noDataTextSub}>작성하기 버튼을 통해 새로운 내역을 작성해 주세요.</Text>
                <TouchableOpacity
                  style={styles.noDataButton}
                  onPress={() => changeControll('add')}>
                  <Text style={styles.noDataButtonText}>작성하기</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
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
  noDataWrap: {
    margin: 10,
    minHeight: '80%',
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
  noDataBox: {
    marginTop: '20%',
    alignItems: 'center',
  },
  noDataIco: {
    width: 110,
    height: 110,
  },
  noDataText: {
    marginTop: 10,
    marginBottom: 6,
    fontSize: 19,
    fontWeight: '600',
    color: '#7A7878',
  },
  noDataTextSub: {
    fontSize: 14,
    fontWeight: '500',
    color: '#7A7878',
  },
  noDataButton: {
    marginTop: 20,
    backgroundColor: '#7A7878',
    padding: 18,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 6,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  noDataButtonText: {
    fontSize: 18,
    fontWeight: '400',
    color: 'white',
  },
});
export default DetailWrap;
