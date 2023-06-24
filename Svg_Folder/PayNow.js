import { StyleSheet, Text, View,TouchableWithoutFeedback } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Fab from "./Fab";
export default function PayNow() {
  return (
    <View
      style={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        height: "100%",
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        elevation: 19,
      }}
    >
      <View
        style={{
          width: 352,
          height: 62,
          marginTop: 33,
          marginHorizontal: 30,
          backgroundColor: " rgba(91, 90, 94, 0.06)",
        }}
      >
        <View style={{ marginVertical: 24, marginLeft: 26 }}>
        <TouchableWithoutFeedback>
         
        <Ionicons name="radio-button-on" size={14} color="black" />
         </TouchableWithoutFeedback>
        </View>
      </View>
      <View
        style={{
          width: 352,
          height: 200,
          backgroundColor: " rgba(91, 90, 94, 0.06)",
          marginTop: 20,
          marginHorizontal: 30,
        }}
      >
        <Text style={{ marginTop: 18, marginBottom: 8, marginLeft: 18 }}>
          Enter Credit Card Number
        </Text>
        <View style={{}}></View>
        <View
          style={{
            width: 317,
            height: 42,
            backgroundColor: "#FFFFFF",
            marginTop: 8,
            marginHorizontal: 17,
          }}
        ></View>
        <View style={{ flexDirection: "row", marginTop: 21.65 }}>
          <Text style={{ marginLeft: 18.35 }}>Expirey Data</Text>
          <Text style={{ marginLeft: 115 }}>CVV</Text>
          <Text style={{ marginLeft: 70 }}>Help?</Text>
        </View>
        <View style={{ marginTop: 8, flexDirection: "row" }}>
          <View
            style={{
              width: 172,
              height: 42,
              backgroundColor: "#FFFFFF",
              marginLeft: 16,
            }}
          >
            <Text style={{ marginVertical: 13, marginLeft: 11 }}>DDMM</Text>
          </View>
          <View
            style={{
              width: 128,
              height: 42,
              backgroundColor: "#FFFFFF",
              marginLeft: 16,
            }}
          ></View>
        </View>
      </View>

      <View
        style={{ marginTop: 28, flexDirection: "row", alignItems: "center" }}
      >
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 3,
            backgroundColor: "#FFFFFF",
            borderWidth: 1,
            marginLeft: 26,
          }}
        ></View>
        <Text style={{ marginLeft: 8 }}>Save My Details For Future</Text>
      </View>

      <View
        style={{
          marginTop: 22,
          width: 352,
          height: 42,
          backgroundColor: "rgba(91, 90, 94, 0.06)",
          marginLeft: 29,
          flexDirection: "row",
        }}
      >
        <Text style={{ color: "black", marginTop: 10, marginLeft: 18 }}>
          Confirm Payment
        </Text>
        <Text style={{ color: "black", marginTop: 10, marginLeft: 133 }}>
          AED 21,000
        </Text>
      </View>
      <View
        style={{
          marginTop: 22,
          width: 352,
          height: 42,
          backgroundColor: "#1A1A1A",
          marginLeft: 29,
        }}
      >
        <Text style={{ color: "white", textAlign: "center", marginTop: 10 }}>
          Confirm Payment
        </Text>
      </View>

      <View
        style={{
          marginTop: 23,
          width: 352,
          height: 116,
          backgroundColor: "#ECECED",
          marginLeft: 30,
         
        }}
      >
       <View style={{ flexDirection: "row",}}>
       
       <View
       style={{
         width: 20,
         height: 20,
         borderRadius: 10,
         backgroundColor: "#FFFFFF",
         borderWidth: 1,
         margin: 14,
       }}
     ></View>
     <Text style={{ marginTop: 13, marginLeft: 17 }}>CitiBank Card</Text>
     <View style={{ marginLeft: 151, marginTop: 13 }}>
       <Fab />
     </View>
       
       </View>
       
       <Text style={{color:'black',marginLeft:65,marginTop:12}}>**** **** **** 8787</Text>
       <View style={{flexDirection:'row'}}>
       <Text style={{backgroundColor:"#CACACA",marginLeft:63}}>CVV</Text>
       <Text style={{marginLeft:62,marginTop:6}}>?</Text>
       </View>
       <View style={{width:"26%",borderWidth:1,marginLeft:65}}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
