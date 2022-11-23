import React from "react"
import { SafeAreaView, StatusBar } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { useTheme } from "@/Hooks"
import { navigationRef } from "./utils"
import SplashContainer from "@/Containers/Splash/SplashContainer"
import HomeNavigation from "@/Navigators/HomeNavigation"

const Stack = createStackNavigator()

// @refresh reset
const RootNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashContainer} />
          <Stack.Screen
            name="Main"
            component={HomeNavigation}
            options={{
              headerShown: false,
              animationEnabled: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
     </SafeAreaView>
  )
}

export default RootNavigator
