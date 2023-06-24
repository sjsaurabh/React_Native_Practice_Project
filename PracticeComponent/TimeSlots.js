import React from 'react';
import { View, Text, StyleSheet, } from 'react-native';


export default function TimeSlots() {
      const object = {
        items: [
                 "10:00 AM",
                 "11:00 AM",
                 "12:00 AM",
                 "01:00 PM",
                 "02:00 PM",
                 "03:00 PM",
                 "04:00 PM",
                 "05:00 PM",
                 "06:00 PM",
                 "07:00 PM",
                 "08:00 PM",
                 "09:00 PM",
               ]
      };
    
      const renderItems = () => {
        return object.items.map((item, index) => {
          
          const itemOne = index ==0 ? styles.blackItem1 : null;
      
          const itemSix = index === 5 ? styles.blackItem : null;
          return (
            <View key={index} style={[styles.itemContainer, itemSix,itemOne,]}>
            <Text style={{
              paddingHorizontal:23,
              paddingVertical:10, 
              margin:2, 
              borderWidth:.5,
              borderColor:"#B6B6B6",
              borderRadius:3,
              textAlign:"center",
              color:"#5B5A5E",
              
            }}>
                  {item}
            </Text>
            </View>
          );
        });
      };
    
      return (
        <View style={styles.container}>
          <View style={styles.row}>
            {renderItems()}
          </View>
        </View>
      );
    };
    
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
      },
      row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        width:420,
        // padding:20,
        // margin:15
      },
      itemContainer: {
        width: '30%',
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
       
      },
      blackItem: {
              
              backgroundColor: 'black',
               
      },
      blackItem1:{
        backgroundColor: '#F3F3F3',
      }
  });