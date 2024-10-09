import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import styles from '../styling/styles'
const Styling = () => {
  return (
    <View>
    <Text style={{ fontSize: 30, backgroundColor: 'crimson', color: 'white' }}>Inline Styling</Text>
    <Text style={styles.internal}>Internal Styling</Text>
    <Text style={{fontSize:30,backgroundColor:'crimson',color:'white'}}>External Styling</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    internal: {
        fontSize: 30,
        backgroundColor: 'green',
        color: 'white',
        marginVertical: 8,
        padding: 6,
        textAlign: 'center',
        borderColor: 'lightgreen',
        borderWidth:3
    },
})

export default Styling