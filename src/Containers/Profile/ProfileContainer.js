import React, { useCallback } from 'react'
import ProfileComponent from '@/Containers/Profile/Component/ProfileComponent'
import {ProfileComponentFormPropsType} from './Types'
import { useDispatch, useSelector } from "react-redux"
import { handleLogin } from '@/Store/Profile/Profile.actions'
import { ResponseLogin } from './Types'
const dispatch = useDispatch()
const ProfileContainer = () => {
  const secondaryButtonPress = useCallback((formData: ProfileComponentFormPropsType) => {
    console.log(formData);
    dispatch(handleLogin(formData.userName, formData.password)).then((responseParams: ResponseLogin) => {
       console.log(responseParams.token)
    }).catch((error) => console.log(error))
  }, []);

  const primaryButtonPress = useCallback((value: number) => {
    console.log(value);
  }, []);

  return <ProfileComponent secondaryButtonPress={secondaryButtonPress} primaryButtonPress={primaryButtonPress} />
}

export default ProfileContainer
