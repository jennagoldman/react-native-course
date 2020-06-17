import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo" 
        onPress={() => navigation.navigate('List')}
      />
      <Button 
        title="Go to Images Demo" 
        onPress={() => navigation.navigate('Images')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
