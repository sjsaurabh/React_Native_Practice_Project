import React from "react";


 import { View, Text, StyleSheet } from "react-native"; 
 import {Dimensions} from 'react-native';
 
 let screenHeight = Math.round(Dimensions.get('window').height)
  let screenWidth = Dimensions.get('window').width
   const Pay = () => {
     return ( <View style={styles.container}> 
        <View style={styles.container1}> 
        <Text style={styles.text}> Pay Rent </Text>
         <Text style={styles.text1}> Via </Text> 
         </View> 
         <Text style={styles.text3}>Credit Card</Text>
          <Text style={styles.text4}>Enjoy awesome Rewards{'\n'}every Month </Text>
         
           </View> ); 
    }
          const styles = StyleSheet.create({ container:
         { height: screenHeight/4, width: screenWidth-234,
          backgroundColor: '#ffffff',
           borderWidth: 1,
            borderColor: '#0000001A',
             marginTop: 37,
              marginLeft: 27, borderRadius: 15 },
               container1: { flexDirection: 'row', },
                text: { fontSize: 19, fontWeight: '600', paddingLeft: 14, paddingTop: 9, color: '#000000' }, text1: { fontSize: 16, fontWeight: '400', paddingTop: 12, paddingLeft: 3, paddingRight: 30, color: '#000000' }, text2: { fontSize: 16, fontWeight: '400', color: '#000000', paddingLeft: 14, paddingRight: 50 }, text3: { fontSize: 16, fontWeight: '400', color: '#000000', paddingLeft: 14, paddingRight: 50 }, text4: { fontSize: 10, fontWeight: '400', color: '#000000', paddingLeft: 14, paddingRight: 17, opacity: 0.5 } })
                export default Pay;