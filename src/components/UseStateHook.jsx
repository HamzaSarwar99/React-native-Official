import { View, Text, Button } from 'react-native'
import React, { useState } from 'react'
//hooks are basically function that provides us facility so that 
//we can use react native features 
const UseStateHook = () => {
    const [name, setName] = useState('adil');
    const updateName = () => {
        setName('adil khan');
    }
  return (
    <View>
    <Text style={{ fontSize: 30 }}>UseStateHook</Text>
          <Text style={{ fontSize: 30 }}>Name:{name}</Text>
          {/* <Button title='press me' onPress={()=>setName('hamza')}/> */}
          {/* the second way to do it is make a separate function
          and this is recommended */}
          <Button title='press me' onPress={updateName } />

          
    </View>
  )
}

export default UseStateHook