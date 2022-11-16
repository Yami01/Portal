import type { AbstractComponent, Node } from "react"
import React, { memo, useMemo } from "react"
import { FlatList, Image, Text, View } from "react-native"
import { useTranslation } from "react-i18next"
import { useTheme } from "@/Hooks"
import type { PropsType } from "@/Containers/Library/Types"
import ScreenLayout from "@/Components/ScreenLayout"
import ScreenContainer from "@/Components/ScreenContainer"
import LibraryComponentStyles from "@/Containers/Library/Styles"

const LibraryComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const { storeListProps, trainingListProps, isLoading } = props
  const { Layout, Fonts, Gutters } = useTheme()
  const { t } = useTranslation()

  const storeListNode = useMemo((): Node => {
    if (!storeListProps) return null

    const renderItem = ({ item }) => {
      return (
        <View style={[Layout.column, LibraryComponentStyles.listItem]}>
          <Image style={[LibraryComponentStyles.imageContainer]}
                 source={{ uri: item?.thumbnail }}
                 defaultSource={require("@/Assets/Images/demo.png")}
                 resizeMode={"cover"} />
          <Text style={[Fonts.textRegular]}>{item?.name}</Text>
        </View>
      )
    }

    return (
      <View style={[LibraryComponentStyles.listContainer]}>
        <Text style={[LibraryComponentStyles.listName]}>{storeListProps?.name}</Text>
        <FlatList
          horizontal
          data={storeListProps?.videos}
          keyExtractor={(item, index) => `${index}`}
          renderItem={renderItem}
        />
      </View>
    )
  }, [storeListProps])

  const trainingNode = useMemo((): Node => {
    if (!trainingListProps) return null

    const renderItem = ({ item }) => {
      return (
        <View style={[Layout.column, LibraryComponentStyles.listItem]}>
          <Image style={[LibraryComponentStyles.imageContainer]}
                 source={{ uri: item?.thumbnail }}
                 defaultSource={require("@/Assets/Images/demo.png")}
                 resizeMode={"cover"} />
          <Text style={[Fonts.textRegular]}>{item?.name}</Text>
        </View>
      )
    }

    return (
      <View style={[LibraryComponentStyles.listContainer]}>
        <Text style={[LibraryComponentStyles.listName]}>{trainingListProps?.name}</Text>
        <FlatList
          horizontal
          data={trainingListProps?.videos}
          keyExtractor={(item, index) => `${index}`}
          renderItem={(item) => renderItem(item)}
        />
      </View>
    )
  }, [])

  return (
    <ScreenContainer showLoaderModal={isLoading} backgroundType={"image"}
                     backgroundImage={require("@/Assets/Images/demo.png")}>
      <View style={[Layout.row4]} />
      <ScreenLayout scrollable style={[Gutters.regularBPadding]}>
        <View style={[Gutters.regularBPadding]}>
          {storeListNode}
          {trainingNode}
        </View>
      </ScreenLayout>
    </ScreenContainer>
  )
})


export default LibraryComponent
