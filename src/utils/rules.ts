import * as yup from 'yup'

export const schema = yup.object({
  name: yup.string().required('Please enter your name'),
  email: yup.string().email().required('Please enter your email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(10, 'Password must be at least 10 characters')
    .max(20, 'Password must be at most 20 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password')], 'Passwords must match')
})

export type FormData = yup.InferType<typeof schema>
