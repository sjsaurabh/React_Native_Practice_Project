// ParentComponent.js
import React from 'react';
import { View, Text } from 'react-native';

const ParentComponent = ({ children }) => {
  return (
    <View>
      <Text>This is the parent component.</Text>
      {children} 
    </View>
  );
};

export default ParentComponent;
