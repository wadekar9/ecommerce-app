import React from 'react'
import ThemeProvider from '$context/app-theme.context'
import AppStackNavigator from '$navigation/app-stack-navigator.navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import FlashMessage from 'react-native-flash-message'

const App = () => {
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppStackNavigator />
      </GestureHandlerRootView>

      <FlashMessage position={'top'} />
    </ThemeProvider>
  )
}

export default App
