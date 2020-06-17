import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Dannie' },
    { name: 'Chelsea' },
    { name: 'Britta' },
    { name: 'Karen' },
  ];

  return (
    <FlatList 
      keyExtractor={(friend) => friend.name} 
      data={friends} 
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>
      }} 
    />
  );
};

const styles = StyleSheet.create({});

export default ListScreen;