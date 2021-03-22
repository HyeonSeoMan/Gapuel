import React from 'react';
import {createStore} from 'redux';
import reducers from './src/store/reducers';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import ContactList from './src/screens/ContactList';
import Detail from './src/screens/Detail';
import ModalScreen from './src/screens/ModalScreen';

const MainStack = createStackNavigator(
  {
    // Home: {screen: Home},
    ContactList: {screen: ContactList},
    Detail: {screen: Detail},
  },
  {},
);
const RootStack = createStackNavigator(
  {
    Main: {screen: MainStack},
    MyModal: {screen: ModalScreen},
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(RootStack);
const store = createStore(reducers);

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer
        ref={(nav) => {
          this.navigator = nav;
        }}
      />
    </Provider>
  );
};

export default App;
