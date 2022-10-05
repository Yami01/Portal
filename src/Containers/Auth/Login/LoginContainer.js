import React, {useCallback, useMemo} from 'react'
import LoginComponent from '@/Containers/Auth/Login/Component/LoginComponent'
import {navigate} from "@/Navigators/utils";
import type {LoginComponentButtonPropsType} from "@/Containers/Auth/Login/Types";

const LoginContainer = () => {
  const primaryButtonPress = useCallback(() => {
    navigate('LoginAuth');
  }, []);

  const secondaryButtonPress = useCallback(() => {
    navigate('ForgotPassword');
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

  return <LoginComponent primaryButtonProps={primaryButtonProps} secondaryButtonProps={secondaryButtonProps} />
}

export default LoginContainer
