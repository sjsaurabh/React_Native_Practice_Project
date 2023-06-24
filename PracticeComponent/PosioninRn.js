import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PosioninRn() {
  return (
    <View style={{
        marginTop:40,
        flex:1,
        backgroundColor:'grey'
    }}>
      <Text>sedrftgyhuj</Text>    
      <View
       style={{
       height:200,
       width:100, 
       backgroundColor:'blue',
       position:'absolute',
       top:20,
       left:80
       }}
      />
      <View
       style={{
       height:200,
       width:100, 
       backgroundColor:'black',
       position:'absolute',
       top:80,
       left:100
       }}
      />
      <View
       style={{
       height:200,
       width:100, 
       backgroundColor:'pink',
       position:'absolute',
       top:160,
       left:120
       }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})