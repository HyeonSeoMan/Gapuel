import React from 'react';
// import {TouchableOpacity, StyleSheet, TextInput, Text, View, Button} from 'react-native';
import {createStore} from 'redux';
import reducers from './store/reducers';
import {Provider} from 'react-redux';
import CounterListContainer from './containers/CounterListContainer';

const store = createStore(reducers);
const App4 = () => {
  return (
    <Provider store={store}>
      <CounterListContainer />
    </Provider>
  );
};

export default App4;
