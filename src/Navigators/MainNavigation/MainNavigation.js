/**
 *
 * MainNavigation
 * @format
 *
 */

import type {AbstractComponent, Node} from 'react'
import React, {memo} from 'react'
import {createStackNavigator} from '@react-navigation/stack'

import {ROUTES} from './config'

import type {PropsType} from './types'

const Stack = createStackNavigator()

const MainNavigation: AbstractComponent<PropsType> = memo((): Node => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Tab"
    >
      {ROUTES.map((stackRoute: Obj): Node => {
        const { name, screen, options: routeOptions } = stackRoute
        return (
          <Stack.Screen
            key={name}
            name={name}
            component={screen}
            options={routeOptions}
          />
        )
      })}
    </Stack.Navigator>
  )
})

export default MainNavigation
