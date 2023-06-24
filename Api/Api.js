import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import BTN from './BTN'
import axios from 'axios'

export default function Apione() {
   const [data ,setData]=useState([])
   const baseUrl='https://jsonplaceholder.typicode.com/posts'
  console.log("asdfgh");
   const getApi=()=>{
    axios({
        method:'GET',
        url:`${baseUrl}/posts`
    })
    .then(res=>console.log(res.data))
    .then(res=>setData(res.data))
    .catch(err=> console.log(err))
   }
  return (
    <View>
      <Text>Api</Text>
      <FlatList
      data={data}
      renderItem={({item})=>{
        return(
          <Text>{item.id}</Text>
        )
      }}
      />
      <BTN title='GET' Press={getApi}/>
    </View>
  )
}

const styles = StyleSheet.create({})