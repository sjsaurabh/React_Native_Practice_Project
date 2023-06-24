import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
let screenHeight = Math.round(Dimensions.get('window').height)
let screenWidth = Dimensions.get('window').width
const Tab = createMaterialTopTabNavigator()

const TopTabsNavigator = ({screens}) => {
  const navigation = useNavigation();
  const [colors, setColors] = useState(null);
  const [appStyles, setAppStyles] = useState(null);
  const [fontSizes, setFontSizes] = useState(null);
  const [fontFamily, setFontFamily] = useState(null);

  const { theme } = useSelector((state) => state.app);

  useEffect(() => {
    setColors(theme.colors);
    setFontFamily(theme.fontFamily);
    setFontSizes(theme.fontSizes);
    setAppStyles(theme.styles); // console.log("myFinanceTheme====", theme)
  }, [theme]);
  return (
      <View style={{width:screenWidth,height:screenHeight,flex:1,
        backgroundColor:colors?.BACKGROUND,
        borderTopRightRadius:22,
        borderTopLeftRadius:22,
       
      }}>
      <Tab.Navigator 
      tabBarOptions={{
        activeTintColor: '#090909',
        inactiveTintColor: '#000000',
        justifyContent: 'space-between',
        labelStyle: {
            fontWeight:'400',
            textTransform: 'capitalize',
            fontSize: fontSizes?.body5,
        },
        indicatorStyle: {
            backgroundColor: '#F6A41C',
        },
        tabStyle: {
           
        }
    }}
      >
      {screens.map((screen, index) => (
          <Tab.Screen
            key={index}
            name={screen.name}
            component={screen.component}
            options={screen.options}
          />
        ))}
      </Tab.Navigator>
   
      </View>
  );
};

export default TopTabsNavigator;



const styles = StyleSheet.create({})
