/**
 * @format
 */

import {AppRegistry, View, Text} from 'react-native';
import React from 'react';
import {name as appName} from './app.json';

const App = () => {
  return (
    <View>
      <Text>OI</Text>
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);
