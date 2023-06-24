import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import {DocumentPickerOption,DocumentPickerResponse} from 'react-native-document-picker'

export default function DocumentPic() {
  const selectDoc=async()=>{
    const doc =await DocumentPickerResponse.pick()
    console.log(doc);
  }
  return (
    <View>
      <Text style={{color:'black',fontSize:28,textAlign:'center',marginVertical:40}}>documentPic</Text>
      <View style={{marginHorizontal:40}}>
      <Button title='document picker' onPress={selectDoc}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})