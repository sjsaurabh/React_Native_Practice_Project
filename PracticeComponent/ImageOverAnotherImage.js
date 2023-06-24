import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ImageOverAnotherImage() {
  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/Image_1.png')}
      style={styles.backgroundImage}
      resizeMode="cover"
    />
    <TouchableOpacity  style={styles.ImageTouchable}>
    <Image
    source={require('../assets/Profile_1.png')}
    style={styles.overlayImage}
    resizeMode="cover"
    />
    </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:150
      },
      backgroundImage: {
       
        width: '100%',
        height: '40%',
      },
      overlayImage: {
        
        width: 50,
        height: 50,
        borderRadius:70,
        
      },
      ImageTouchable:{
        position: 'absolute',
        top: 20,
        left: "80%",
      }
})