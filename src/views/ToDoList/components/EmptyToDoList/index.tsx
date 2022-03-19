import React from 'react'
import { Text, View } from 'react-native'
import { toDoListStyle } from '../../../../utils'

export const EmptyToDoList: React.FC = function () {
  return (
    <View style={toDoListStyle.emptyListContainer}>
      <Text style={toDoListStyle.text}>Não há tarefas cadastradas</Text>
    </View>
  )
}
