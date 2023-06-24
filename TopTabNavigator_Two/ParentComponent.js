import React, { useEffect, useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import TopTabsNavigator from './TopTapNavigatorComponent';
import BookAmenity from './BookAmenity';
import MyBooking from './MyBooking';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
let screenHeight = Math.round(Dimensions.get("window").height);
let screenWidth = Math.round(Dimensions.get("window").width);

const Screen1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
    <BookAmenity/>
  </View>
);

const Screen2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <MyBooking/>
  </View>
);


const ParentComponent = () => {
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
  const screens = [
    { name: 'Amenity Booking', component: Screen1},
    { name: 'My Booking', component: Screen2 },
   
  ];

  return (
    <View style={{width:screenWidth,
      height:screenHeight+100,
      backgroundColor:colors?.BACKGROUND,
      borderTopRightRadius:22,
      borderTopLeftRadius:22,
      marginTop:20,
     
    }}>
    <TopTabsNavigator screens={screens} />
    </View>
  );
};

export default ParentComponent;
