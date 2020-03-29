import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import ColourCounter from '../components/ColourCounter'

const INCREMENT = 15 // capitalize this constant as to show it's a special variable

const reducer = (state, action) => {
  // state = { red: number, green: number, blue: number }
  // action = { colourToChange: 'red' || 'green' || 'blue', amount:  15 || -15 }
  switch(action.colourToChange) {
    case 'red':
      return state.red + action.amount > 255 || state.red + action.amount < 0 ?
        state
        : { ...state, red: state.red + action.amount }
    case 'green':
      return state.green + action.amount > 255 || state.green + action.amount < 0 ?
      state
      : { ...state, green: state.green + action.amount }
    case 'blue':
      return state.blue + action.amount > 255 || state.blue + action.amount < 0 ?
      state
      : { ...state, blue: state.blue + action.amount }
    default:
      return state
  }
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 })
  // dispatch i.e run my reducer
  const { red, green, blue } = state 
  return (
    <View>
      <ColourCounter
        colour="Red" 
        onIncrease={() => dispatch({colourToChange: 'red', amount: INCREMENT})} 
        onDecrease={() => dispatch({colourToChange: 'red', amount: -1 * INCREMENT})}
      />
      <ColourCounter 
        colour="Green"
        onIncrease={() => dispatch({colourToChange: 'green', amount: INCREMENT})} 
        onDecrease={() => dispatch({colourToChange: 'green', amount: -1 * INCREMENT})} 
      />
      <ColourCounter 
        colour="Blue"
        onIncrease={() => dispatch({colourToChange: 'blue', amount: INCREMENT})} 
        onDecrease={() => dispatch({colourToChange: 'blue', amount: -1 * INCREMENT}) } 
      />
      <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  )
}


const styles = StyleSheet.create({})

export default SquareScreen