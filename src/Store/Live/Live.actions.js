import { getStreamParamsService } from "@/Store/Live/Live.service"
import {
	GET_STREAM_PARAMS_FAILED,
	GET_STREAM_PARAMS_REQUEST,
	GET_STREAM_PARAMS_SUCCESS,
} from "@/Store/Live/Live.constants"
import { LiveComponentStreamParamsPropsType } from "@/Containers/Live/Types"

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
