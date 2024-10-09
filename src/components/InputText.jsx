import { View, Text, TextInput, Button } from 'react-native'
import React, { useState } from 'react'

const InputText = () => {
    const [username, setUsername] = useState('');
  return (
    <View>
          <Text style={{ fontSize: 30 }}>InputText</Text>
          <Text style={{ fontSize: 30 }}>username:{ username }</Text>
          <TextInput style={{
              fontSize: 20, borderWidth: 2,
              borderColor: 'green', margin: 4
          }}value={username} placeholder='enter your username'
              onChangeText={(data) => setUsername(data)} />
          <Button title='clear' onPress={()=>setUsername('')}/>
    </View>
  )
}

export default InputText