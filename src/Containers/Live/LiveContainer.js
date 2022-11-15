import React, { useEffect } from "react"
import LiveComponent from "@/Containers/Live/Component/LiveComponent"
import { useDispatch, useSelector } from "react-redux"
import { getStreamParams } from "@/Store/Live/Live.actions"
import { liveSelector } from "@/Store/Live/Live.reducer"

const LiveContainer = () => {
  const dispatch = useDispatch();
  const liveReducer = useSelector(liveSelector);

  useEffect(() => {
    dispatch(getStreamParams()).then(() => {

    }).catch((error) => console.log(error))
  },[]);

  console.log(liveReducer?.liveParams);
  return <LiveComponent />
}

export default LiveContainer
