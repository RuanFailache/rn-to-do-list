import React, { createContext, useContext, useState } from 'react'

type Task = {
  name: string
  description: string
  done: boolean
}

type TaskProviderValues = {
  tasks: Task[]
  createNewTask: (newTask: Task) => void
}

const TaskContext = createContext<TaskProviderValues>({
  tasks: [],
  createNewTask: () => {},
})

export const TaskProvider: React.FC = function ({ children }) {
  const [tasks, setTasks] = useState<Task[]>([])

  const createNewTask = (newTask: Task) =>
    setTasks(prevTasks => [...prevTasks, newTask])

  return (
    <TaskContext.Provider value={{ tasks, createNewTask }}>
      {children}
    </TaskContext.Provider>
  )
}

export const useTaskContext = () => useContext(TaskContext)
