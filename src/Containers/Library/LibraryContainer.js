import React, { useEffect, useMemo } from "react"
import LibraryComponent from "@/Containers/Library/Component/LibraryComponent"
import { useDispatch, useSelector } from "react-redux"
import { getListLibraryVideos } from "@/Store/Library/Library.actions"
import { librarySelector } from "@/Store/Library/Library.reducer"
import { LibraryComponentListPropsType } from "@/Containers/Library/Types"

const LibraryContainer = () => {
  const dispatch = useDispatch()
  const libraryReducer = useSelector(librarySelector)

  useEffect(() => {
    if (!libraryReducer?.trainingList || !libraryReducer?.storeList) dispatch(getListLibraryVideos());
  }, [])

  const storeListProps = useMemo((): LibraryComponentListPropsType => {
    return libraryReducer?.storeList && libraryReducer?.storeList
  }, [libraryReducer])

  const trainingListProps = useMemo((): LibraryComponentListPropsType => {
    return libraryReducer?.trainingList && libraryReducer?.trainingList
  }, [libraryReducer])

  return <LibraryComponent isLoading={libraryReducer?.isLoading} storeListProps={storeListProps}
                           trainingListProps={trainingListProps} />
}

export default LibraryContainer
