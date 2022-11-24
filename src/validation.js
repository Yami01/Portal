import * as yup from 'yup'

export const validatorLogin = yup.object().shape({
  userName: yup
    .string()
     .required('Vui lòng nhập tài khoản')
    .min(4,'Tai khoan phai tu 4 ki tu tro len'),
   
  password: yup
    .string()
    .required('Vui lòng nhập mật khẩu')
})