import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { toDoListStyle } from '../../../../utils/styles'

type TaskProps = {
  task: string
}

export const Task: React.FC<TaskProps> = function ({ task }) {
  return (
    <TouchableOpacity style={toDoListStyle.task}>
      <Text style={toDoListStyle.text}>{task}</Text>
    </TouchableOpacity>
  )
}
