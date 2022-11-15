import axios from 'axios';
import _ from 'lodash';
import {urlConfig} from "@/Utils/config";
import store from "@/Store/store";

const apiUtils = axios.create({
	baseURL: urlConfig.baseUrl,

});

apiUtils.interceptors.request.use((request) => {
	console.log('requestxxx', request);
	request.headers.Authorization = _.isEmpty(request?.headers?.Authorization) ? `Bearer ${store?.getState()?.auth?.userData?.accessToken}` : request?.headers?.Authorization;
	return request;
});

apiUtils.interceptors.response.use((response) => {
	console.log('responsexxx', response);
	return response;
});

export default apiUtils;
