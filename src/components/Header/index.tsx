import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { theme } from '../../utils'

const { width } = Dimensions.get('screen')

export const Header: React.FC = function () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>MyToDoList</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width,
    height: theme.sizes.lg,
    backgroundColor: theme.colors.black,
    zIndex: 1,
    shadowOpacity: 1,
  },
  title: {
    fontSize: theme.fontSizes.md,
    color: theme.colors.white,
  },
})
