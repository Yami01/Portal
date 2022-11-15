import apiUtils from "@/Utils/APIUtils"
import { endPointConfig } from "@/Utils/config"
import { ResponsePropTypes } from "@/Store/Common/Model"

export const getListLibraryVideosService = () => {
	return new Promise((resolve, reject) => {
		apiUtils.get(`${endPointConfig.library}`)
			.then((apiRes: ResponsePropTypes) => resolve((apiRes?.data)))
			.catch((error) => reject((error?.response?.data)));
	});
};
