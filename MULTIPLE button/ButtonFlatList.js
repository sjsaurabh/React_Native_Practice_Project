import React, { useState } from 'react';
import { View, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const buttons = [
    { id: 'button1', title: 'Button 1' },
    { id: 'button2', title: 'Button 2' },
    { id: 'button3', title: 'Button 3' },
    // Add more buttons as needed
  ];

  const handleButtonPress = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => handleButtonPress(item.id)}
      style={[
        styles.button,
        selectedButton === item.id && styles.selectedButton,
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          selectedButton === item.id && styles.selectedButtonText,
        ]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={buttons}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 5,
    backgroundColor: 'lightblue',
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
