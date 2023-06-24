import React, { useState, useEffect } from "react";
import { Dimensions, ImageBackground, StyleSheet, View, Text, Pressable } from "react-native";
import White_arrow_left from "./White_arrow_left";

let screenHeight = Math.round(Dimensions.get("window").height);
let navigation_header_Height = Math.round(screenHeight / 5.5);

function Header_Image_background({ title = '', navigationGoBack = false, children }) {
  

  const styles = StyleSheet.create({
    navigation_header: {
      height: navigation_header_Height + 20,
      justifyContent: "flex-end",
      alignItems: "center",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      paddingBottom: Math.floor(navigation_header_Height / 3),
    },
    navigation_header_content: {
      width: '100%',
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "transparent",
      paddingHorizontal: 15,
    },
    navigation_text_arrow_wraper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      backgroundColor: "transparent",
    },
    navigation_header_title: {
      color:'red',
      fontWeight:'500',
      fontSize:20,
    },
  });
  return (
    <View>
      <ImageBackground
        source={require("../assets/backgroundImage.png")}
        style={styles.navigation_header}
      >
        <View style={styles.navigation_header_content}>
          <View style={styles.navigation_text_arrow_wraper}>
            {navigationGoBack && <Pressable style={{marginRight:17,}} onPress={() => navigation.goBack()}>
              <White_arrow_left/>
            </Pressable>
            }
            <Text style={styles.navigation_header_title}>{title}</Text>
          </View>
          {children}
        </View>
      </ImageBackground>
    </View>
  );
}

export default Header_Image_background;
