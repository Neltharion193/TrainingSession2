import React, { useState } from 'react'
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const CircleScreen = () => {

  var [ isPress, setIsPress ] = useState(false)

  var press = () => {
    isPress ? setIsPress(false) : setIsPress(true)
  }

  return (
    <SafeAreaView style={styles.container}>
        <TouchableOpacity style={[styles.circle1, isPress ? styles.colorPress : styles.colorNormal]} onPress={press}>
            <View style={[styles.circle2, isPress ? styles.vis : styles.invis]} />
        </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
    },

    circle1: {
      height: 35,
      width: 35,
      borderRadius: 35,
      borderWidth: 4,
      padding: 4.8,
    },

    colorNormal: {
      borderColor: 'black',
    },

    colorPress: {
      borderColor: 'red',
    },

    circle2: {
      height: 17.5,
      width: 17.5,
      borderRadius: 17.5,
      backgroundColor: 'red',
    },

    vis: {
      opacity: 1
    },

    invis: {
      opacity: 0
    }
})

export default CircleScreen;