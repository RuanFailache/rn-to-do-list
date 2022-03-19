import React from 'react'

import { SafeAreaView, StatusBar } from 'react-native'

import { theme, appStyle } from './utils'
import { ToDoList } from './views'
import { Header } from './components'

const data: string[] = [
  // 'teste 1',
  // 'teste 2',
  // 'teste 3',
  // 'teste 4',
  // 'teste 5',
  // 'teste 6',
  // 'teste 7',
  // 'teste 8',
  // 'teste 9',
  // 'teste 10',
  // 'teste 11',
  // 'teste 12',
  // 'teste 13',
  // 'teste 14',
  // 'teste 15',
  // 'teste 16',
  // 'teste 17',
  // 'teste 18',
  // 'teste 19',
  // 'teste 20',
  // 'teste 21',
]

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

      <ToDoList tasks={data} />
    </SafeAreaView>
  )
}

export default App
