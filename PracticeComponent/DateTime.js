import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Platform } from 'react-native';
import { Button } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';

export default function DateTime() {
    const [date,setDate]=useState(new Date());
    const[mode,setMode]=useState('date');
    const[show,setShow]=useState(false)
    const[text,setText]=useState('Empty')

    const onChange=(event,selecteDate)=>{
        const currentDate =selecteDate || date;
        setShow(Platform.OS === 'android');
        setDate(currentDate);

        let tempDate= new Date(currentDate)
        let fDate= tempDate.getDate() + '/' + (tempDate.getMonth()+1)  + '/' + (tempDate.getFullYear())
        let fTime= 'Hours:' + tempDate.getHours() + '| Minutes:'+tempDate.getMinutes() + 'Seconds:'+tempDate.getSeconds() ;
        setText(fDate +'/n'+fTime)
        console.log(fDate,fTime);
    }
    const showMode=(currentMode)=>{
        setShow(true)
        setMode(currentMode)
    }
  return (
    <View style={{marginTop:150}}>
      <Text>DateTime{text}</Text>
      <View>
      <Button title='date' onPress={()=>showMode('date')}/>
      </View>
      <View>
      <Button  title='time' onPress={()=>showMode('time')}/>
      </View>
      {
        show&& (
            <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode={mode}
            is24Hour={true}
            display='default'
           
           onChange={onChange}
            />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({})