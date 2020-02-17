import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetail from '../components/ImageDetails'

const ImageScreen = () => {
  return <View>
    <ImageDetail title="Forest" imageSrc={require('../../assets/forest.jpg')} score={6}/>
    <ImageDetail title="Beach" imageSrc={require('../../assets/beach.jpg')} score={9}/>
    <ImageDetail title="Mountain" imageSrc={require('../../assets/mountain.jpg')} score={7}/>
  </View>
}

const styles = StyleSheet.create({})

export default ImageScreen