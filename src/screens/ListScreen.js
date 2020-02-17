import React from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
  const friends = [
    { name: 'Nick', Age: 27},
    { name: 'Axel', Age: 27},
    { name: 'Bonnie', Age: 27},
    { name: 'Tim', Age: 29},
    { name: 'Alf', Age: 30},
    { name: 'Olga', Age: 32},
    { name: 'Nat', Age: 27},
    { name: 'Eric', Age: 25},
  ]
  return (
    <FlatList
      keyExtractor={(friend) => friend.name }
      data={friends} 
      renderItem={({ item }) => {
      return <Text style={styles.textStyle}>{item.name} - Age {item.Age}</Text>
      }}
    />
  )
}

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 20
  }
})

export default ListScreen