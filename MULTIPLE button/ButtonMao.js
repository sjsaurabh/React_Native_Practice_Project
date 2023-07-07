import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const App = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { id: 'button1', title: 'Button 1' },
    { id: 'button2', title: 'Button 2' },
    { id: 'button3', title: 'Button 3' },
    // Add more buttons as needed
     { id: 'button4', title: 'Button 4' },
      { id: 'button5', title: 'Button 5' },
       { id: 'button6', title: 'Button 6' },
  ];

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  return (
    <View style={styles.container}>
      {buttons.map((button) => (
        <TouchableOpacity
          key={button.id}
          onPress={() => handleButtonPress(button.id)}
          style={[
            styles.button,
            selectedButton === button.id && styles.selectedButton,
          ]}
        >
          <Text
            style={[
              styles.buttonText,
              selectedButton === button.id && styles.selectedButtonText,
            ]}
          >
            {button.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    flexWrap:'wrap'
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal:10,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginHorizontal:10
  },
  selectedButton: {
    backgroundColor: 'yellow',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
  },
  selectedButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
