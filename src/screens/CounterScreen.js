import React, { useState, useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { ...state, counter: state.counter + action.payload }
    case 'decrement':
      return { ...state, counter: state.counter - action.payload }
    default: 
      return state
  }
}

const CounterScreen = () => {
  // const [ counter, setCounter ] = useState(0)
  const [state, dispatch] = useReducer(reducer, {counter: 0})

  const { counter } = state
  return <View>
    <Button title="Increase" onPress={() => {
      //setCounter(counter + 1)
      dispatch({type: 'increment' , payload: 1 })
    }}/>
    <Button title="Decrease" onPress={() => {
      //setCounter(counter - 1)
      dispatch({type: 'decrement' , payload: 1 })
    }}/>å
    <Text>Current Count:{counter}</Text>
  </View>
}

const styles = StyleSheet.create({})

export default CounterScreen