import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import ColourCounter from '../components/ColourCounter'

const INCREMENT = 10 // capitalize this constant as to show it's a special variable

const SquareScreen = () => {
  const [ red, setRed ] = useState(0) // useState is a React Hook - not actually changing the state
  const [ green, setGreen ] = useState(0)
  const [ blue, setBlue ] = useState(0)

  const setColour = (colour, change) => {
    switch (colour) {
      case 'red':
        red + change > 255 || red + change < 0 ? null : setRed(red + change)
        return
      case 'green':
        green + change > 255 || green + change < 0 ? null : setGreen(green + change)
        return 
      case 'blue':
        blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change)
        return 
      default:
        return
    }
  }

  return (
    <View>
      <ColourCounter
        colour="Red" 
        onIncrease={() => setColour('red',  INCREMENT)} 
        onDecrease={() => setColour('red', -1 * INCREMENT)}
      />
      <ColourCounter 
        colour="Green"
        onIncrease={() => setColour('green', INCREMENT)} 
        onDecrease={() => setColour('green', -1 * INCREMENT)} 
      />
      <ColourCounter 
        colour="Blue"
        onIncrease={() => setColour('blue', INCREMENT)} 
        onDecrease={() => setColour('blue', -1 * INCREMENT)} 
      />
      <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  )
}


const styles = StyleSheet.create({})

export default SquareScreen