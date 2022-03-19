import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { useTaskContext } from '../../../../contexts/task'
import { toDoListStyle } from '../../../../utils/styles'

type Task = {
  name: string
  description: string
  done: boolean
}

type TaskProps = {
  task: Task
}

export const Task: React.FC<TaskProps> = function ({ task }) {
  const { toggleTask } = useTaskContext()

  return (
    <TouchableOpacity
      style={toDoListStyle.task}
      onPress={() => toggleTask(task.name)}>
      <View
        style={
          task.done
            ? toDoListStyle.taskButtonDone
            : toDoListStyle.taskButtonNotDone
        }
      />

      <View>
        <Text
          style={
            task.done
              ? [toDoListStyle.title, toDoListStyle.textDone]
              : toDoListStyle.title
          }>
          {task.name}
        </Text>

        {task.description !== '' && (
          <Text style={toDoListStyle.description}>{task.description}</Text>
        )}
      </View>
    </TouchableOpacity>
  )
}
