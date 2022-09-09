/**
 *
 * AuthNavigation
 * @format
 * @flow
 *
 */

import React, { memo } from 'react'
import type { Node, AbstractComponent } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ROUTES } from './config'

import type { PropsType } from './types'

const Stack = createStackNavigator()

const AuthNavigation: AbstractComponent<PropsType> = memo((): Node => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Login"
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

export default AuthNavigation
