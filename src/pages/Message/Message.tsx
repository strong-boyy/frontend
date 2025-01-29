import { Fragment } from 'react/jsx-runtime'

export default function Message() {
  return (
    <Fragment>
      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-3'>
          <div className=' bg-white border-r border-gray-200'>
            <div className='px-4'>
              <div className='flex items-center mb-4'>
                <i className='fas fa-search text-gray-400'> </i>
                <input
                  className='ml-2 w-full bg-gray-100 p-2 rounded-lg focus:outline-none'
                  placeholder='Search...'
                  type='text'
                />
              </div>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Killan James</div>
                      <div className='text-sm text-green-500'>Typing...</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>4:30 PM</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Design Team</div>
                      <div className='text-sm text-gray-400'>Hello! Everyone</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>9:36 AM</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Ahmed Medi</div>
                      <div className='text-sm text-gray-400'>Wow really Cool 🔥</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>1:15 AM</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Claudia Maudi</div>
                      <div className='text-sm text-green-500'>Typing...</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>4:30 PM</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Novita</div>
                      <div className='text-sm text-gray-400'>yah, nice design</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>4:30 PM</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Milie Nose</div>
                      <div className='text-sm text-gray-400'>Awesome 🔥</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>8:20 PM</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Ikhsan SD</div>
                      <div className='text-sm text-gray-400'>Voice message</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>yesterday</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Aditya</div>
                      <div className='text-sm text-gray-400'>publish now</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>yesterday</div>
                </div>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center'>
                    <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                    <div className='ml-2'>
                      <div className='font-semibold'>Ahmed Medi</div>
                      <div className='text-sm text-gray-400'>Wow really Cool 🔥</div>
                    </div>
                  </div>
                  <div className='text-sm text-gray-400'>1:15 AM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-9'>
          <div className='flex-1 flex flex-col'>
            {/* Chat Section */}
            <div className='flex flex-1 overflow-hidden'>
              {/* Chat Messages */}
              <div className='flex-1 flex flex-col px-1 overflow-y-auto'>
                <div className='flex items-center mb-4'>
                  <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                  <div className='ml-2'>
                    <div className='font-semibold'>Design Team</div>
                    <div className='text-sm text-gray-400'>60 member, 10 online</div>
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                  <div className='ml-2'>
                    <div className='font-semibold'>Killan James</div>
                    <div className='text-sm text-gray-400'>10:12 AM</div>
                  </div>
                </div>
                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                  <div className='text-sm'>Hi, Are you still Web Designer.</div>
                  <div className='text-sm'>would love to see some Design 😊</div>
                </div>
                <div className='flex items-center mb-4'>
                  <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                  <div className='ml-2'>
                    <div className='font-semibold'>Claudia Maudi</div>
                    <div className='text-sm text-gray-400'>10:30 AM</div>
                  </div>
                </div>
                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                  <div className='text-sm'>Hey, happy to hear from you. Yes, I will be back in a couple fo days.</div>
                  <div className='text-sm'>Here are some Design i took earlier today.</div>
                  <div className='flex mt-4 space-x-4'>
                    <img alt='Design Image 1' className='h-32 w-48 rounded-lg' src='https://placehold.co/200x150' />
                    <img alt='Design Image 2' className='h-32 w-48 rounded-lg' src='https://placehold.co/200x150' />
                  </div>
                </div>
                <div className='flex items-center mb-4'>
                  <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                  <div className='ml-2'>
                    <div className='font-semibold'>Dristin Watson</div>
                    <div className='text-sm text-gray-400'>10:30 AM</div>
                  </div>
                </div>
                <div className='bg-blue-100 p-4 rounded-lg mb-4'>
                  <div className='text-sm'>Great 👍 That's a nice design Idea.👏👀</div>
                </div>
                <div className='flex items-center mb-4'>
                  <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                  <div className='ml-2'>
                    <div className='font-semibold'>Milie Nose</div>
                    <div className='text-sm text-gray-400'>8:20 PM</div>
                  </div>
                </div>
                <div className='bg-gray-100 p-4 rounded-lg mb-4'>
                  <div className='text-sm'>Add a comment...</div>
                </div>
              </div>
              {/* User Info */}
              <div className=' bg-white border-l border-gray-200 mr-5 pr-2'>
                <div className='flex items-center mb-4'>
                  <img alt='User Image' className='h-20 w-20 rounded-full' src='https://placehold.co/80x80' />
                  <div className='ml-4'>
                    <div className='font-semibold text-xl'>Killan James</div>
                    <div className='text-sm text-gray-400'>@killan james</div>
                  </div>
                </div>
                <div className='mb-4'>
                  <div className='font-semibold mb-2'>Attachments</div>
                  <div className='space-y-2'>
                    <div className='flex items-center'>
                      <i className='fab fa-figma text-gray-400'> </i>
                      <div className='ml-2'>
                        <div className='font-semibold'>Very important file.figma</div>
                        <div className='text-sm text-gray-400'>7.5 MB 3.22.22, 11:15 AM</div>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <i className='fas fa-file-alt text-gray-400'> </i>
                      <div className='ml-2'>
                        <div className='font-semibold'>Some file.scratch</div>
                        <div className='text-sm text-gray-400'>7.5 MB 3.22.22, 11:15 AM</div>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <i className='fab fa-adobe text-gray-400'> </i>
                      <div className='ml-2'>
                        <div className='font-semibold'>List of someting .xd</div>
                        <div className='text-sm text-gray-400'>7.5 MB 3.22.22, 11:15 AM</div>
                      </div>
                    </div>
                    <div className='flex items-center'>
                      <i className='fas fa-file-alt text-gray-400'> </i>
                      <div className='ml-2'>
                        <div className='font-semibold'>Very important fil.svg</div>
                        <div className='text-sm text-gray-400'>7.5 MB 3.22.22, 11:15 AM</div>
                      </div>
                    </div>
                  </div>
                  <div className='mt-2 text-blue-500 cursor-pointer'>View all</div>
                </div>
                <div>
                  <div className='font-semibold mb-2'>Members</div>
                  <div className='space-y-2'>
                    <div className='flex items-center'>
                      <i className='fas fa-user-plus text-gray-400'> </i>
                      <div className='ml-2 text-blue-500 cursor-pointer'>Add Member</div>
                    </div>
                    <div className='flex items-center'>
                      <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                      <div className='ml-2'>Novita</div>
                    </div>
                    <div className='flex items-center'>
                      <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                      <div className='ml-2'>Milie Nose</div>
                    </div>
                    <div className='flex items-center'>
                      <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                      <div className='ml-2'>Ikhsan SD</div>
                    </div>
                    <div className='flex items-center'>
                      <img alt='User Image' className='h-10 w-10 rounded-full' src='https://placehold.co/40x40' />
                      <div className='ml-2'>Aditya</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Footer */}
            <div className='flex items-center justify-between h-16 bg-white border-t border-gray-200 px-4'>
              <input
                className='w-full bg-gray-100 p-2 rounded-lg focus:outline-none'
                placeholder='Add a comment...'
                type='text'
              />
              <div className='flex items-center space-x-4'>
                <i className='fas fa-paperclip text-gray-400'> </i>
                <i className='fas fa-smile text-gray-400'> </i>
                <i className='fas fa-paper-plane text-blue-500'> </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
