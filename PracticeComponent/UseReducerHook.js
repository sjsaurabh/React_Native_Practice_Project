import { Button, StyleSheet, Text, View } from 'react-native'
import React,{useReducer} from 'react'

const initialState=0
const reducer=(state,action)=>{
    console.log(state,action);
    console.log("state,action");
    if(action.type==="INCREMENT"){
      return state+1;
    }
    if(action.type==="DeCREMENT"){
      return state-1;
    }
    return state;
}
export default function UseReducerHook() {
  // console.log("state,action");
    const [state, dispatch] = useReducer(reducer,initialState)
  return (
    <View>
    <Text>UseReducerHook</Text>
    <Text>UseReducerHook</Text>
    <Text>UseReducerHook</Text>
    <Text>UseReducerHook</Text>
    <Text style={{fontSize:200,color:"red"}}>{state}</Text>
      <Button title='inc' onPress={()=>dispatch({type:"INCREMENT"})}/>
      <Button title='dec' onPress={()=>dispatch({type:"DeCREMENT"})}/>
      
    </View>
  )
}

const styles = StyleSheet.create({})