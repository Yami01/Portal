import apiUtils from "@/Utils/APIUtils";
import { endPointConfig } from "@/Utils/config";
import { ResponsePropTypes } from "../Common/Model";

export const requestLogin = (userName: String, password: String) => {
    return new Promise((resolve, reject) => {
        apiUtils.post(`${endPointConfig.login}`,{
            username: userName,
            password: password
          }).then((apiRes: ResponsePropTypes) => resolve((apiRes?.data)))
        .catch((error) => reject((error?.response?.data)));
    });
};