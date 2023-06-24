import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import TopTabNavigtor from './TopTabNaviGator/TopTabNavigtor'
import App1 from './TopTabNaviGator/TopTabNavigtor'
import Header_Image_background from './TopTabNaviGator/Header_Image'
import DummyComponent from './TopTabNaviGator/DummyComponent'



export default function App() {
  return (
    <View style={{flex:1,}}>
      <Header_Image_background title='Sanju' navigationGoBack={true}/>
      <View style={{
        flex:1,
      //   borderTopRightRadius:22,
      //   borderTopLeftRadius:22,
      //   marginTop:-22,
      //  backgroundColor:"#FFFF"
      }}>
      <TopTabNavigtor/>
      </View>
      </View>
  )
}

const styles = StyleSheet.create({})