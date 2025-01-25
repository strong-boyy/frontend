import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import Input from '../../components/Input'
import { schema, FormData } from '../../utils/rules'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  })

  const onSubmit = handleSubmit((data) => console.log(data))
  return (
    <div className='  flex flex-col justify-center  sm:px-6 lg:px-8 '>
      <div className=' bg-white mx-2 border border-gray-300 flex-shrink-0 sm:mx-auto sm:w-full sm:max-w-md rounded-lg sm:transform sm:transition-transform sm:duration-3s00 sm:ease-out sm:hover:scale-105 sm:hover:shadow-lg'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md sm:pt-4'>
          <img className='mx-auto h-10 w-auto' src='https://www.svgrepo.com/show/301692/login.svg' alt='Workflow' />
          <h2 className='mt-6 mb-3 text-center text-2xl leading-9 font-extrabold text-gray-900'>Sign In</h2>
        </div>
        <div className=' sm:mx-auto sm:w-full sm:max-w-md sm:p-8'>
          <div className='bg-white px-4 sm:px-10'>
            <button className='w-full font-bold shadow-sm rounded-lg py-3 bg-indigo-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline my-2'>
              <div className='bg-white p-2 rounded-full'>
                <svg className='w-4' viewBox='0 0 533.5 544.3'>
                  <path
                    d='M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z'
                    fill='#4285f4'
                  />
                  <path
                    d='M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z'
                    fill='#34a853'
                  />
                  <path
                    d='M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z'
                    fill='#fbbc04'
                  />
                  <path
                    d='M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z'
                    fill='#ea4335'
                  />
                </svg>
              </div>
              <span className='ml-4'>Sign In with Google</span>
            </button>
            <form onSubmit={onSubmit}>
              <div className='mt-4'>
                <label htmlFor='email' className='block text-sm font-medium leading-5 text-gray-700'>
                  Email address
                </label>
                <div className='mt-1 relative rounded-md shadow-sm'>
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
              <div className='mt-4'>
                <label htmlFor='password' className='block text-sm font-medium leading-5 text-gray-700'>
                  Password
                </label>
                <div className='mt-1 rounded-md shadow-sm'>
                  <Input
                    register={register}
                    className='relative'
                    name='password'
                    type='password'
                    placeholder='Password'
                    autoComplete='on'
                    errorMessage={errors.password?.message}
                  />
                </div>
              </div>

              <div className='mt-4'>
                <span className='block w-full rounded-md shadow-sm'>
                  <button
                    type='submit'
                    className='w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md bg-blue text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out'
                  >
                    Sign In
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
