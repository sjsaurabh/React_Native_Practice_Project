import { Dimensions, StyleSheet, Text, View, Animation, Animated, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
let screenHeight = Math.round(Dimensions.get("window").height);
let screenWidth = Math.round(Dimensions.get("window").width);
console.log(screenHeight, screenWidth);
export default function Animationc() {
  const [btnClick, setBtnClick] = useState(false)
  const animation = useRef(new Animated.Value(0)).current;
  const startAnimation = () => {
    Animated.spring(animation, {
      toValue: btnClick ? 0 : 1,
      useNativeDriver: true
    }).start();
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black' }}>
      <Animated.View
        style={[{
          backgroundColor: '#FFF',
          width: screenWidth - 250,
          height: screenHeight / 7.19,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 6,
          marginBottom: 50
        },
        {
          transform: [{
            translateY: animation.interpolate({
              inputRange:[0,1],
              outputRange:[0,-200]
            })
          }]
        }]}></Animated.View>
      <TouchableOpacity
        onPress={() => {
          setBtnClick(!btnClick)
          startAnimation()
        }
        }
        style={{ backgroundColor: '#FFF200', width: screenWidth - 200, height: screenHeight / 9.19, alignItems: 'center', justifyContent: 'center', borderRadius: 6 }}>
        <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff' }}>pressme </Text>
      </TouchableOpacity>


      <Text>Animation</Text>
    </View>
  )
}

const styles = StyleSheet.create({})