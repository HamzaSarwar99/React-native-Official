import { View, Text, Button } from 'react-native'
import React from 'react'

const Onpress = () => {
    let name = 'shoaib'
    const getName = () => {
        name = 'adil'
        console.log(`my name is ${name}`)
    }
  return (
    <View>
          <Text style={{ fontSize: 30 }}>{name}</Text>
          {/* /*without arguments we will use this method*/ }
          {/* <Button title='press me' onPress={getName}/> */}
          {/* /* if we have to pass some argument to the functions
           than we will use this method */ }
          <Button title='press me' onPress={getName}/>

    </View>
  )
}

export default Onpress