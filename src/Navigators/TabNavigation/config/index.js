/**
 *
 * TabNavigation configs
 * @format
 * @flow
 *
 */
import { ExampleContainer } from '@/Containers'
import ProfileContainer from '@/Containers/Profile/ProfileContainer'
import StatisticContainer from '@/Containers/Statistic/StaticticContainer'
import HomeContainer from '@/Containers/Home/HomeContainer'

export const ROUTES = [
  {
    key: 'home',
    name: 'Home',
    title: 'Home',
    screen: HomeContainer,
  },
  {
    key: 'statistic',
    name: 'Statistic',
    title: 'Statistic',
    screen: StatisticContainer,
  },
  // {
  //   key: 'publishedDocuments',
  //   name: 'Published Doc',
  //   title: 'Published Doc',
  //   screen: ExampleContainer,
  // },
  // {
  //   key: 'documents',
  //   name: 'Documents',
  //   title: 'Documents',
  //   screen: ExampleContainer,
  // },
  {
    key: 'profile',
    name: 'Profile',
    title: 'Profile',
    screen: ProfileContainer,
  },
]
