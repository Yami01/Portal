import { createSelector } from "reselect"
import {
	GET_LIST_LIBRARY_FAILED,
	GET_LIST_LIBRARY_REQUEST,
	GET_LIST_LIBRARY_SUCCESS,
} from "@/Store/Library/Library.constants"
import { LibraryComponentListPropsType } from "@/Containers/Library/Types"

export type LibraryReducerType = {
	isLoading: boolean,
	isSuccess: boolean,
	storeList: LibraryComponentListPropsType,
	trainingList: LibraryComponentListPropsType,
	errors: any,
}

const initialState: LibraryReducerType = {
	isLoading: false,
	isSuccess: false,
	storeList: undefined,
	trainingList: undefined,
	errors: null,
};

export const libraryReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_LIBRARY_REQUEST:
			return {
				...state,
				isLoading: action.payload,
			};
		case GET_LIST_LIBRARY_SUCCESS:
			return {
				...state,
				isSuccess: true,
				isLoading: false,
				storeList: action.payload[0],
				trainingList: action.payload[1],
				errors: null,
			};
		case GET_LIST_LIBRARY_FAILED:
			return {
				...state,
				isSuccess: false,
				isLoading: false,
				errors: action.payload
			};
	}
	return state;
};

export const librarySelector = createSelector(
	({library}: LibraryReducerType) => library,
	(library: LibraryReducerType) => library,
);

export default libraryReducer;
