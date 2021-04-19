/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {Text, View} from 'react-native';


//import HomeScreen from './src/components/pages/HomeScreen';
import InputData from './src/components/pages/InputData/inputData';

const App = () => {
    return (
      <View style={{flex: 1}}>
        <InputData/>
      </View>
    )
};


export default App;
