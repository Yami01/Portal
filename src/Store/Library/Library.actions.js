import { getListLibraryVideosService } from "@/Store/Library/Library.service"
import {
	GET_LIST_LIBRARY_FAILED,
	GET_LIST_LIBRARY_REQUEST,
	GET_LIST_LIBRARY_SUCCESS,
} from "@/Store/Library/Library.constants"
import { LibraryComponentListPropsType } from "@/Containers/Library/Types"

export function getListLibraryVideos() {
	return (dispatch) => {
		const toggleLoading = (isLoading) => dispatch({type: GET_LIST_LIBRARY_REQUEST, payload: isLoading});
		return new Promise((resolve, reject) => {
			toggleLoading(true);

			new getListLibraryVideosService()
				.then((listLibraryResponse: Array<LibraryComponentListPropsType>) => {
					dispatch({type: GET_LIST_LIBRARY_SUCCESS, payload: listLibraryResponse});
					resolve(listLibraryResponse);
				})
				.catch((error) => {
					dispatch({type: GET_LIST_LIBRARY_FAILED, payload: error});
					reject(error);
				})
				.finally(() => {
					toggleLoading(false);
				});
		});
	};
}
