// ParentComponent.js
import React from 'react';
import { View, Text } from 'react-native';
import ParentComponent from './parentComponent';

const ChildrenComponent = ({ children }) => {
  return (
    <View>
    <ParentComponent>
    <Text>This is the child component.</Text>
    </ParentComponent>
    </View>
  );
};

export default ChildrenComponent;
