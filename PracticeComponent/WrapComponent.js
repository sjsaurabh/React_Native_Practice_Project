import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function WrapComponent() {
  return (
    <View  style={{marginTop:50,backgroundColor:'#fff',width:"100%",height:"100%",
flexDirection:'row',
flexWrap:"wrap",
alignItems:'center',
justifyContent:'center'

}}>
      
      <View style={{backgroundColor:'red',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
      <View style={{backgroundColor:'pink',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
      <View style={{backgroundColor:'yellow',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
      <View style={{backgroundColor:'blue',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
      <View style={{backgroundColor:'#ff9f1c',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
      <View style={{backgroundColor:'skyblue',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
      <View style={{backgroundColor:'purple',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
      <View style={{backgroundColor:'#dc2f02',width:100,height:100,borderWidth:1,margin:10}}>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})