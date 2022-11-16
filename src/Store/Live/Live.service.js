import apiUtils from "@/Utils/APIUtils"
import { endPointConfig } from "@/Utils/config"
import { ResponsePropTypes } from "@/Store/Common/Model"

export const getStreamParamsService = () => {
	return new Promise((resolve, reject) => {
		apiUtils.get(`${endPointConfig.live}`)
			.then((apiRes: ResponsePropTypes) => resolve((apiRes?.data)))
			.catch((error) => reject((error?.response?.data)));
	});
};

export const getNowPlayingListService = (id: number) => {
	return new Promise((resolve, reject) => {
		apiUtils.get(`${endPointConfig.library}/${id}`)
			.then((apiRes: ResponsePropTypes) => resolve((apiRes?.data)))
			.catch((error) => reject((error?.response?.data)));
	});
};
