import React, {useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () => {
  const [password, setPassword] = useState('')
  return <View>
    <Text>Enter Password</Text>
    <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={password}
      onChangeText={(e) => setPassword(e)}
    />
    {
      password.length < 5 ?
      <Text>Password must be longer than 4 characters</Text>
      :
      null
    }
  </View>
}

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    padding: 5
  }
})

export default TextScreen

// iOS: raw input is capitalised automatically and will show corrected word suggestions. Can sometimes be helpful but here we're going to let users type what they want. Important use case would be when entering an email or something. 

// Android: leaves text as is.

// 