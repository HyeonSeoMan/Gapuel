/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import App2 from './App2';
import Home from './Home';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Home);
