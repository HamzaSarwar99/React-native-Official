import React from 'react';
import { View, Text, Button } from 'react-native';
import First from './src/components/First';
import JSX from './src/components/JSX';
import Onpress from './src/components/Onpress';
import UseStateHook from './src/components/UseStateHook';
import Props from './src/components/Props';
import InputText from './src/components/InputText';
import Styling from './src/components/Styling';
const App = () => {
  return (
    <View>
      {/* <Text style={{fontSize: 30}}>I am learning react native</Text> */}
      {/* <Text style={{fontSize: 30}}>My name is hamza</Text> */}
      {/* <Button title="press here" /> */}
      {/* <First /> */}
      {/* <JSX /> */}
      {/* <Onpress /> */}
      {/* <UseStateHook/> */}
      {/* <Props/> */}
      {/* <InputText/> */}
      <Styling/>
    </View>
  );
};

export default App;
