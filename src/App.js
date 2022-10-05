import "react-native-gesture-handler"
import React from "react"
import {Provider} from "react-redux"
import {PersistGate} from "redux-persist/lib/integration/react"
import {persistor, store} from "@/Store"
import RootNavigator from "@/Navigators/RootNavigator"
import "./Translations"

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <RootNavigator />
    </PersistGate>
  </Provider>
)

export default App
