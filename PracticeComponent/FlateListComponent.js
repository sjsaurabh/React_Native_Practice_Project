import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'


export default function FlateListComponent() {
    let myData =[
        {id:1,name:'sanju'},
        {id:2,name:'sanju yadav'},
        {id:3,name:'Lovi'},
        {id:4,name:'Bittu'},
        {id:5,name:'sweetu'},
    ]

  return (
    <View>
      <Text>FlateListComponent</Text>
      <FlatList
      data={myData}
      renderItem={({item})=>{
        return(
            <View style={{
                margin:15,padding:15,
                backgroundColor:'red',
                width:100,flexDirection:'row'
            }}>
            <Text style={{textAlign:"center"}}>{item.name}</Text>
            </View>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})