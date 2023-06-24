import { View, Text,Button, StyleSheet, Modal } from 'react-native'
import React from 'react'


export default function App1() {
  return (
    <View style={styles.main}>
                    <Modal
                    transparent={true}
                    >
                            <View style={styles.CenteredView}>
                                    <View style={styles.modalView}>
<Text>sanju</Text>
                                    </View>
                            </View>
                    
                    </Modal>
            <View style={styles.ButtonView}>
              <Button title='open modal'/>
            </View>
    </View>
  )
}
const styles=StyleSheet.create({
    main:{
        flex:1,
    },
    ButtonView:{
        flex:1,
        justifyContent:'flex-end'
    },
    CenteredView:{
        flex:1,
        justifyContent:'center',
        alignContent:'center'
    },
    modalView:{
        backgroundColor:'#FFFF00',
        padding:20,
        marginHorizontal:20,
        paddingTop:370
        // width:'100%',
        // height:'50%'
    }
})