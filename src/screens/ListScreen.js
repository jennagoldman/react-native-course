import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Dannie' },
    { name: 'Chelsea' },
    { name: 'Britta' },
    { name: 'Karen' },
    { name: 'Eric' },
    { name: 'Hailey' },
    { name: 'Maxwell' },
  ];

  return (
    <FlatList 
      keyExtractor={(friend) => friend.name} 
      data={friends} 
      renderItem={({ item }) => {
        return <Text style={styles.textStyle}>{item.name}</Text>
      }} 
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50
  }
});

export default ListScreen;