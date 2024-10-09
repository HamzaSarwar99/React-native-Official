import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
import Child from './Child'

const Props = () => {
    const [count, setCount] = useState(0);
    const [item, setItem] = useState(0);
    const updateNumber = () => {
        setCount(count + 1);
    }
    const decounter = () => {
        setItem(item - 1);
    }
  return (
    <View>
          <Text style={{ fontSize: 30 }}>Props </Text>
          <Button title='counter' onPress={updateNumber} />
          <Button title='decounter' onPress={decounter}/>
          
          <Child data={ count } item ={item}  />
    </View>
  )
}

export default Props