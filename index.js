/**
 * @format
 */
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//import Routes from './src/Routes';
import MainPage from './src/Pages/MainPage';

AppRegistry.registerComponent(appName, () => MainPage);
