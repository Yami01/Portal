import React, { useCallback, useEffect, useMemo, useState } from "react"
import LiveComponent from "@/Containers/Live/Component/LiveComponent"
import { useDispatch, useSelector } from "react-redux"
import { getNowPlayingList, getStreamParams, getUpNextList } from "@/Store/Live/Live.actions"
import { liveSelector } from "@/Store/Live/Live.reducer"
import { LiveComponentListVideosPropsType, LiveComponentStreamParamsPropsType } from "@/Containers/Live/Types"
import { LibraryComponentListPropsType } from "@/Containers/Library/Types"
import { navigate } from "@/Navigators/utils"
import { SCREEN_TYPE } from "@/Containers/Live/Config"

const LiveContainer = () => {
  const dispatch = useDispatch()
  const liveReducer = useSelector(liveSelector)
  const [backgroundImage, setBackgroundImage] = useState()

  useEffect(() => {
    if (!liveReducer?.liveParams) {
      dispatch(getStreamParams()).then((responseParams: LiveComponentStreamParamsPropsType) => {
        responseParams?.now_playlist_id && !liveReducer?.nowPlayingList && dispatch(getNowPlayingList(responseParams?.now_playlist_id))
        responseParams?.up_next_id && !liveReducer?.upNextList && dispatch(getUpNextList(responseParams?.up_next_id))
      }).catch((error) => console.log(error))
    }
  }, [])

  useEffect(() => {
    if (liveReducer?.upNextList && !backgroundImage) setBackgroundImage(liveReducer?.upNextList?.videos?.[0]?.thumbnail)
  }, [liveReducer?.upNextList])

  const nowPLayingProps = useMemo((): LibraryComponentListPropsType => {
    return liveReducer?.nowPlayingList && liveReducer?.nowPlayingList
  }, [liveReducer?.nowPlayingList])

  const upNextProps = useMemo((): LibraryComponentListPropsType => {
    return liveReducer?.upNextList && liveReducer?.upNextList
  }, [liveReducer?.upNextList])

  const onStartNowPlayingList = useCallback(() => {
    navigate("Video", {
      screenType: SCREEN_TYPE.LIVE,
    })
  }, [])

  const onPressVideo = useCallback((videoItem: LiveComponentListVideosPropsType) => {
    setBackgroundImage(videoItem?.thumbnail)
    navigate("Video", {
      screenType: SCREEN_TYPE.LIVE,
      video: videoItem,
    })
  }, [])

  return <LiveComponent backgroundImage={backgroundImage}
                        nowPLayingProps={nowPLayingProps}
                        upNextProps={upNextProps}
                        onStartNowPlayingList={onStartNowPlayingList}
                        onPressVideo={onPressVideo}
                        isLoading={liveReducer?.isLoading} />
}

export default React.memo(LiveContainer)
