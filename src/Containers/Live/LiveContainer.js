import React, { useEffect, useMemo, useState } from "react"
import LiveComponent from "@/Containers/Live/Component/LiveComponent"
import { useDispatch, useSelector } from "react-redux"
import { getNowPlayingList, getStreamParams, getUpNextList } from "@/Store/Live/Live.actions"
import { liveSelector } from "@/Store/Live/Live.reducer"
import { LiveComponentListPropsType, LiveComponentStreamParamsPropsType } from "@/Containers/Live/Types"
import { LibraryComponentListPropsType } from "@/Containers/Library/Types"

const LiveContainer = () => {
  const dispatch = useDispatch()
  const liveReducer = useSelector(liveSelector)
  const [backgroundImage, setBackgroundImage] = useState()

  useEffect(() => {
    if (!liveReducer?.liveParams) {
      dispatch(getStreamParams()).then((responseParams: LiveComponentStreamParamsPropsType) => {
        responseParams?.now_playlist_id && dispatch(getNowPlayingList(responseParams?.now_playlist_id)).then((response: LiveComponentListPropsType) => {
          setBackgroundImage(response?.videos?.[0]?.thumbnail)
        })
        responseParams?.up_next_id && dispatch(getUpNextList(responseParams?.up_next_id))
      }).catch((error) => console.log(error))
    }
  }, [])

  const nowPLayingProps = useMemo((): LibraryComponentListPropsType => {
    return liveReducer?.nowPlayingList && liveReducer?.nowPlayingList
  }, [liveReducer])

  const upNextProps = useMemo((): LibraryComponentListPropsType => {
    return liveReducer?.upNextList && liveReducer?.upNextList
  }, [liveReducer])

  return <LiveComponent backgroundImage={backgroundImage} nowPLayingProps={nowPLayingProps} upNextProps={upNextProps}
                        isLoading={liveReducer?.isLoading} />
}

export default LiveContainer
