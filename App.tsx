import React from 'react';
import { View, Text, Button } from 'react-native';
import First from './src/components/First';
import JSX from './src/components/JSX';
const App = () => {
  return (
    <View>
      <Text style={{fontSize: 30}}>I am learning react native</Text>
      <Text style={{fontSize: 30}}>My name is hamza</Text>
      <Button title="press here" />
      <First />
      <JSX/>
    </View>
  );
};

export default App;
