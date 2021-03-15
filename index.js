import {AppRegistry} from 'react-native';
import App from './App';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import Home from './Home';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

AppRegistry.registerComponent(appName, () => App4);