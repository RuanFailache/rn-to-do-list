import React from 'react'

import { SafeAreaView, StatusBar } from 'react-native'

import { ToDoList } from './views'
import { Header } from './components'
import { theme } from './utils/theme'
import { appStyle } from './utils/styles'
import { TaskProvider } from './contexts/task'

const App: React.FC = function () {
  return (
    <SafeAreaView style={appStyle.container}>
      <StatusBar
        animated
        backgroundColor={theme.colors.black}
        showHideTransition="slide"
        hidden
      />

      <Header />

      <TaskProvider>
        <ToDoList />
      </TaskProvider>
    </SafeAreaView>
  )
}

export default App
