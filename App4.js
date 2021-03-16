import React from 'react';
import {createStore} from 'redux';
import reducers from './store/reducers';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SendMoney from './screens/SendMoney';
import ReceiveMoney from './screens/ReceiveMoney';
import ModalScreen from './screens/ModalScreen';
import CounterListContainer from './containers/CounterListContainer';

const MainStack = createStackNavigator(
  {
    SendMoney: {screen: SendMoney},
    ReceiveMoney: {screen: ReceiveMoney},
  },
  {},
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    MyModal: {
      screen: ModalScreen,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

const store = createStore(reducers);

const App4 = () => {
  return (
    <Provider store={store}>
      {/* <CounterListContainer /> */}
      <AppContainer
        ref={(nav) => {
          this.navigator = nav;
        }}
      />
    </Provider>
  );
};

export default App4;
