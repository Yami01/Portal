import type { AbstractComponent, Node } from "react"
import React, { memo } from "react"
import { Text, useWindowDimensions, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import type { PropsType } from "@/Containers/Home/Types"
import { SceneMap, TabBar, TabBarItem, TabView } from "react-native-tab-view"
import { useForm } from "react-hook-form"
import Input from "@/Components/Input"
import { TouchableOpacity } from "react-native-gesture-handler"
import { Colors } from "@/Theme/Variables"
import LiveContainer from "@/Containers/Live/LiveContainer"
import ScreenContainer from "@/Components/ScreenContainer"
import ScreenLayout from "@/Components/ScreenLayout"
import LibraryContainer from "@/Containers/Library/LibraryContainer"

const HomeComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {} = props
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const {
   control,
   handleSubmit,
   formState: {errors},
   clearErrors,
  } = useForm({
  //  resolver: yupResolver(loginSchema),
   defaultValues: {
    userName: '',
    password: '',
   },
  //  mode: 'onBlur',
  //  reValidateMode: 'onChange',
  });

  const FirstRoute = () => (<LiveContainer />)

  const SecondRoute = () => (<LibraryContainer />
  )

  const ThirdRoute = () => (
    <ScreenContainer backgroundType={"image"} backgroundImage={require("@/Assets/Images/bgr_login.png")}>
    		<View style={{height : '25%'}}/>
        <ScreenLayout scrollable style={[Layout.fill]}>
      <View style={{
        paddingBottom: 20,
        paddingLeft: 40,
        paddingRight: 40,
        width: '100%',
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        shadowOpacity: 0.55,
        shadowRadius: 14.78,
        elevation: 50,
      }}>
        <Text style={{ color: "white", fontSize: 24, textAlign: 'center',paddingBottom : 20,paddingTop : 20}}>Đăng nhập tài khoản</Text>
        <Input label={''} fieldName={'userName'} control={control} placeholder = {'Tên đăng nhập'}
        onBlur = {() => {
          if(control.userName === ' ') {
            console.log("askldfndkf");
          }
        }}
        />
        <View style = {{ height: 10 }}/>
        <Input label={''} fieldName={'password'} control={control} placeholder = {'Mật khẩu'} />

      <View style = {{flexDirection : "row",justifyContent: 'space-between',marginTop : 20}}>
            <TouchableOpacity style={{backgroundColor: 'red', borderRadius: 10, borderWidth: 1,
                borderColor: 'black'}}>
              <Text style={{
                padding: 10,
                width: '100%',
                textAlign: 'center',


              }}>
                Button
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={{
                borderWidth: 1,
                borderRadius: 10,
                textAlign: 'center',
                borderColor: 'black',
                color:'red'
              }}>
                Button
              </Text>
            </TouchableOpacity>
        </View>
      </View>
    </ScreenLayout>
    </ScreenContainer>
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
