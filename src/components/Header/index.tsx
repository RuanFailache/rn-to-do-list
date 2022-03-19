import React from 'react'
import { Text, View } from 'react-native'
import { headerStyle } from '../../utils/styles'

export const Header: React.FC = function () {
  return (
    <View style={headerStyle.container}>
      <Text style={headerStyle.title}>MyToDoList</Text>
    </View>
  )
}
