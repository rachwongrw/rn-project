import React, { useReducer } from 'react'
import { StyleSheet, View } from 'react-native'
import ColourCounter from '../components/ColourCounter'

const INCREMENT = 15 // capitalize this constant as to show it's a special variable

const reducer = (state, action) => {
  // state === { red: number, green: number, blue: number }
  // action === { type: 'change_red' || 'change_green' || 'change_blue', payload:  15 || -15 }
  switch(action.type) {
    case 'change_red':
      return state.red + action.payload > 255 || state.red + action.payload < 0 ?
        state
        : { ...state, red: state.red + action.payload }
    case 'change_green':
      return state.green + action.payload > 255 || state.green + action.payload < 0 ?
      state
      : { ...state, green: state.green + action.payload }
    case 'change_blue':
      return state.blue + action.payload > 255 || state.blue + action.payload < 0 ?
      state
      : { ...state, blue: state.blue + action.payload }
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
        onIncrease={() => dispatch({type: 'change_red', payload: INCREMENT})} 
        onDecrease={() => dispatch({type: 'change_red', payload: -1 * INCREMENT})}
      />
      <ColourCounter 
        colour="Green"
        onIncrease={() => dispatch({type: 'change_green', payload: INCREMENT})} 
        onDecrease={() => dispatch({type: 'change_green', payload: -1 * INCREMENT})} 
      />
      <ColourCounter 
        colour="Blue"
        onIncrease={() => dispatch({type: 'change_blue', payload: INCREMENT})} 
        onDecrease={() => dispatch({type: 'change_blue', payload: -1 * INCREMENT}) } 
      />
      <View style={{height:150, width:150, backgroundColor:`rgb(${red}, ${green}, ${blue})`}}/>
    </View>
  )
}


const styles = StyleSheet.create({})

export default SquareScreen