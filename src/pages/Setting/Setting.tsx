export default function Setting() {
  return (
    <div>
      {/* Banner */}
      <div className='relative mb-6 mr-5'>
        <img
          alt='Banner Image'
          className='w-full h-48 object-cover rounded-lg'
          height={300}
          src='https://storage.googleapis.com/a1aa/image/vc1uzVolDVoFB17Cch5de37ueEN797uLels3LkbUabxIToQoA.jpg'
          width={1200}
        />
        <img
          alt='User Avatar'
          className='absolute bottom-0 left-6 w-24 h-24 rounded-full border-4 border-white transform translate-y-1/2'
          height={100}
          src='https://storage.googleapis.com/a1aa/image/PAlONRCod44xKl5RrRaqaBPB9c9U1AZZ5ULwTyD4QwfzEKEKA.jpg'
          width={100}
        />
      </div>
      {/* Settings Form */}
      <div className='bg-white p-6 rounded-lg shadow'>
        <h2 className='text-2xl font-bold mb-4'>Settings</h2>
        <div className='flex space-x-4 mb-6'>
          <a className='text-blue-600 border-b-2 border-blue-600 pb-2' href='#'>
            My details
          </a>
          <a className='text-gray-600 pb-2' href='#'>
            Profile
          </a>
          <a className='text-gray-600 pb-2' href='#'>
            Password
          </a>
          <a className='text-gray-600 pb-2' href='#'>
            Team
          </a>
          <a className='text-gray-600 pb-2' href='#'>
            Plan
          </a>
          <a className='text-gray-600 pb-2' href='#'>
            Billing
          </a>
          <a className='text-gray-600 pb-2' href='#'>
            Email
          </a>
          <a className='text-gray-600 pb-2' href='#'>
            Notifications
          </a>
        </div>
        <div className='grid grid-cols-2 gap-4 mb-4'>
          <div>
            <label className='block text-gray-600 mb-2' htmlFor='first-name'>
              First name
            </label>
            <input className='w-full p-2 border rounded-lg' id='first-name' type='text' defaultValue='Killan' />
          </div>
          <div>
            <label className='block text-gray-600 mb-2' htmlFor='last-name'>
              Last name
            </label>
            <input className='w-full p-2 border rounded-lg' id='last-name' type='text' defaultValue='James' />
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-600 mb-2' htmlFor='email'>
            Email
          </label>
          <div className='flex items-center border rounded-lg p-2'>
            <i className='fas fa-envelope text-gray-400 mr-2'></i>
            <input
              className='w-full border-none focus:ring-0'
              id='email'
              type='email'
              defaultValue='killanjames@gmail.com'
            />
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-600 mb-2'>Profile Picture</label>
          <div className='border-dashed border-2 border-gray-300 rounded-lg p-6 text-center'>
            <i className='fas fa-upload text-gray-400 text-2xl mb-2'></i>
            <p className='text-gray-600'>Click to upload or drag and drop</p>
            <p className='text-gray-400'>SVG, PNG, JPG or GIF (max, 800x400px)</p>
          </div>
        </div>
        <div className='mb-4'>
          <label className='block text-gray-600 mb-2' htmlFor='role'>
            Role
          </label>
          <input className='w-full p-2 border rounded-lg' id='role' type='text' defaultValue='Product Designer' />
        </div>
        <div className='flex justify-end space-x-4'>
          <button className='px-4 py-2 border rounded-lg text-gray-600'>Cancel</button>
          <button className='px-4 py-2 bg-blue-600 bg-blue text-white rounded-lg'>Save</button>
        </div>
      </div>
    </div>
  )
}
