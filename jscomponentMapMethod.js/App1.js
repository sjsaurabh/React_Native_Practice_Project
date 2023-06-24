import React from 'react';
import {Text, View} from 'react-native';
import MYApp from './MYApp';
import CustomComponent from './Custom component';



const data = [
  { id: 1, name1: <MYApp
   
    text1='sanju'
    textSTYLEOne={{fontSize:40}}
    text2='lovi'
    textSTYLETwo={{fontSize:40}}
    imageSource={require('../assets/Home.png')}
    imageStyle={{ width: 100, height: 100 }}
   
    /> },
  { id: 2, name1: <CustomComponent /> },
  { id: 3, name1: <MYApp text1='exalogic'/>},
];


export default function App1() {
  return (
    <View style={{
        justifyContent:'center',
        alignItems:'center',
        marginTop:120,
       
    }}>
      {data.map((item) => {
        return(
         <View key={item.id}>
        
         <Text style={{}}>{item.name1}</Text>
         
         </View> 
        )
      })}
    </View>
  );
}

