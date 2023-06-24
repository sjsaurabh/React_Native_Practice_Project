import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'
import { Picker } from "@react-native-picker/picker";
export default function DropDownComponent() {
  const [selectedValue, setSelectedValue] = useState("");
  return (
    <View style={{
                  width:'88%',
                  height:65,
                  borderRadius: 6,
                borderWidth: 1,
                 alignSelf: "center",
                marginTop: 289,
                }}>
    <Picker
                selectedValue={selectedValue}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                style={{ color: 'red'}}
              >
                <Picker.Item label="select type " value="select" />
                <Picker.Item label="Option 1" value="option1" />
                <Picker.Item label="Option 2" value="option2" />
              </Picker>
    </View>
  )
}

const styles = StyleSheet.create({})
// import React, {  useState } from "react";
// import { Text, View, StyleSheet } from 'react-native';
// import { Picker } from "@react-native-picker/picker";
// const [selectedValue, setSelectedValue] = useState("");
// export default function App() {
//   return (
//     <View style={styles.container}>
     
//       <Picker
//             selectedValue={selectedValue}
//             onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
//             style={{ color: 'red'}}
//           >
//             <Picker.Item label="select type " value="select" />
//             <Picker.Item label="Option 1" value="option1" />
//             <Picker.Item label="Option 2" value="option2" />
//           </Picker>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
    
//     width:"100%",
//     height:45,
//       borderRadius: 6,
//       borderWidth: 1,
//       alignSelf: "center",
//       marginTop: 20,
  
    
//   },
 
// });
