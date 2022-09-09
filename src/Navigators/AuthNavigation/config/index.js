/**
 *
 * @format
 * @flow
 *
 */
import LoginContainer from '@/Containers/Auth/Login/LoginContainer'
import ForgotPasswordContainer from "@/Containers/Auth/ForgotPassword/ForgotPasswordContainer"
import LoginAuthContainer from "@/Containers/Auth/LoginAuth/LoginAuthContainer"
import LoginPinContainer from "@/Containers/Auth/LoginPin/LoginPinContainer"

export const ROUTES = [
  {
    name: 'Login',
    screen: LoginContainer,
  },
  {
    name: 'LoginAuth',
    screen: LoginAuthContainer,
  },
  {
    name: 'LoginPin',
    screen: LoginPinContainer,
  },
  {
    name: 'ForgotPassword',
    screen: ForgotPasswordContainer,
  },
  // {
  //   name: 'CreateNewPassword',
  //   screen: CreateNewPasswordContainer,
  // },
]
