import * as yup from 'yup'

const handleConfirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('Please confirm your password')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .oneOf([yup.ref(refString)], 'Passwords must match')
}

export const schema = yup.object({
  name: yup.string().required('Please enter your name'),
  email: yup.string().email().required('Please enter your email'),
  password: yup
    .string()
    .required('Please enter your password')
    .min(8, 'Password must be at least 8 characters')
    .max(20, 'Password must be at most 20 characters')
    .matches(/[a-zA-Z]/, 'Password must contain at least one letter'),
  confirm_password: handleConfirmPasswordYup('password')
})

export const loginSchema = schema.pick(['email', 'password'])

export type FormData = yup.InferType<typeof schema>
export type LoginSchema = yup.InferType<typeof loginSchema>
