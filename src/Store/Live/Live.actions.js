import { getNowPlayingListService, getStreamParamsService } from "@/Store/Live/Live.service"
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
import { LiveComponentListPropsType, LiveComponentStreamParamsPropsType } from "@/Containers/Live/Types"

export function getStreamParams() {
	return (dispatch) => {
		const toggleLoading = (isLoading) => dispatch({type: GET_STREAM_PARAMS_REQUEST, payload: isLoading});
		return new Promise((resolve, reject) => {
			toggleLoading(true);

			new getStreamParamsService()
				.then((streamParamsResponse: LiveComponentStreamParamsPropsType) => {
					dispatch({type: GET_STREAM_PARAMS_SUCCESS, payload: streamParamsResponse});
					resolve(streamParamsResponse);
				})
				.catch((error) => {
					dispatch({type: GET_STREAM_PARAMS_FAILED, payload: error});
					reject(error);
				})
				.finally(() => {
					toggleLoading(false);
				});
		});
	};
}

export function getNowPlayingList(id: number) {
	return (dispatch) => {
		const toggleLoading = (isLoading) => dispatch({type: GET_NOW_PLAYING_LIST_REQUEST, payload: isLoading});
		return new Promise((resolve, reject) => {
			toggleLoading(true);

			new getNowPlayingListService(id)
				.then((nowPlayingListResponse: LiveComponentListPropsType) => {
					dispatch({type: GET_NOW_PLAYING_LIST_SUCCESS, payload: nowPlayingListResponse});
					resolve(nowPlayingListResponse);
				})
				.catch((error) => {
					dispatch({type: GET_NOW_PLAYING_LIST_FAILED, payload: error});
					reject(error);
				})
				.finally(() => {
					toggleLoading(false);
				});
		});
	};
}

export function getUpNextList(id: number) {
	return (dispatch) => {
		const toggleLoading = (isLoading) => dispatch({type: GET_UP_NEXT_LIST_REQUEST, payload: isLoading});
		return new Promise((resolve, reject) => {
			toggleLoading(true);

			new getNowPlayingListService(id)
				.then((upNextListResponse: LiveComponentListPropsType) => {
					dispatch({type: GET_UP_NEXT_LIST_SUCCESS, payload: upNextListResponse});
					resolve(upNextListResponse);
				})
				.catch((error) => {
					dispatch({type: GET_UP_NEXT_LIST_FAILED, payload: error});
					reject(error);
				})
				.finally(() => {
					toggleLoading(false);
				});
		});
	};
}
