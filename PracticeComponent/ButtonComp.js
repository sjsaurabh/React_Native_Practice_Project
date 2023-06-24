import { StyleSheet, Text, View,Button, TouchableOpacity} from 'react-native'
import React from 'react'

export default function ButtonComp({
    title,parentStyle,TextStyle
}) {
  return (
    <View style={parentStyle}>
    <TouchableOpacity >
    <Text style={TextStyle}>{title}</Text>
    </TouchableOpacity> 
    </View>
  )
}

const styles = StyleSheet.create({

  // <ButtonComp
  // title='neha' 

  // parentStyle={{marginTop:100,borderWidth:1,elevation:9,width:"25%",height:30,Colors:'red'}}
  // TextStyle={{color:'red'}}
  // />
})