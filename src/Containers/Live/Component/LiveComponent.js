import type { AbstractComponent, Node } from "react"
import React, { memo, useMemo } from "react"
import { FlatList, Image, ScrollView, Text, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import ScreenLayout from "@/Components/ScreenLayout"
import ScreenContainer from "@/Components/ScreenContainer"
import type { PropsType } from "@/Containers/Home/Types"
import Button from "@/Components/Button"
import { PlayIcon } from "@/Assets/Icons"
import LiveComponentStyles from "@/Containers/Live/Styles"

const LiveComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const {} = props
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const buttonNode = useMemo((): Node => {
    return (
      <View style={{ marginBottom: 60 }}>
        <Button label={"Play"} iconComponent={<PlayIcon />} onPress={() => {
        }} />
      </View>
    )
  }, [])

  const nowPlayListNode = useMemo((): Node => {
    const mockList = [
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
    ]
    const renderItem = (item: any) => {
      return (
        <View style={[Layout.column, LiveComponentStyles.listItem]}>
          <Image style={[LiveComponentStyles.imageContainer]}
                 source={require("@/Assets/Images/demo.png")} resizeMode={"cover"} />
          <Text style={[Fonts.textRegular]}>Apple Store in Thailand</Text>
        </View>
      )
    }
    return (
      <View style={{ marginBottom: 52 }}>
        <Text style={[Fonts.textRegular, { marginBottom: 32 }]}>Now playing</Text>
        <FlatList
          horizontal
          data={mockList}
          keyExtractor={(item, index) => `${index}`}
          renderItem={(item) => renderItem(item)}
        />
      </View>
    )
  }, [])

  const upNextNode = useMemo((): Node => {
    const mockList2 = [
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
      {
        image: require("@/Assets/Images/demo.png"),
      },
    ]
    const renderItem = (item: any) => {
      return (
        <View style={[Layout.column, LiveComponentStyles.listItem]}>
          <Image
            style={[LiveComponentStyles.imageContainer]}
            source={require("@/Assets/Images/demo.png")}
            resizeMode={"cover"}
          />
          <Text style={[Fonts.textRegular]}>Apple Store in Thailand</Text>
        </View>
      )
    }

    return (
      <View style={{ marginBottom: 52 }}>
        <Text style={[Fonts.textRegular, { marginBottom: 32 }]}>Up next</Text>
        <FlatList
          horizontal
          data={mockList2}
          keyExtractor={(item, index) => `${index}`}
          renderItem={(item) => renderItem(item)}
        />
      </View>
    )
  }, [])

  return (
    <ScreenContainer backgroundType={"image"} backgroundImage={require("@/Assets/Images/TOM.png")}>
      <View style={[Layout.row3]} />
      <ScreenLayout scrollable style={{ paddingBottom: 20 }}>
        {buttonNode}
        <View style={{ paddingBottom: 20 }}>
          {nowPlayListNode}
          {upNextNode}
        </View>
      </ScreenLayout>
    </ScreenContainer>
  )
})

export default LiveComponent
