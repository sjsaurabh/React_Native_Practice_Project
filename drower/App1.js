import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Feed from './Feed';
import Article from './Article';

const Drawer = createDrawerNavigator();


export default function App1() {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Feed" component={Feed} />
    <Drawer.Screen name="Article" component={Article} />
  </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})