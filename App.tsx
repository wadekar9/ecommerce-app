import React from 'react'
import ThemeProvider from '$context/app-theme.context'
import AppStackNavigator from '$navigation/app-stack-navigator.navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

const App = () => {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppStackNavigator />
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

export default App
