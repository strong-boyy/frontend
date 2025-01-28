import { useState } from 'react'
import path from '../../constants/path'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../../store'
import { clearLS } from '../../utils/auth'
import { logOut } from '../../store/user.slice'

export default function Header() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false)
  const isLoggedIn = useSelector((state: RootState) => state.user.isAuthenticated)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const togglePopover = () => {
    setIsPopoverOpen((prev) => !prev)
  }

  const handleLogout = () => {
    clearLS()
    dispatch(logOut())
    navigate(path.login)
  }
  // console.log('Header: ', isLoggedIn)
  return (
    <div className='flex justify-between items-center mb-8'>
      {/* Search Input */}
      <div className='flex-1 flex justify-center'>
        <div className='relative'>
          <input
            className='bg-gray-200 rounded-full py-2 px-4 pl-10 focus:outline-none w-[400px]'
            placeholder='Search anything...'
            type='text'
          />
          <i className='fas fa-search absolute right-3 top-2.5 text-gray-500' />
        </div>
      </div>

      {/* Notification and Avatar */}
      <div className='flex items-center space-x-4 relative'>
        <i className='fas fa-bell text-gray-400 text-xl' />

        {/* Avatar with Popover */}
        <div className='relative '>
          <img
            alt='User Avatar'
            className='rounded-full w-10 h-10 cursor-pointer hover:bg-blue/45 hover:shadow hover:p-[2px]'
            height={40}
            src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
            width={40}
            onClick={togglePopover}
          />

          {isPopoverOpen && (
            <div className='absolute right-0 mt-2 w-48 bg-slate-200 border border-gray-200 rounded-lg shadow-lg z-10'>
              <svg
                className='absolute top-[-9px] right-2 '
                width='20'
                height='10'
                viewBox='0 0 20 10'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path d='M0 10L10 0L20 10H0Z' fill='#e2e8f0' />
              </svg>
              <ul className='py-2'>
                {!isLoggedIn && (
                  <>
                    <Link to={path.login}>
                      <li className='px-4 py-2 hover:bg-slate-300 cursor-pointer'>Login</li>
                    </Link>
                    <Link to={path.register}>
                      <li className='px-4 py-2 hover:bg-slate-300 cursor-pointer'>Register</li>
                    </Link>
                  </>
                )}
                {isLoggedIn && (
                  <>
                    <li onClick={handleLogout} className='px-4 py-2 hover:bg-gray-100 cursor-pointer'>
                      Logout
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
