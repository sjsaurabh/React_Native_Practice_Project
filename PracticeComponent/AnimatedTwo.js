import { Animated, Dimensions, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const heightDimension =Dimensions.get('window').height
const widthDimension =Dimensions.get('window').width

export default function AnimatedTwo() {
    const leftValue=useState(new Animated.Value(0))[0]
    console.log(heightDimension,widthDimension);
  return (
    <View style={{flex:1}}>
      <Text>AnimatedTwo</Text>
       <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
         <Animated.View
           style={[
            {
                width:widthDimension-310,
                height:heightDimension-580,
                marginLeft:1,
                borderRadius:widthDimension/2,
                backgroundColor:'red'
            },leftValue
           ]}
         >
         
         
         </Animated.View>
         <TouchableOpacity>
         <Text>please Move  Me</Text>
         </TouchableOpacity>
       </View>
       <Switch
       value={true}
       thumbColor={'yellow'}
       trackColor={{false:'red',true:'pink'}}

       >
       </Switch>
    </View>
  )
}

const styles = StyleSheet.create({})