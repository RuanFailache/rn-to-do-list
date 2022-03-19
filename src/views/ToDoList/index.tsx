import React from 'react'

import { FlatList, KeyboardAvoidingView } from 'react-native'

import { toDoListStyle } from '../../utils'
import { Divider, EmptyToDoList, Task } from './components'

type ToDoListProps = {
  tasks: string[]
}

export const ToDoList: React.FC<ToDoListProps> = function ({ tasks }) {
  return (
    <KeyboardAvoidingView>
      <FlatList
        data={tasks}
        style={toDoListStyle.listContainer}
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={() => <EmptyToDoList />}
        renderItem={({ item }) => <Task task={item} />}
      />
    </KeyboardAvoidingView>
  )
}
