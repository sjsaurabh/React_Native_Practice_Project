import { StyleSheet, Text, View, Animated } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-web";
import { Button } from "react-native";

export default function AnimatedOne() {
  const value=useState(new Animated.ValueXY({x:0,y:0}))[0]
  function MoveBall(){
    Animated.timing(value,{
      toValue:{x:1,y:600},
      duration:1000,
      useNativeDriver:false
    }).start()
  }
  return (
    <View style={{alignItems:'center',
    justifyContent:"center"}}>
      <Animated.View style={value.getLayout()}>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            borderRadius: 100 / 2,
            
          }}
          
        >
        
        <Text onPress={MoveBall} style={{textAlign:"center",marginTop:40}}>press me</Text> 
       
        </View>
      </Animated.View>
      
     <Button title='hhdhjf' onPress={MoveBall}/>
    
      
    </View>
  );
}

const styles = StyleSheet.create({});
