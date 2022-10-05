import React, {useCallback, useMemo} from 'react'
import ForgotPasswordComponent from '@/Containers/Auth/ForgotPassword/Component/ForgotPasswordComponent'
import {navigate} from "@/Navigators/utils";
import type {LoginComponentButtonPropsType} from "@/Containers/Auth/Login/Types";

const ForgotPasswordContainer = () => {
  const primaryButtonPress = useCallback(() => {
    navigate('CreateNewPassword');
  }, []);

  const secondaryButtonPress = useCallback(() => {
    navigate('Login');
  }, []);

  const primaryButtonProps = useMemo((): LoginComponentButtonPropsType => {
    return {
      onPress: primaryButtonPress,
    };
  }, []);

  const secondaryButtonProps = useMemo((): LoginComponentButtonPropsType => {
    return {
      onPress: secondaryButtonPress,
    };
  }, []);
  return <ForgotPasswordComponent  primaryButtonProps={primaryButtonProps} secondaryButtonProps={secondaryButtonProps} />
}

export default ForgotPasswordContainer
