import "react-native-gesture-handler"
import React from "react"
import { Provider } from "react-redux"
import RootNavigator from "@/Navigators/RootNavigator"
import "./Translations"
import store from "@/Store/store"

const App = () => (
  <Provider store={store}>
      <RootNavigator />
  </Provider>
)

export default App
