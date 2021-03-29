import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, TextInput, View, Image} from 'react-native';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

const AddHistory = ({addHistoryProp}) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(undefined);
  const [time, setTime] = useState(undefined);
  const [amount, setAmount] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDate, setIsDate] = useState(true);
  const handleInputChange = (text) => {
    if (/^\d+$/.test(text)) {
      setAmount(text);
    } else if (text === '') {
      setAmount(text);
    }
  };
  const dateFormat = () => {
    if (date) {
      const y = date.getFullYear();
      const m = ('00' + (date.getMonth() + 1)).slice(-2);
      const d = ('00' + date.getDate()).slice(-2);
      return `${y}-${m}-${d}`;
    }
    return date;
  };
  const timeFormat = () => {
    if (time) {
      const h = ('00' + time.getHours()).slice(-2);
      const mi = ('00' + time.getMinutes()).slice(-2);
      return `${h}:${mi}`;
    }
    return time;
  };
  const openIsDate = (e) => {
    if (e) {
      if (date === undefined) setDate(new Date());
    } else {
      if (time === undefined) setTime(new Date());
    }
    setIsDate(e);
  };
  const submit = () => {
    if (title === '') {
      alert('제목을 작성해 주세요.');
    } else if (date === undefined) {
      alert('날짜를 선택해 주세요.');
    } else if (time === undefined) {
      alert('시간을 선택해 주세요.');
    } else if (amount === '') {
      alert('비용을 작성해 주세요.');
    } else {
      const payload = {
        title: title,
        date: `${dateFormat()}, ${timeFormat()}`,
        amount: Number(amount),
      };
      addHistoryProp(payload);
    }
  };

  return (
    <View>
      <View>
        <View style={styles.inputBox}>
          <TextInput
            style={styles.inputStyle}
            placeholder={'Title'}
            onChangeText={(text) => setTitle(text)}
          />
        </View>
        <View style={[styles.inputBox, {height: 40}]}>
          <TouchableOpacity
            style={styles.dateTextWrap}
            onPress={() => {
              openIsDate(true);
              setModalVisible(!isModalVisible);
            }}>
            <Image
              style={styles.icoDate}
              source={require('../assets/icons/ico_date.png')}
            />
            <Text style={styles.dateText}>
              {date !== undefined && dateFormat()}
              {date === undefined && '날짜 선택'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.dateTextWrap}
            onPress={() => {
              openIsDate(false);
              setModalVisible(!isModalVisible);
            }}>
            <Image
              style={styles.icoDate}
              source={require('../assets/icons/ico_time.png')}
            />
            <Text style={styles.dateText}>
              {time !== undefined && timeFormat()}
              {time === undefined && '시간 선택'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.inputBox}>
          <TextInput
            numeric
            style={styles.inputStyle}
            keyboardType={'numeric'}
            placeholder={'Amount'}
            onChangeText={(text) => handleInputChange(text)}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={() => submit()}>
          <Text style={styles.submitText}>작성하기</Text>
          <Image
            style={styles.submitIco}
            source={require('../assets/icons/ico_submit.png')}
          />
        </TouchableOpacity>
      </View>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modalBox}>
          <View style={styles.typeSelectWrap}>
            <TouchableOpacity
              style={styles.dateTextWrap}
              onPress={() => openIsDate(true)}>
              <Image
                style={styles.icoDate}
                source={require('../assets/icons/ico_date.png')}
              />
              <Text style={[styles.dateText, isDate && {color: 'black'}]}>날짜 선택</Text>
            </TouchableOpacity>
            <View style={styles.verticalHr} />
            <TouchableOpacity
              style={styles.dateTextWrap}
              onPress={() => openIsDate(false)}>
              <Image
                style={styles.icoDate}
                source={require('../assets/icons/ico_time.png')}
              />
              <Text style={[styles.dateText, !isDate && {color: 'black'}]}>시간 선택</Text>
            </TouchableOpacity>
          </View>
          {isDate && (
            <View style={styles.datePickerWrap}>
              <DatePicker
                locale="ko"
                mode="date"
                date={date}
                onDateChange={setDate}
              />
            </View>
          )}
          {!isDate && (
            <View style={styles.datePickerWrap}>
              <DatePicker
                locale="ko"
                mode="time"
                date={time}
                onDateChange={setTime}
              />
            </View>
          )}
          <TouchableOpacity
            style={styles.modalClose}
            onPress={() => setModalVisible(!isModalVisible)}>
            <Text style={styles.modalCloseText}>닫기</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
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
  dateTextWrap: {
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  icoDate: {
    width: 18,
    height: 18,
  },
  dateText: {
    minWidth: 80,
    marginLeft: 10,
    color: '#B8B8D8',
    fontSize: 14,
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
  submitButton: {
    flexDirection: 'row',
    margin: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#68B35A',
    padding: 18,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 35,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  submitText: {
    marginTop: 'auto',
    marginBottom: 'auto',
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginRight: 15,
  },
  submitIco: {
    width: 20,
    height: 20,
  },
  modalBox: {
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: 'white',
    width: '80%',
    minHeight: '50%',
    borderRadius: 4,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  typeSelectWrap: {
    flexDirection: 'row',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 12,
    borderWidth: 2,
    borderColor: '#BDBEC0',
    borderRadius: 8,
    margin: 10,
  },
  verticalHr: {
    width: 2,
    height: '100%',
    opacity: 0.9,
    backgroundColor: '#BDBEC0',
  },
  datePickerWrap: {
    marginTop: 30,
  },
  modalClose: {
    margin: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#BDBEC0',
    padding: 18,
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 35,
    shadowColor: 'rgb(50, 50, 50)',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      height: -1,
      width: 0,
    },
  },
  modalCloseText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddHistory;
