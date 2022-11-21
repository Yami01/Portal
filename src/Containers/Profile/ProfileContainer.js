import React, { useCallback } from 'react'
import ProfileComponent from '@/Containers/Profile/Component/ProfileComponent'
import {ProfileComponentFormPropsType} from './Types'

const ProfileContainer = () => {

  const secondaryButtonPress = useCallback((formData: ProfileComponentFormPropsType) => {
    console.log(formData);
  }, []);

  const primaryButtonPress = useCallback((value: number) => {
    console.log(value);
  }, []);

  return <ProfileComponent secondaryButtonPress={secondaryButtonPress} primaryButtonPress={primaryButtonPress} />
}

export default ProfileContainer
