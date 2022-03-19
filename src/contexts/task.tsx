import React, { createContext, useContext, useState } from 'react'

type Task = {
  name: string
  description: string
  done: boolean
}

type TaskProviderValues = {
  tasks: Task[]
  toggleTask: (taskName: string) => void
  createNewTask: (newTask: Task) => void
}

const TaskContext = createContext<TaskProviderValues>({
  tasks: [],
  toggleTask: () => {},
  createNewTask: () => {},
})

export const TaskProvider: React.FC = function ({ children }) {
  const [tasks, setTasks] = useState<Task[]>([])

  const createNewTask = function (newTask: Task) {
    setTasks(prevTasks => [...prevTasks, newTask])
  }

  const toggleTask = function (name: string) {
    setTasks(prevTasks => {
      const newTasks = []

      for (let task of prevTasks) {
        if (task.name === name) {
          task.done = !task.done
        }
        newTasks.push(task)
      }

      return newTasks
    })
  }

  return (
    <TaskContext.Provider value={{ tasks, toggleTask, createNewTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)
