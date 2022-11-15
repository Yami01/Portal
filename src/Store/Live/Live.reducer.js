import { createSelector } from "reselect"
import {
	GET_STREAM_PARAMS_FAILED,
	GET_STREAM_PARAMS_REQUEST,
	GET_STREAM_PARAMS_SUCCESS,
} from "@/Store/Live/Live.constants"
import type { LiveComponentStreamParamsPropsType } from "@/Containers/Live/Types"

export type LiveReducerType = {
	isLoading: boolean,
	isSuccess: boolean,
	liveParams: LiveComponentStreamParamsPropsType,
	errors: any,
}

const initialState: LiveReducerType = {
	isLoading: false,
	isSuccess: false,
	liveParams: {},
	errors: null,
};

export const liveReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_STREAM_PARAMS_REQUEST:
			return {
				...state,
				isLoading: action.payload,
			};
		case GET_STREAM_PARAMS_SUCCESS:
			return {
				...state,
				isSuccess: true,
				isLoading: false,
				liveParams: action.payload,
				errors: null,
			};
		case GET_STREAM_PARAMS_FAILED:
			return {
				...state,
				isSuccess: false,
				isLoading: false,
				errors: action.payload
			};
	}
	return state;
};

export const liveSelector = createSelector(
	({live}: LiveReducerType) => live,
	(live: LiveReducerType) => live,
);

export default liveReducer;
