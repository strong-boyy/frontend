export default function Header() {
  return (
    <div className='flex justify-between items-center mb-8'>
      {/* Container giữa */}
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
      {/* Container thông báo và avatar */}
      <div className='flex items-center space-x-4'>
        <i className='fas fa-bell text-gray-400 text-xl' />
        <img
          alt='User Avatar'
          className='rounded-full w-10 h-10'
          height={40}
          src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
          width={40}
        />
      </div>
    </div>
  )
}
