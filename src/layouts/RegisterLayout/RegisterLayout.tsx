import logo from '../../assets/imgs/logo-2.png'

interface Props {
  children?: React.ReactNode
}

export default function RegisterLayout({ children }: Props) {
  return (
    <div className='bg-gradient-to-r from-slate-50 to-teal-100 min-h-screen'>
      <div className='w-full flex flex-col'>
        {/* Header */}
        <div className='flex flex-col sm:flex-row justify-between items-center px-4 py-2'>
          {/* Logo */}
          <div className='mb-2 sm:mb-0'>
            <img src={logo} alt='logo' className='w-24 h-24 object-cover cursor-pointer border border-none' />
          </div>

          {/* Login Section */}
          <div className='text-center sm:text-right'>
            <span className='text-sm block sm:inline'>Already playing with EasiTaskk?</span>
            <button className='py-2 px-3 ml-0 sm:ml-3 rounded-md text-white bg-blue font-semibold hover:bg-blue/60 mt-2 sm:mt-0'>
              Login
            </button>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}
