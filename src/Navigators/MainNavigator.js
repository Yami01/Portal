import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { useTheme } from '@/Hooks'
import { navigationRef } from './utils'
import TabNavigation from '@/Navigators/TabNavigation'
import SplashContainer from '@/Containers/Splash/SplashContainer'
import AuthNavigation from '@/Navigators/AuthNavigation'

const Stack = createStackNavigator()

// @refresh reset
const MainNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Splash" component={SplashContainer} />
          <Stack.Screen
            name="Auth"
            component={AuthNavigation}
            options={{
              animationEnabled: false,
            }}
          />
          <Stack.Screen
            name="Main"
            component={TabNavigation}
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

export default MainNavigator
