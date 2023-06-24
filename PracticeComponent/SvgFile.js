import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Svg_Folder/Home'


export default function SvgFile() {
  return (
    <View>
    <Text>gjrjuksvfjk</Text>
    <Home style={{width:1000,height:1000}}/>
    <Image
    source={require('../assets/Image_3.png')}
    style={{width:100,height:100}}
    />
    <Image
    source={require('../assets/Image_2.png')}
    style={{width:100,height:100}}
    />
    <View>
    
    </View>
    </View>
  )
}

const styles = StyleSheet.create({})