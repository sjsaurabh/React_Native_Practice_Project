import { Dimensions, StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import TopTabNavigation from '../PracticeComponent/TopTabNavigation'

let screenHeight = Math.round(Dimensions.get('window').height)

let screenWidth = Dimensions.get('window').width

export default function DimensionTwo() {
  return (
    <ScrollView style={{marginTop:50}}>
    <TopTabNavigation/>
    </ScrollView>

    
  )
}

const styles = StyleSheet.create({})