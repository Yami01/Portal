import React, {useCallback, useMemo, useState} from 'react'
import LoginAuthComponent from "@/Containers/Auth/LoginAuth/Component/LoginAuthComponent"
import type {
  LoginAuthComponentButtonPropsType,
  LoginAuthComponentRadioPropsType,
  LoginAuthComponentRadioValueType
} from "@/Containers/Auth/LoginAuth/Types";
import {navigate} from "@/Navigators/utils";

const LoginAuthContainer = () => {
  const [radioValue, setRadioValue] = useState(1)
  const buttonPress = useCallback(() => {
    navigate('LoginPin');
  }, []);

  const radioPress = useCallback((option: LoginAuthComponentRadioValueType) => {
    console.log(option)
    setRadioValue(option.target.value)
  }, []);

  const buttonProps = useMemo((): LoginAuthComponentButtonPropsType => {
    return {
      onPress: buttonPress,
    };
  }, []);

  const radioProps = useMemo((): LoginAuthComponentRadioPropsType => {
    return {
      option: radioValue,
      onChange: radioPress,
    };
  }, [radioValue, radioPress]);

  return <LoginAuthComponent buttonProps={buttonProps} radioProps={radioProps} />
}

export default LoginAuthContainer
