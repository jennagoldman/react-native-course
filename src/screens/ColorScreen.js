import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return <View>
    <Button 
      title="Add Color" 
      onPress={() => {}}
    />
  </View>
};

const styles = StyleSheet.create({});

export default ColorScreen;