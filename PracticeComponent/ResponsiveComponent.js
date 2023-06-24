import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
  responsiveWidth,
  responsiveFontSize
  } from "react-native-responsive-dimensions";
 
export default function ResponsiveComponent() {
  return (
    <View style={styles.container}>
    <Image
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwopAtlL4IiRbSbaWMTiDgknGKN_ADmbTN_OxHul7FXYsx4jM1Y85XymDB_3IhRoLuLL7nBIa1KOY&usqp=CAU&ec=48665699'
    }}
    style={{ 
        height: responsiveHeight(20), 
        width: responsiveWidth(30), 
    }}
      />
      <Text style={styles.sampleText}>i standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially</Text>
      <Pressable>
      <Text>SANJU</Text>
      </Pressable>
    </View>
  )
}


 
const styles = StyleSheet.create({
  container: {
    // flex:1,
    marginTop:40,
    // marginLeft:40,
    borderWidth:1,
    height: responsiveHeight(80), 
    width: responsiveWidth(90), 
    // height:"50%",
    // width:"80%",
    alignSelf:'center',
    alignItems:'center',
    justifyContent:"center"
    

    
  },
  sampleText: {
    fontSize:responsiveFontSize(2), // 2% of total screen size
  }
});