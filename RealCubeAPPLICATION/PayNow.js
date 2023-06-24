import { Settings, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import DownSvg from './DownSvg'
import SettingSvg from './SettingSvg'
import HomeSvg from './HomeSvg'

export default function PayNow() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: "yellow"
    }}>
      <Text>PayNow</Text>
      <View style={{
        marginHorizontal: 20,
        paddingHorizontal: 15,
        paddingVertical: 13,
        backgroundColor: "#FFF",
        marginTop: 100,
        borderRadius: 6
      }}>
        <View style={{
          flexDirection: 'row', alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
            <Text style={{fontSize:12,fontWeight:'400'}}>
              Nation Towers-N21
            </Text>
            <DownSvg />
          </View>
          <SettingSvg />
        </View>
        <View style={{ width: '100%', borderWidth: .3, marginVertical: 10 }}></View>
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 15 }}>

            <View style={{ flexDirection: 'row', gap: 8 }}>
              <HomeSvg />
              <View style={{gap:5}}>
                <Text style={{fontSize:14,fontWeight:"400"}}>Total Due</Text>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                  <Text style={{
                    fontWeight: '600', fontSize: 24, color: "#333333"
                  }}>3,500</Text>
                  <Text style={{
                    fontWeight: '400', fontSize: 16, color: "#333333"
                  }}>AED</Text>
                </View>
                <View style={{}}>
                  <Text>View bill</Text>
                  <View style={{ width: 54, borderWidth: 0.2 }}></View>
                </View>
              </View>
            </View>
            <TouchableOpacity style={{
              backgroundColor: 'red',
              marginHorizontal:5,
              paddingHorizontal:14,
              paddingVertical: 8,
              borderRadius: 6,
              marginVertical:17
            }}>
              <Text style={{
                textAlign: 'center',
                color: '#fff', fontSize: 21, fontWeight: '500'
              }}>Pay Now </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})