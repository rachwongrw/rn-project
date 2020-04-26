import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const BoxScreen = () => {
  return <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Child 1</Text>
      <Text style={styles.textStyle}>Child 2</Text>
      <Text style={styles.textStyle}>Child 3</Text>
    </View>
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    flexDirection: "row",
    height: 200,
    alignItems: 'flex-start'
  },
  textStyle: {
    borderWidth: 3,
    borderColor: 'red',
  }
})

export default BoxScreen

// iOS: raw input is capitalised automatically and will show corrected word suggestions. Can sometimes be helpful but here we're going to let users type what they want. Important use case would be when entering an email or something. 

// Android: leaves text as is.

// 