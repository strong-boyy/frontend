import { Link, useMatch } from 'react-router-dom'
import logo from '../../assets/imgs/logo-2.png'
import path from '../../constants/path'

export default function RegisterHeader() {
  const registerMatch = useMatch('/register')
  const isRegister = Boolean(registerMatch)
  return (
    <div className='w-full flex flex-col'>
      {/* Header */}
      <div className='flex flex-col sm:flex-row justify-between items-center px-4 py-2'>
        {/* Logo */}
        <Link to='/' className='mb-2 sm:mb-0'>
          <img src={logo} alt='logo' className='w-24 h-24 object-cover cursor-pointer border border-none' />
        </Link>

        {/* Login Section */}
        <div className='text-center sm:text-right'>
          {isRegister ? (
            <>
              <span className='text-sm block sm:inline'>Already playing with EasiTaskk?</span>
              <Link
                to={path.login}
                className='py-2 px-3 ml-0 sm:ml-3 rounded-md text-white bg-blue font-semibold hover:bg-blue/60 mt-2 sm:mt-0'
              >
                Sign In
              </Link>
            </>
          ) : (
            <>
              <span className='text-sm block sm:inline'>Create an new account?</span>
              <Link
                to={path.register}
                className='py-2 px-3 ml-0 sm:ml-3 rounded-md text-white bg-blue font-semibold hover:bg-blue/60 mt-2 sm:mt-0'
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
