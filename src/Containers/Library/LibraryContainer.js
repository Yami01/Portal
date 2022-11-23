import React, { useCallback, useEffect, useMemo, useState } from "react"
import LibraryComponent from "@/Containers/Library/Component/LibraryComponent"
import { useDispatch, useSelector } from "react-redux"
import { getListLibraryVideos } from "@/Store/Library/Library.actions"
import { librarySelector } from "@/Store/Library/Library.reducer"
import { LibraryComponentListPropsType } from "@/Containers/Library/Types"
import { LiveComponentListVideosPropsType } from "@/Containers/Live/Types"
import { navigate } from "@/Navigators/utils"
import { SCREEN_TYPE } from "@/Containers/Live/Config"

const LibraryContainer = () => {
  const dispatch = useDispatch()
  const libraryReducer = useSelector(librarySelector)
  const [backgroundImage, setBackgroundImage] = useState()

  useEffect(() => {
    if (!libraryReducer?.trainingList || !libraryReducer?.storeList) dispatch(getListLibraryVideos())
  }, [])

  useEffect(() => {
    if (libraryReducer?.storeList && !backgroundImage) setBackgroundImage(libraryReducer?.storeList?.videos?.[0]?.thumbnail)
  }, [libraryReducer?.storeList])

  const storeListProps = useMemo((): LibraryComponentListPropsType => {
    return libraryReducer?.storeList && libraryReducer?.storeList
  }, [libraryReducer?.storeList])

  const trainingListProps = useMemo((): LibraryComponentListPropsType => {
    return libraryReducer?.trainingList && libraryReducer?.trainingList
  }, [libraryReducer?.trainingList])

  const onPressVideo = useCallback((videoItem: LiveComponentListVideosPropsType) => {
    setBackgroundImage(videoItem?.thumbnail)
    navigate("Video", {
      screenType: SCREEN_TYPE.LIBRARY,
      video: videoItem,
    })
  }, [])

  return <LibraryComponent isLoading={libraryReducer?.isLoading}
                           storeListProps={storeListProps}
                           onPressVideo={onPressVideo}
                           backgroundImage={backgroundImage}
                           trainingListProps={trainingListProps} />
}

export default React.memo(LibraryContainer)
