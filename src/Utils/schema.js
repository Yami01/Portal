import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  userName: yup.string().required('Vui lòng nhập tên đăng nhập'),
  password: yup.string().required('Vui lòng nhập mật khẩu'),
});

