import React, { useState } from 'react'

import { FlatList, KeyboardAvoidingView } from 'react-native'

import { appStyle, toDoListStyle } from '../../utils/styles'
import { AddTaskModal, Divider, EmptyToDoList, Task } from './components'
import { FooterButton } from '../../components'
import { useTaskContext } from '../../contexts/task'

export const ToDoList: React.FC = function () {
  const { tasks } = useTaskContext()
  const [isModalOpen, setIsModalOpen] = useState(true)

  const openModal = () => setIsModalOpen(true)

  const closeModal = () => setIsModalOpen(false)

  return (
    <KeyboardAvoidingView style={appStyle.container}>
      <FlatList
        data={tasks}
        style={toDoListStyle.listContainer}
        ItemSeparatorComponent={() => <Divider />}
        ListEmptyComponent={() => <EmptyToDoList />}
        renderItem={({ item }) => <Task task={item.name} />}
        keyExtractor={item => item.name}
      />

      <AddTaskModal closeModal={closeModal} visible={isModalOpen} />

      <FooterButton openModal={openModal} />
    </KeyboardAvoidingView>
  )
}
