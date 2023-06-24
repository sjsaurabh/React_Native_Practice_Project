import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function AxiosPost() {
  return (
    <View>
     <TextInput
     placeholder='firstName'
     />
     <TextInput
     placeholder='LastName'
     />
    </View>
  )
}

const styles = StyleSheet.create({})