import { createSelector } from "reselect"
import {
  GET_NOW_PLAYING_LIST_FAILED,
  GET_NOW_PLAYING_LIST_REQUEST,
  GET_NOW_PLAYING_LIST_SUCCESS,
  GET_STREAM_PARAMS_FAILED,
  GET_STREAM_PARAMS_REQUEST,
  GET_STREAM_PARAMS_SUCCESS,
  GET_UP_NEXT_LIST_FAILED,
  GET_UP_NEXT_LIST_REQUEST,
  GET_UP_NEXT_LIST_SUCCESS,
} from "@/Store/Live/Live.constants"
import type { LiveComponentStreamParamsPropsType } from "@/Containers/Live/Types"
import { LibraryComponentListPropsType } from "@/Containers/Library/Types"

export type LiveReducerType = {
  isLoading: boolean,
  isSuccess: boolean,
  liveParams: LiveComponentStreamParamsPropsType,
  nowPlayingList: LibraryComponentListPropsType,
  upNextList: LibraryComponentListPropsType,
  errors: any,
}

const initialState: LiveReducerType = {
  isLoading: false,
  isSuccess: false,
  liveParams: undefined,
  nowPlayingList: undefined,
  upNextList: undefined,
  errors: null,
}

export const liveReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STREAM_PARAMS_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      }
    case GET_STREAM_PARAMS_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        liveParams: action.payload,
        errors: null,
      }
    case GET_STREAM_PARAMS_FAILED:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        errors: action.payload,
      }

    case GET_NOW_PLAYING_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      }
    case GET_NOW_PLAYING_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        nowPlayingList: action.payload,
        errors: null,
      }
    case GET_NOW_PLAYING_LIST_FAILED:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        errors: action.payload,
      }

    case GET_UP_NEXT_LIST_REQUEST:
      return {
        ...state,
        isLoading: action.payload,
      }
    case GET_UP_NEXT_LIST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
        upNextList: action.payload,
        errors: null,
      }
    case GET_UP_NEXT_LIST_FAILED:
      return {
        ...state,
        isSuccess: false,
        isLoading: false,
        errors: action.payload,
      }
  }
  return state
}

export const liveSelector = createSelector(
  ({ live }: LiveReducerType) => live,
  (live: LiveReducerType) => live,
)

export default liveReducer
