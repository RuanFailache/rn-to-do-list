import React, { useCallback, useState } from 'react'

import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

import { theme } from '../../../../utils/theme'
import { addTaskModalStyle } from '../../../../utils/styles'

import { Task } from '../Task'
import { useTaskContext } from '../../../../contexts/task'

type Task = {
  name: string
  description: string
  done: boolean
}

type AddTaskModalProps = {
  visible: boolean
  closeModal: () => void
}

export const AddTaskModal: React.FC<AddTaskModalProps> = function ({
  visible,
  closeModal,
}) {
  const { createNewTask } = useTaskContext()
  const [task, setTask] = useState<Task>({
    name: '',
    description: '',
    done: false,
  })

  const handleChangeText = useCallback((key: keyof Task, text: string) => {
    setTask((prev: Task) => ({ ...prev, [key]: text }))
  }, [])

  const onSubmitTask = () => {
    if (task.name.length < 3) {
      return
    }

    createNewTask(task)
    closeModal()
  }

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <TouchableWithoutFeedback onPress={closeModal}>
        <View style={addTaskModalStyle.overlay} />
      </TouchableWithoutFeedback>

      <View style={addTaskModalStyle.modal}>
        <Text style={addTaskModalStyle.title}>Adicione uma tarefa</Text>

        <View style={addTaskModalStyle.form}>
          <TextInput
            style={addTaskModalStyle.input}
            value={task.name}
            onChangeText={text => handleChangeText('name', text)}
            placeholder="Escreva um nome para sua tarefa!"
            placeholderTextColor={theme.colors.gray}
          />

          <TextInput
            style={addTaskModalStyle.input}
            value={task.description}
            onChangeText={text => handleChangeText('description', text)}
            placeholder="Escreva uma descrição para sua tarefa!"
            placeholderTextColor={theme.colors.gray}
          />

          <TouchableOpacity
            style={addTaskModalStyle.button}
            onPress={onSubmitTask}>
            <Text style={addTaskModalStyle.buttonText}>ADICIONAR</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}
