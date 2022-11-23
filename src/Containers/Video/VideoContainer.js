import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { liveSelector } from "@/Store/Live/Live.reducer"
import VideoComponent from "@/Containers/Video/Component/VideoComponent"
import type { LiveComponentListVideosPropsType } from "@/Containers/Live/Types"
import { SCREEN_TYPE } from "@/Containers/Live/Config"

const VideoContainer = ({ route }) => {
  const liveReducer = useSelector(liveSelector)
  const [currentVideo, setCurrentVideo] = useState([])
  // const [mockVideo, setMockVideo] = useState(["u5VqZmwmEJc", "tPEE9ZwTmy0", "a3HZ8S2H-GQ", "3HFBR0UQPes"]);
  const [videoIndex, setVideoIndex] = useState()

  useEffect(() => {
    if (route?.params?.screenType === SCREEN_TYPE.LIVE) {
      const videoList = liveReducer?.nowPlayingList?.videos.map((video: LiveComponentListVideosPropsType) => video?.url?.split("?v=")?.[1])
      setCurrentVideo(videoList)
      if (route?.params?.video) {
        const index = liveReducer?.nowPlayingList?.videos.indexOf(route?.params)
        setVideoIndex(index)
      }
    } else {
      const singleVideo = route?.params?.video?.url?.split("?v=")?.[1]
      setCurrentVideo([singleVideo])
    }
  }, [])

  return <VideoComponent videoProps={currentVideo} videoIndex={videoIndex} />
}

export default VideoContainer
