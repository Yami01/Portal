import type { AbstractComponent, Node } from "react"
import React, { memo, useMemo } from "react"
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import ScreenLayout from "@/Components/ScreenLayout"
import ScreenContainer from "@/Components/ScreenContainer"
import type { PropsType } from "@/Containers/Live/Types"
import Button from "@/Components/Button"
import { PlayIcon } from "@/Assets/Icons"
import LiveComponentStyles from "@/Containers/Live/Styles"

const LiveComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const { nowPLayingProps, upNextProps, isLoading, backgroundImage, onPressVideo, onStartNowPlayingList } = props
  const { t } = useTranslation()
  const { Common, Fonts, Gutters, Layout } = useTheme()

  const buttonNode = useMemo((): Node => {
    return (
      <View style={{ marginBottom: 60, width: 160 }}>
        <Button label={"Play"} iconComponent={<PlayIcon />} onPress={onStartNowPlayingList} />
      </View>
    )
  }, [])

  const nowPlayListNode = useMemo((): Node => {
    if (!nowPLayingProps) return null

    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity style={[Layout.column, LiveComponentStyles.listItem]} onPress={() => onPressVideo(item)}>
          <Image style={[LiveComponentStyles.imageContainer]}
                 source={{ uri: item?.thumbnail }}
                 defaultSource={require("@/Assets/Images/demo.png")}
                 resizeMode={"cover"} />
          <Text style={[Fonts.textRegular]}>{item?.name}</Text>
        </TouchableOpacity>
      )
    }
    return (
      <View style={[LiveComponentStyles.listContainer]}>
        <Text style={[LiveComponentStyles.listName]}>{nowPLayingProps?.name}</Text>
        <FlatList
          horizontal
          data={nowPLayingProps?.videos}
          keyExtractor={(item, index) => `${index}`}
          renderItem={(item) => renderItem(item)}
        />
      </View>
    )
  }, [nowPLayingProps])

  const upNextNode = useMemo((): Node => {
    if (!upNextProps) return null

    const renderItem = ({ item }) => {
      return (
        <View style={[Layout.column, LiveComponentStyles.listItem]}>
          <Image style={[LiveComponentStyles.imageContainer]}
                 source={{ uri: item?.thumbnail }}
                 defaultSource={require("@/Assets/Images/demo.png")}
                 resizeMode={"cover"} />
          <Text style={[Fonts.textRegular]}>{item?.name}</Text>
        </View>
      )
    }

    return (
      <View style={[LiveComponentStyles.listContainer]}>
        <Text style={[LiveComponentStyles.listName]}>{upNextProps?.name}</Text>
        <FlatList
          horizontal
          data={upNextProps?.videos}
          keyExtractor={(item, index) => `${index}`}
          renderItem={(item) => renderItem(item)}
        />
      </View>
    )
  }, [upNextProps])

  return (
    <ScreenContainer showLoaderModal={isLoading} backgroundType={"image"}
                     backgroundImage={{ uri: backgroundImage }}>
      <View style={[Layout.row3]} />
      <ScreenLayout scrollable style={[Gutters.regularBPadding]}>
        {buttonNode}
        <View style={[Gutters.regularBPadding]}>
          {nowPlayListNode}
          {upNextNode}
        </View>
      </ScreenLayout>
    </ScreenContainer>
  )
})

export default React.memo(LiveComponent)
