/**
 *
 * LoginStack
 * @format
 *
 */

import type {AbstractComponent, Node} from 'react'
import React, {memo, useMemo} from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import {ROUTES} from './config'

import type {PropsType, RouteType} from './types'

const Tab = createBottomTabNavigator()

const TabNavigation: AbstractComponent<PropsType> = memo((): Node => {
  const firstRouteName = useMemo((): string => {
    return ROUTES[0]?.name || ''
  }, [])

  return (
    <Tab.Navigator
      initialRouteName={firstRouteName}
      screenOptions={{
        tabBarVisible: false,
      }}
    >
      {ROUTES.map((route: RouteType): Node => {
        const { key, name, screen } = route
        return (
          <Tab.Screen
            key={key}
            name={name}
            component={screen}
            options={{
              headerShown: false,
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
})

export default TabNavigation
