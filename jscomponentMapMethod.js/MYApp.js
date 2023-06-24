import React from 'react';
import {Text, View,Image} from 'react-native';

const MYApp = ({text1,text2,imageSource,imageStyle,textSTYLEOne ,textSTYLETwo,Viewstyle}) => {
  return (
    <View
      style={Viewstyle}>
      <Text>Try editing me! 🎉</Text>
      <Image source={imageSource} style={[ imageStyle]} />
       <Text style={textSTYLEOne}> {text1} </Text>
       <Text style={textSTYLETwo}> {text2}</Text>
    </View>
  );
};

export default MYApp;