import { requestLogin } from "./Profile.service";
import {
    REQUEST_LOGIN,
    REQUEST_LOGIN_SUCCESS,
    REQUEST_LOGIN_FAILED,
} from "./Profile.constants";

import { ResponseLogin } from "@/Containers/Profile/Types";

export function handleLogin(userName: String, password: String) {
    return (dispatch) => {
        const toggleLoading = (isLoading) => dispatch({type: REQUEST_LOGIN, payload: isLoading});
        return new Promise((reslove, reject) => {
            toggleLoading(true);
            new requestLogin(userName,password).then((
                loginResponse: ResponseLogin) => {
                    dispatch({type: REQUEST_LOGIN_SUCCESS, payload: loginResponse});
                    reslove(loginResponse);
                }).catch((error) => {
                    dispatch({type: REQUEST_LOGIN_FAILED, payload: error});
                    reject(error);
                }).finally(() => {
                    toggleLoading(false);
                });
        });
    };
}