import React, { AbstractComponent, memo, Node } from "react"
import { Text, useWindowDimensions } from "react-native"
import { useTranslation } from "react-i18next"
import type { PropsType } from "@/Containers/Home/Types"
import { SceneMap, TabBar, TabBarItem, TabView } from "react-native-tab-view"
import { Colors } from "@/Theme/Variables"
import LiveContainer from "@/Containers/Live/LiveContainer"
import LibraryContainer from "@/Containers/Library/LibraryContainer"
import ProfileContainer from "@/Containers/Profile/ProfileContainer"
import HomeComponentStyles from "@/Containers/Home/Styles"

const HomeComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {} = props;
  const { t } = useTranslation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const routes = [
    { key: "first", title: "Trực tiếp" },
    { key: "second", title: "Thư viện" },
    { key: "third", title: "Tài khoản" },
  ]

  const FirstRoute = () => (<LiveContainer />)

  const SecondRoute = () => (<LibraryContainer />)

  const ThirdRoute = () => (<ProfileContainer />)

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  })

  const renderLabel = ({ route, focused }) => {
    if (focused) {
      return (<Text style={[HomeComponentStyles.activeTabLabel]}>{route?.title}</Text>)
    } else
      return <Text style={[HomeComponentStyles.inActiveTabLabel]}>{route?.title}</Text>
  }

  const renderTabBarItem = (props) => {
    const activeTab = props?.route?.key === props?.navigationState?.routes[index]?.key

    return (
      <TabBarItem
        key={props?.route?.key}
        {...props}
        style={[activeTab && HomeComponentStyles.activeTab]}
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
        style={[HomeComponentStyles.tabBarContainer]}
      />
    )
  }

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  )
})

export default React.memo(HomeComponent)
