import { AbstractComponent, Node, useState } from "react"
import React, { memo } from "react"
import { Text, useWindowDimensions, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import type { PropsType } from "@/Containers/Home/Types"
import { SceneMap, TabBar, TabBarItem, TabView } from "react-native-tab-view"
import Input from "@/Components/Input"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Colors } from "@/Theme/Variables"
import LiveContainer from "@/Containers/Live/LiveContainer"
import ScreenContainer from "@/Components/ScreenContainer"
import ScreenLayout from "@/Components/ScreenLayout"
import LibraryContainer from "@/Containers/Library/LibraryContainer"
import ProfileComponent from "@/Containers/Profile/Component/ProfileComponent"

const HomeComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {} = props
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()


  const FirstRoute = () => (<LiveContainer />)

  const SecondRoute = () => (<LibraryContainer />
  )

  const ThirdRoute = () => (<ProfileComponent />)

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  })

  const layout = useWindowDimensions()

  const [index, setIndex] = React.useState(0)
  const [routes] = React.useState([
    { key: "first", title: "Trực tiếp" },
    { key: "second", title: "Thư viện" },
    { key: "third", title: "Tài khoản" },
  ])

  const renderLabel = ({ route, focused }) => {
    if (focused) {
      return (<Text style={{ color: "white" }}>{route.title}</Text>)
    } else
      return <Text style={{ color: "black" }}>{route.title}</Text>
  }

  const renderTabBarItem = (props) => {
    return (
      <TabBarItem
        key={props.route.key}
        {...props}
        renderLabel={renderLabel}
      />
    )
  }

  const renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={[{ backgroundColor: Colors.transparent }]}
        renderTabBarItem={renderTabBarItem}
        style={{
          backgroundColor: "rgba(51, 51, 51, 0.68)",
          position: "absolute",
          top: 20,
          width: "50%",
          borderRadius: 50,
          alignSelf: "center",
        }}
      />
    )
  }

  return (
    <>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </>
  )
})

export default HomeComponent
