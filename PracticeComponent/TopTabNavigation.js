

import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


const Tab = createMaterialTopTabNavigator();

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function SettingsScreen1() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}
function Contact() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact!</Text>
    </View>
  );
}


export default function TopTabNavigation() {
  return (
    
    <NavigationContainer>

    <Tab.Navigator
    screenOptions={{
      tabBarIndicatorStyle:{backgroundColor:'yellow'},
      tabBarLabelStyle:{fontSize:14}
    }}
    >
    <Tab.Screen name="Contact" component={Contact} />
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
    <Tab.Screen name="Fetting" component={SettingsScreen1} />
    </Tab.Navigator>
   
    </NavigationContainer>
    
  );
}