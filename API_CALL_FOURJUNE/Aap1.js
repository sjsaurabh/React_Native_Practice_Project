import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Aap1() {
    const [userData,setUserData]=useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then((res)=>{
            console.log(res);
            setUserData(res.data)
        })
    },[])
  return ( 
    <View>
      <Text>Aap1</Text>
      {
        userData.map((data)=>{
            return(
                <View key={data.id}>
              <Text>  {
                    data.name
                }
                </Text>
                </View>
            )
        })
      }
    </View>
  )
}

const styles = StyleSheet.create({})