import { View, Text } from 'react-native'
import React from 'react'

const JSX = () => {
    let name = 'hamza sarwar'
    const getAge = () => {
        return 25
    }
  return (
    <View>
    <Text style={{ fontSize: 30 }}>Jsx stand for java script syntax extension</Text>
          <Text style={{ fontSize: 30 }}>My name is { name }</Text>
          <Text style={{ fontSize: 30 }}>My age is {getAge() }</Text>
          
    </View>
  )
}

export default JSX