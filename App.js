import React, {useEffect} from 'react';
import {createStore} from 'redux';
import reducers from './src/store/reducers';
import {Provider} from 'react-redux';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import AddDebtScreen from './src/screens/AddDebtScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import LocalNotification2 from './src//Util/LocalNotification2';

const MainStack = createStackNavigator(
  {
    Home: {screen: Home},
    Detail: {screen: Detail},
    AddDebtScreen: {screen: AddDebtScreen},
    ContactsScreen: {screen: ContactsScreen},
  },
  {},
);
const RootStack = createStackNavigator(
  {
    Main: {screen: MainStack},
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);
const AppContainer = createAppContainer(RootStack);
const store = createStore(reducers);

const App = () => {
  useEffect(() => {
    LocalNotification2.register();
    return () => {
      LocalNotification2.unregister();
    };
  }, []);
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
