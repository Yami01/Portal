/**
 *
 * TabNavigation configs
 * @format
 *
 */
import ProfileContainer from '@/Containers/Profile/ProfileContainer'
import StatisticContainer from '@/Containers/Statistic/StaticticContainer'
import HomeNavigation from "@/Navigators/HomeNavigation";

export const ROUTES = [
  {
    key: 'home',
    name: 'MainHome',
    title: 'MainHome',
    screen: HomeNavigation,
  },
  {
    key: 'statistic',
    name: 'MainStatistic',
    title: 'MainStatistic',
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
    name: 'MainProfile',
    title: 'MainProfile',
    screen: ProfileContainer,
  },
]
