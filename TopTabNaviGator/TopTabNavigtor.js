import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyThirdScreen from './MyThirdScreen';

const screens = [
  { name: 'Amenity Booking', component: Screen1 },
  { name: 'My Booking', component: Screen2 },
  { name: 'Screen3', component: Screen3},
];

function Screen1(props) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Hello, {props.name}!</Text>
    </View>
  );
}
function Screen2(props) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text>Hello,sdfgh {props.name}!</Text>
    </View>
  );
}
function Screen3() {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <MyThirdScreen/>
    </View>
  );
}


 function TopTabNavigtor() {
 
    const Tab = createMaterialTopTabNavigator();
  
    return (
      <View
      style={{
        flex:1,
        // borderTopRightRadius:22,
        // borderTopLeftRadius:22,
       
        // marginTop:22
    }} 
      >
      <NavigationContainer>
      <Tab.Navigator
      tabBarOptions={{
        style: styles.tabBarStyle,
      }}
      >
      {screens.map((screen) => (
        <Tab.Screen
        key={screen.name}
        name={screen.name}
        component={screen.component}
        />
        ))}
        </Tab.Navigator>
        </NavigationContainer>
        </View>
    );
  }
  
 
  
  export default TopTabNavigtor;
  
 

const styles = StyleSheet.create({
  tabBarStyle: {
    borderTopLeftRadius: 20, // Set the desired top border radius
    borderTopRightRadius: 20, // Set the desired top border radius
  },
})