import React from 'react'
import ThemeProvider from '$context/app-theme.context'
import AppStackNavigator from '$navigation/app-stack-navigator.navigation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import FlashMessage from 'react-native-flash-message'
import BootSplash from "react-native-bootsplash";

const App = () => {

  React.useEffect(() => {
    (async () => {
      await BootSplash.hide({ fade: true })
    })()
  }, [])

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
