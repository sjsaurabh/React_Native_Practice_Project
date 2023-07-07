import { Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
const {width,height}=Dimensions.get('window')
export default function App2() {
    const [data,setData]= useState([1,1,1,1,])
    const [curentIndex,setCurrentIndex]= useState(0)
  return (
    <View  style={{
                flex:1,
                justifyContent:'center',
                alignItems:'center',
            }}>
      <Text>App2</Text>
      <View style={{
        height:height/2
      }}>
      <FlatList
            onScroll={e=>{
                const x=e.nativeEvent.contentOffset.x;
                setCurrentIndex((x/width).toFixed(0))
            }}
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            renderItem={({item,index})=>{
              return(
                  <View style={{
                      width:width,
                      height:height/2,
                      justifyContent:'center',
                      alignItems:'center',
                    
                  }}>
                 <TouchableOpacity
                 disabled={true}
                 style={{
                  width:'90%',
                  height:"90%",
                  backgroundColor:'#FFFF00',
                  borderRadius:10,
              }}
                 >
                 
                 </TouchableOpacity>
                  </View>
              )
             
            }}
            />
            </View>
            <View style={{
                        flexDirection:'row',
                        width:width,
                        justifyContent:'center',
                        alignItems:'center',
                      }}>
                      {
                        data.map((item,index)=>{
                            return(
                             <View style={{
                                width:8,height:8,borderRadius:4,
                                backgroundColor:curentIndex==index?'black':'red',
                                marginLeft:5
                             }}>
                             </View>   
                            )
                        })
                      }
                      </View>
    </View>
  )
}


// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import { FlatList } from 'react-native'
// import { TouchableOpacity } from 'react-native'
// import { Dimensions } from 'react-native'
// import { useState } from 'react'
// const {height,width}=Dimensions.get('window')
// export default function App2() {
//     const [data,setData]= useState([1,1,1,1,])
//   return (
//     <View style={{
//         flex:1,
//         justifyContent:'center',
//         alignItems:'center',
//     }}>
     
//       <FlatList
//       data={data}
//       horizontal
//       pagingEnabled
//       showsHorizontalScrollIndicator={false}
//       renderItem={({item,index})=>{
//         return(
//             <View style={{
//                 width:width,
//                 height:height/2,
//                 justifyContent:'center',
//                 alignItems:'center',
              
//             }}>
//            <TouchableOpacity
//            disabled={true}
//            style={{
//             width:'90%',
//             height:"90%",
//             backgroundColor:'#FFFF00',
//             borderRadius:10,
//         }}
//            >
           
//            </TouchableOpacity>
//             </View>
//         )
       
//       }}
//       />
//       <View style={{
//         flexDirection:'row',
//         width:width,
//         justifyContent:'center',
//         alignItems:'center',
//       }}>
//       {
//         data.map((item,index)=>{
//             return(
//              <View style={{
//                 width:8,height:8,borderRadius:4,
//                 backgroundColor:'red',marginLeft:5
//              }}>
//              </View>   
//             )
//         })
//       }
//       </View>
//     </View>
//   )
// }

