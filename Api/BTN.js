import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BTN({title,Press}) {
  return (
   <TouchableOpacity
    style={{
       
        backgroundColor:'black',
        borderRadius:10,
        alignItems:'center',
        width:300,
        paddingVertical:10,
        marginVertical:20

    }}
    onPress={Press}
   >
    <Text style={{fontSize:28,color:'white'}}>{title}</Text>
   </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})