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

const INITIAL_TASK_STATE = {
  name: '',
  description: '',
  done: false,
}

export const AddTaskModal: React.FC<AddTaskModalProps> = function ({
  visible,
  closeModal,
}) {
  const { createNewTask } = useTaskContext()
  const [task, setTask] = useState<Task>(INITIAL_TASK_STATE)
  const [errorMessage, setErrorMessage] = useState<string | null>()

  const handleChangeText = useCallback((key: keyof Task, text: string) => {
    setTask((prevTask: Task) => ({ ...prevTask, [key]: text }))
  }, [])

  const clearStatesAndCloseModal = useCallback(() => {
    setTask(INITIAL_TASK_STATE)
    setErrorMessage(null)
    closeModal()
  }, [closeModal])

  const onSubmitTask = () => {
    if (task.name.length < 3) {
      setErrorMessage('Ops! O nome da tarefa deve ter 3 digitos.')
      return
    }

    createNewTask(task)
    clearStatesAndCloseModal()
  }

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <TouchableWithoutFeedback onPress={clearStatesAndCloseModal}>
        <View style={addTaskModalStyle.overlay} />
      </TouchableWithoutFeedback>

      <View style={addTaskModalStyle.modal}>
        <Text style={addTaskModalStyle.title}>Adicione uma tarefa</Text>

        <View style={addTaskModalStyle.form}>
          <TextInput
            style={addTaskModalStyle.input}
            value={task.name}
            onChangeText={text => handleChangeText('name', text)}
            placeholder={errorMessage || 'Escreva um nome para sua tarefa!'}
            placeholderTextColor={
              errorMessage ? theme.colors.red : theme.colors.gray
            }
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
