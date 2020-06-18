import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const BoxScreen = () => {
  return <View style={styles.parentView}>
    <View style={{ height: 100, width: 100, backgroundColor: 'tomato' }} />
    <View style={{ 
      height: 100, 
      width: 100, 
      backgroundColor: 'turquoise',
      marginTop: 100 
    }} />
    <View style={{ height: 100, width: 100, backgroundColor: 'lavender' }} />
  </View>
};

const styles = StyleSheet.create({
  parentView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default BoxScreen;