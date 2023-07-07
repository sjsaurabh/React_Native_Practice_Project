import { View, Text,TouchableOpacity,Modal, StyleSheet, Dimensions, Button } from 'react-native'
import React,{useState} from 'react'
import { Calendar } from 'react-native-calendars';

export default ModalOne = () => {
    const[modal,setModal]= useState(false)
    const [selectedDate, setSelectedDate] = useState('');
      // Function to handle 'Done' button press
  const handleDonePress = () => {
    // Perform any desired action with the selected date
    console.log('Selected date:', selectedDate);
    
    // Close the modal
    setModal(false);
  };
  
  // Function to handle 'Cancel' button press
  const handleCancelPress = () => {
    // Close the modal
    setModal(false);
  };
  return (
    <View
    style={{justifyContent:'flex-end',flex:1}} 
    >
    <TouchableOpacity style={{
        backgroundColor:'#FFFF00',
        marginHorizontal:50,
        paddingVertical:10
    }} 
    onPress={()=>setModal(true)}
    >
    <Text  style={{
        textTransform:'uppercase',
        textAlign:'center'
    }}>ModalOneOpen</Text>
    </TouchableOpacity>
      <Modal
      transparent={true}
      visible={modal}
      onRequestClose={() => setModal(false)}
      >
        
        <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
               <Text style={{
                textAlign:'center'
               }}>sanju</Text>
               <Calendar
               onDayPress={(day) => setSelectedDate(day.dateString)}
               markedDates={{ [selectedDate]: { selected: true, marked: true } }}
             />
             <View style={{
                flexDirection:'row',
                justifyContent:'space-between',
                marginHorizontal:15,
                marginVertical:5,
                // marginBottom:10
        }}>
            <Button title="Done" onPress={handleDonePress} />
            <Button title="Cancel" onPress={handleCancelPress} />
            </View>
            </View>
           
        </View>

      </Modal>
    </View>
  )
}
const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent:'flex-end',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      //  marginTop:300
    },
    modalContent: {
       height: Dimensions.get('window').height / 2,
        // height:500,
      backgroundColor: '#FFFF00',
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
//    marginTop:200
      justifyContent: 'center',
    //   alignItems:'center'
     
    },
  });
