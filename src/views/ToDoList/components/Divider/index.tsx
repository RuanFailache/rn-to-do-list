import React from 'react'
import { View } from 'react-native'
import { toDoListStyle } from '../../../../utils'

export const Divider: React.FC = function () {
  return <View style={toDoListStyle.divider} />
}
