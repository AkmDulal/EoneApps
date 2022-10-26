/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import 'react-native-gesture-handler';
import {name as appName} from './app.json';
export default function Main() {
    return (
        <App />
    );
  }
AppRegistry.registerComponent(appName, () => App);
