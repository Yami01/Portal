import React, {useCallback, useMemo} from 'react'
import LoginPinComponent from "@/Containers/Auth/LoginPin/Component/LoginPinComponent"
import {navigate} from "@/Navigators/utils";
import type {LoginComponentButtonPropsType} from "@/Containers/Auth/Login/Types";

const LoginPinContainer = () => {
  const primaryButtonPress = useCallback(() => {
    navigate('Main');
  }, []);

  const secondaryButtonPress = useCallback(() => {
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

  return <LoginPinComponent primaryButtonProps={primaryButtonProps} secondaryButtonProps={secondaryButtonProps} />
}

export default LoginPinContainer
