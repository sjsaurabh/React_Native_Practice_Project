import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Project() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.firstContainer}>
        <Text>Nation Towers - N21</Text>
        <View style={styles.downIcon}>
        <TouchableOpacity>
        <Entypo name="chevron-small-down" size={20} color="black" />
        </TouchableOpacity>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={{ flexDirection: "row" }}>
        <View style={{ flexDirection: "row", marginTop: 19 ,marginLeft:20}}>
          <MaterialCommunityIcons name="home-outline" size={54} color="black" />
          <View style={{marginLeft:11}}>
            <Text>Total Due</Text>
            <View style={{ flexDirection: "row" }}>
              <Text style={{ fontSize: 24, fontWeight: "600" }}>3500</Text>
              <Text style={{ marginTop: 11 }}>AED</Text>
            </View>
            <TouchableOpacity>
              <Text>View bill</Text>
              <View
                style={{ borderWidth: 0.5, width: 55, borderColor: "#8c8c8c" }}
              ></View>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#1A1A1A",
            width: 94,
            height: 37,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 10,
            marginLeft: 76,
            marginTop: 26,
            marginBottom: 48,
          }}
        >
          <Text style={{ color: "#ffffff", textAlign: "center" }}>Pay Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: 354,
    height: 154,
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 121,
    marginVertical: 20,
    borderRadius: 10,
    shadowColor: "#000000",
    elevation: 20,
  },
  firstContainer: {
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 20,
    alignItems: "center",
  },
  downIcon: {
    marginLeft: 10,
    //   marginTop:22,
    //   marginBottom:128,
    //   marginLeft:147,
    //   marginRight:1
  },
  line: {
    borderWidth: 0.5,
    color: "#000000",
    marginTop: 10,

    marginHorizontal: 20,
  },
});
