/**
 *
 * @format
 * @flow
 *
 */

import type { BottomTabPageNavigationPropsType } from '@types/Navigation'
import type { ComponentType } from 'react'

export type PropsType = {}

export type RouteType = {
  key: string,
  name: string,
  title: string,
  screen: ComponentType<{ ...BottomTabPageNavigationPropsType<>, ... }>,
}
