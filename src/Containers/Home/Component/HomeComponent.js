import type { AbstractComponent, Node } from "react"
import React, { memo } from "react"
import { Text, useWindowDimensions, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import ScreenLayout from "@/Components/ScreenLayout"
import ScreenContainer from "@/Components/ScreenContainer"
import { Button } from "@ant-design/react-native"
import type { PropsType } from "@/Containers/Home/Types"
import { SceneMap, TabBar, TabBarItem, TabView } from "react-native-tab-view"

const HomeComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const { slider, onSelectedIndexChange, selectedIndex } = props
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const FirstRoute = () => (
    <ScreenContainer backgroundType={"image"} backgroundImage={require("@/Assets/Images/TOM.png")}>
			<View style={[Layout.row4]}/>
      <ScreenLayout scrollable style={[Layout.fill]}>
				<Button type={'primary'} size={'large'} onPress={() => {}}>
					Create new password
				</Button>
      </ScreenLayout>
    </ScreenContainer>
  )

  const SecondRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
  )

  const ThirdRoute = () => (
    <View style={{ flex: 1, backgroundColor: "#673ab7" }} />
  )

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
      return (<Text style={{color: 'white'}}>{route.title}</Text>)
    } else
      return <Text style={{color: 'black'}}>{route.title}</Text>
  }

  const renderTabBarItem = (props) => {
  	console.log(props.focused)
		return (
			<TabBarItem
				key={props.route.key}
				{...props}
				renderLabel={renderLabel}
			/>
		)
	}

  const renderTabBar = props => {
    console.log(props?.navigationState?.routes[props?.navigationState?.index])
    const focused = props?.navigationState?.routes[props?.navigationState?.index] === props?.navigationState?.index
    console.log(focused)
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: "transparent" }}
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
