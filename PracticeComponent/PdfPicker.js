import React,{useState} from 'react';
import { Text, View, StyleSheet,Button } from 'react-native';
import Constants from 'expo-constants';
import * as DocumentPicker from 'expo-document-picker';



export default function DocsPicker() {
    const[showDocs,setShowDocs]=useState('') 
const pickDocument = async () => {
 
  let result = await DocumentPicker.getDocumentAsync({
    type: 'application/pdf/Image',
  });
  console.log(result.uri);
  // do something with the selected PDF document
  setShowDocs(result)
};

  return (
    <View style={styles.container}>
     <Button title="Pick Document" onPress={pickDocument} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
