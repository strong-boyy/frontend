import { Fragment } from 'react/jsx-runtime'
import LineChart from '../../components/LineChart'

export default function Home() {
  return (
    <Fragment>
      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-8'>
          {/* Stats Cards */}
          <div className='grid grid-cols-3 gap-2 mb-4'>
            <div className='bg-white px-6 py-1 rounded-lg shadow'>
              <div className='flex justify-between items-center mb-1'>
                <h2 className='text-gray-500'>Task Completed</h2>
                <i className='fas fa-star text-gray-300 text-xl'></i>
              </div>
              <div className='flex items-center'>
                <h3 className='text-2xl font-bold'>08</h3>
                <div className='ml-4 text-green-500'>10+ more from last week</div>
              </div>
            </div>
            <div className='bg-white px-6 py-1 rounded-lg shadow'>
              <div className='flex justify-between items-center mb-1'>
                <h2 className='text-gray-500'>New Task</h2>
                <i className='fas fa-file-alt text-gray-300 text-xl'></i>
              </div>
              <div className='flex items-center'>
                <h3 className='text-2xl font-bold'>10</h3>
                <div className='ml-4 text-green-500'>10+ more from last week</div>
              </div>
            </div>
            <div className='bg-white px-6 py-1 rounded-lg shadow'>
              <div className='flex justify-between items-center mb-1'>
                <h2 className='text-gray-500'>Project Done</h2>
                <i className='fas fa-file-alt text-gray-300 text-xl'></i>
              </div>
              <div className='flex items-center'>
                <h3 className='text-2xl font-bold'>10</h3>
                <div className='ml-4 text-green-500'>08+ more from last week</div>
              </div>
            </div>
          </div>
          {/* Task Done Chart */}
          <LineChart />
          {/* Task Progress Chart */}
          {/* Task List */}
          <div>
            <h2 className='text-xl font-bold mb-4'>Task</h2>
            <div className='bg-white p-6 rounded-lg shadow mb-4'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                  <i className='fas fa-play-circle text-blue-500 text-2xl mr-4'></i>
                  <div>
                    <h3 className='text-lg font-bold'>Search Inspiration for project</h3>
                    <div className='text-gray-500'>
                      Start from
                      <span className='font-bold'>9.00 am</span>
                    </div>
                    <a className='text-blue-500' href='#'>
                      www.uistore.com
                    </a>
                    <div className='text-gray-500'>8 comments</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='text-gray-500 mr-4'>24% complete</div>
                  <div className='bg-gray-200 rounded-full h-2 w-24'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '24%' }}></div>
                  </div>
                  <button className='ml-4 bg-purple-100 text-purple-500 px-4 py-2 rounded-full'>Reminder</button>
                </div>
              </div>
            </div>
            <div className='bg-white p-6 rounded-lg shadow mb-4'>
              <div className='flex justify-between items-center mb-4'>
                <div className='flex items-center'>
                  <i className='fas fa-play-circle text-blue-500 text-2xl mr-4'></i>
                  <div>
                    <h3 className='text-lg font-bold'>Search Inspiration for project</h3>
                    <div className='text-gray-500'>
                      Start from
                      <span className='font-bold'>3.00 am</span>
                    </div>
                    <a className='text-blue-500' href='#'>
                      www.uistore.org
                    </a>
                    <div className='text-gray-500'>5 comments</div>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='text-gray-500 mr-4'>60% complete</div>
                  <div className='bg-gray-200 rounded-full h-2 w-24'>
                    <div className='bg-blue-500 h-2 rounded-full' style={{ width: '60%' }}></div>
                  </div>
                  <button className='ml-4 bg-purple-100 text-purple-500 px-4 py-2 rounded-full'>Reminder</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-4'>
          {/* Right Sidebar */}
          <div className='w-80 bg-white p-8'>
            {/* Today's Schedule */}
            <div className='mb-8'>
              <h2 className='text-xl font-bold mb-4'>Today's Schedule</h2>
              <div className='text-blue-500 mb-2'>30 minute call with Client</div>
              <div className='text-gray-500 mb-4'>Project Discovery Call</div>
              <div className='bg-purple-100 p-4 rounded-lg flex items-center justify-between'>
                <div className='flex items-center'>
                  <img
                    alt='User Avatar'
                    className='rounded-full w-10 h-10 mr-2'
                    height={40}
                    src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                    width={40}
                  />
                  <img
                    alt='User Avatar'
                    className='rounded-full w-10 h-10 mr-2'
                    height={40}
                    src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                    width={40}
                  />
                  <img
                    alt='User Avatar'
                    className='rounded-full w-10 h-10 mr-2'
                    height={40}
                    src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                    width={40}
                  />
                  <img
                    alt='User Avatar'
                    className='rounded-full w-10 h-10 mr-2'
                    height={40}
                    src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                    width={40}
                  />
                  <div className='bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center'>
                    R
                  </div>
                </div>
                <div className='text-blue-500'>28:35</div>
                <i className='fas fa-ellipsis-v text-gray-500'></i>
              </div>
            </div>
            {/* Messages */}
            <div className='mb-8'>
              <h2 className='text-xl font-bold mb-4'>Messages</h2>
              <div className='flex items-center mb-4'>
                <img
                  alt='User Avatar'
                  className='rounded-full w-10 h-10 mr-4'
                  height={40}
                  src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                  width={40}
                />
                <div>
                  <h3 className='font-bold'>Cris Morich</h3>
                  <div className='text-gray-500'>Hi Angelina! How are You?</div>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  alt='User Avatar'
                  className='rounded-full w-10 h-10 mr-4'
                  height={40}
                  src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                  width={40}
                />
                <div>
                  <h3 className='font-bold'>Charmie</h3>
                  <div className='text-gray-500'>Do you need that design?</div>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  alt='User Avatar'
                  className='rounded-full w-10 h-10 mr-4'
                  height={40}
                  src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                  width={40}
                />
                <div>
                  <h3 className='font-bold'>Jason Mandala</h3>
                  <div className='text-gray-500'>What is the price of hourly...</div>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  alt='User Avatar'
                  className='rounded-full w-10 h-10 mr-4'
                  height={40}
                  src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                  width={40}
                />
                <div>
                  <h3 className='font-bold'>Charlie Chu</h3>
                  <div className='text-gray-500'>Awesome design!!</div>
                </div>
              </div>
            </div>
            {/* New Task */}
            <div>
              <h2 className='text-xl font-bold mb-4'>New Task</h2>
              <div className='mb-4'>
                <label className='block text-gray-500 mb-2' htmlFor='task-title'>
                  Task Title
                </label>
                <input
                  className='bg-gray-200 rounded-full py-2 px-4 w-full focus:outline-none'
                  id='task-title'
                  placeholder='Create new'
                  type='text'
                />
              </div>
              <div className='flex space-x-2 mb-4'>
                <span className='text-2xl'>🎉</span>
                <span className='text-2xl'>😍</span>
                <span className='text-2xl'>😎</span>
                <span className='text-2xl'>🔥</span>
                <span className='text-2xl'>😘</span>
                <span className='text-2xl'>😜</span>
                <span className='text-2xl'>😇</span>
              </div>
              <div>
                <label className='block text-gray-500 mb-2' htmlFor='collaborators'>
                  Add Collaborators
                </label>
                <div className='flex items-center space-x-2'>
                  <img
                    alt='User Avatar'
                    className='rounded-full w-10 h-10'
                    height={40}
                    src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                    width={40}
                  />
                  <img
                    alt='User Avatar'
                    className='rounded-full w-10 h-10'
                    height={40}
                    src='https://storage.googleapis.com/a1aa/image/XuIE7sJsBPOihF1k-3mqDHY31zilBjINoCy4_mDnU44.jpg'
                    width={40}
                  />
                  <button className='bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center'>+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
