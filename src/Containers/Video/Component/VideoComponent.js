import type { AbstractComponent, Node } from "react"
import React, { memo, useMemo } from "react"
import { useTheme } from "@/Hooks"
import ScreenContainer from "@/Components/ScreenContainer"
import type { PropsType } from "@/Containers/Video/Types"
import VideoComponentStyles from "@/Containers/Video/Styles"
import YouTube from "react-native-youtube"
import { YOUTUBE_API_KEY } from "@/Containers/Video/Config"

const VideoComponent: AbstractComponent<PropsType> = memo((props: PropsType): Node => {
  const { videoProps, videoIndex } = props
  const { Common, Fonts, Gutters, Layout } = useTheme()
  const videoPlayer = React.useRef()

  const videoNode = useMemo((): Node => {
    return (
      <YouTube
        ref={(ref) => {
          videoPlayer.current = ref
          if (videoIndex) ref?.current?.playVideoAt(videoIndex)
        }}
        videoIds={videoProps}
        fullscreen
        loop
        rel={false}
        showFullscreenButton={false}
        style={[VideoComponentStyles.videoContainer]}
        apiKey={YOUTUBE_API_KEY} />
    )
  }, [videoProps, videoIndex])

  return (
    <ScreenContainer>
      {videoNode}
    </ScreenContainer>
  )
})

export default VideoComponent
