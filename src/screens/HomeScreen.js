import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ComponentsScreen from "./ComponentsScreen";

const HomeScreen = (props) => {
  console.log(props);

  return (
    <View>
      <Text style={styles.text}>Hello World</Text>
      <Button 
        title="Go to Components Demo" 
        onPress={() => props.navigation.navigate('Components')}
      />
      <Button 
        title="Go to List Demo" 
        onPress={() => props.navigation.navigate('List')}
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
