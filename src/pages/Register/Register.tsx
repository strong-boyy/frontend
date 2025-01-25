import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import Input from '../../components/Input'

const schema = yup.object({
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

type FormData = yup.InferType<typeof schema>
export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <div className='flex flex-col justify-center  sm:px-6 lg:px-8'>
      <div className='bg-white border border-gray-300 mx-2  mt-1 sm:mt-0 flex-shrink-0 sm:mx-auto sm:w-full sm:max-w-md rounded-lg sm:transform sm:transition-transform sm:duration-3s00 sm:ease-out sm:hover:scale-105 sm:hover:shadow-lg'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md sm:pt-4'>
          <img className='mx-auto h-10 w-auto' src='https://www.svgrepo.com/show/301692/login.svg' alt='Workflow' />
          <h2 className='mt-6 text-center text-2xl leading-9 font-extrabold text-gray-900'>Create a new account</h2>
          <p className='mt-1 text-center text-sm leading-5 text-gray-500 max-w'>
            Or{' '}
            <a
              href='#'
              className='font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:underline transition ease-in-out duration-150'
            >
              login to your account
            </a>
          </p>
        </div>
        <div className=' sm:mx-auto sm:w-full sm:max-w-m p-2 sm:px-8 sm:py-5'>
          <div className='bg-white    sm:px-10'>
            <form onSubmit={onSubmit}>
              <div>
                <label htmlFor='email' className='block text-sm font-medium leading-5  text-gray-700'>
                  Name
                </label>
                <div className=' relative rounded-md shadow-sm'>
                  <Input
                    register={register}
                    name='name'
                    type='text'
                    placeholder='Jane Doe'
                    autoComplete='on'
                    errorMessage={errors.name?.message}
                  />
                  <div className='hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                        clipRule='evenodd'
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div className='mt-2'>
                <label htmlFor='email' className='block text-sm font-medium leading-5 text-gray-700'>
                  Email address
                </label>
                <div className=' relative rounded-md shadow-sm'>
                  <Input
                    register={register}
                    name='email'
                    type='email'
                    placeholder='user@example.com'
                    autoComplete='on'
                    errorMessage={errors.email?.message}
                  />

                  <div className='hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
                    <svg className='h-5 w-5 text-red-500' fill='currentColor' viewBox='0 0 20 20'>
                      <path
                        fillRule='evenodd'
                        d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className='mt-2'>
                <label htmlFor='password' className='block text-sm font-medium leading-5 text-gray-700'>
                  Password
                </label>
                <div className=' rounded-md shadow-sm'>
                  <Input
                    register={register}
                    name='password'
                    type='password'
                    placeholder='Password'
                    autoComplete='on'
                    errorMessage={errors.password?.message}
                  />
                </div>
              </div>
              <div className='mt-2'>
                <label htmlFor='password_confirmation' className='block text-sm font-medium leading-5 text-gray-700'>
                  Confirm Password
                </label>
                <div className=' rounded-md shadow-sm'>
                  <Input
                    register={register}
                    name='password_confirmation'
                    type='password'
                    placeholder='Confirm Password'
                    autoComplete='on'
                    errorMessage={errors.confirmPassword?.message}
                  />
                </div>
              </div>
              <div className='mt-2'>
                <span className='block w-full rounded-md shadow-sm'>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-blue text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
                  >
                    Create account
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
