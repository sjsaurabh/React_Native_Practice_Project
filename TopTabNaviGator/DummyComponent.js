import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DummyComponent() {
  return (
    <View style={{
        flex:1,
         borderTopRightRadius:22,
        borderTopLeftRadius:22,
      backgroundColor:'red'
    }}>
      <Text>DummyComponent</Text>
    </View>
  )
}

const styles = StyleSheet.create({})