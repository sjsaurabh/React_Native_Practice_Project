import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, count === 0 && styles.disabledButton]}
        onPress={handleDecrement}
        disabled={count === 0}
      >
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.countText}>{count}</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={handleIncrement}
      >
        <Text style={styles.buttonText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:100,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f0f',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow',
  },
  disabledButton: {
    backgroundColor: 'green',
  },
});

export default Counter;
