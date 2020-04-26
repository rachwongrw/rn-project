import React from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <View style={styles.textOneStyle} />
      <View style={styles.textTwoStyle} />
      <View style={styles.textThreeStyle}/>
    </View>
  )
}

const styles = StyleSheet.create({
  viewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 200
  },
  textOneStyle: {
    backgroundColor: 'rgba(63, 127, 191, 0.52)',
    width: 100,
    height: 100
  },
  textTwoStyle: {
    backgroundColor: 'rgba(127, 191, 63, 0.52)',
    width: 100,
    height: 100,
    //top: 100
    alignSelf: 'flex-end'
  },
  textThreeStyle: {
    backgroundColor: 'rrgba(191, 63, 63, 0.52)',
    width: 100,
    height: 100
  }
})

export default BoxScreen

// iOS: raw input is capitalised automatically and will show corrected word suggestions. Can sometimes be helpful but here we're going to let users type what they want. Important use case would be when entering an email or something. 

// Android: leaves text as is.



//...StyleSheet.absoluteFillObject // Same as the bottom 5 properties
// position: 'absolute',
// top: 0,
// bottom: 0,
// left: 0,
// right: 0


// Order of Layout Systems: 
// 1. Box Object Model 
// 2. Position
// 3. Flex Box
