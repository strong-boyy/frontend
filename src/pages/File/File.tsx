import { Fragment } from 'react/jsx-runtime'

export default function File() {
  return (
    <Fragment>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Files</h1>
        <div className='flex space-x-4'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-lg'>+ Create New Folder</button>
          <button className='bg-gray-200 text-gray-700 px-4 py-2 rounded-lg'>Upload</button>
        </div>
      </div>

      <div className='grid grid-cols-12 gap-2'>
        <div className='col-span-8'>
          <div className='lg:col-span-2'>
            {/* File Categories */}
            <div className='bg-white p-6 rounded-lg shadow mb-6'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-semibold'>All Files</h2>
                <button className='text-gray-500'>
                  Show All
                  <i className='fas fa-chevron-down'></i>
                </button>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='flex items-center p-4 bg-gray-100 rounded-lg'>
                  <img alt='Documents icon' className='mr-4' src='https://placehold.co/40x40' />
                  <div>
                    <h3 className='font-semibold'>Documents</h3>
                    <p className='text-sm text-gray-500'>24 files</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-gray-100 rounded-lg'>
                  <img alt='Music icon' className='mr-4' src='https://placehold.co/40x40' />
                  <div>
                    <h3 className='font-semibold'>Music</h3>
                    <p className='text-sm text-gray-500'>102 files</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-gray-100 rounded-lg'>
                  <img alt='Work Project icon' className='mr-4' src='https://placehold.co/40x40' />
                  <div>
                    <h3 className='font-semibold'>Work Project</h3>
                    <p className='text-sm text-gray-500'>84 files</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-gray-100 rounded-lg'>
                  <img alt='Personal Media icon' className='mr-4' src='https://placehold.co/40x40' />
                  <div>
                    <h3 className='font-semibold'>Personal Media</h3>
                    <p className='text-sm text-gray-500'>2450 files</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-gray-100 rounded-lg'>
                  <img alt='Redding Backup icon' className='mr-4' src='https://placehold.co/40x40' />
                  <div>
                    <h3 className='font-semibold'>Redding Backup</h3>
                    <p className='text-sm text-gray-500'>22 files</p>
                  </div>
                </div>
                <div className='flex items-center p-4 bg-gray-100 rounded-lg'>
                  <img alt='Root icon' className='mr-4' src='https://placehold.co/40x40' />
                  <div>
                    <h3 className='font-semibold'>Root</h3>
                    <p className='text-sm text-gray-500'>105 files</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Recent Files */}
            <div className='bg-white p-6 rounded-lg shadow'>
              <div className='flex justify-between items-center mb-4'>
                <h2 className='text-lg font-semibold'>Recent File</h2>
                <button className='text-blue-500'>View All</button>
              </div>
              <table className='w-full'>
                <thead>
                  <tr className='text-left text-gray-500'>
                    <th className='pb-2'>Name</th>
                    <th className='pb-2'>Size</th>
                    <th className='pb-2'>Last Modified</th>
                    <th className='pb-2'>Members</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className='border-t'>
                    <td className='py-2 flex items-center'>
                      <img alt='Document icon' className='mr-2' src='https://placehold.co/24x24' />
                      Proposal.docx
                    </td>
                    <td className='py-2'>2.9 MB</td>
                    <td className='py-2'>Feb 25, 2022</td>
                    <td className='py-2 flex'>
                      <img alt='Member 1' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 2' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 3' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 4' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 5' className='rounded-full' src='https://placehold.co/24x24' />
                    </td>
                  </tr>
                  <tr className='border-t'>
                    <td className='py-2 flex items-center'>
                      <img alt='Image icon' className='mr-2' src='https://placehold.co/24x24' />
                      Background.jpg
                    </td>
                    <td className='py-2'>3.5 MB</td>
                    <td className='py-2'>Feb 24, 2022</td>
                    <td className='py-2 flex'>
                      <img alt='Member 1' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 2' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 3' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 4' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 5' className='rounded-full' src='https://placehold.co/24x24' />
                    </td>
                  </tr>
                  <tr className='border-t'>
                    <td className='py-2 flex items-center'>
                      <img alt='Design file icon' className='mr-2' src='https://placehold.co/24x24' />
                      Apex website.fig
                    </td>
                    <td className='py-2'>23.5 MB</td>
                    <td className='py-2'>Feb 22, 2022</td>
                    <td className='py-2 flex'>
                      <img alt='Member 1' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 2' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 3' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 4' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 5' className='rounded-full' src='https://placehold.co/24x24' />
                    </td>
                  </tr>
                  <tr className='border-t'>
                    <td className='py-2 flex items-center'>
                      <img alt='Illustration icon' className='mr-2' src='https://placehold.co/24x24' />
                      Illustration.ai
                    </td>
                    <td className='py-2'>7.2 MB</td>
                    <td className='py-2'>Feb 20, 2022</td>
                    <td className='py-2 flex'>
                      <img alt='Member 1' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 2' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 3' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 4' className='rounded-full mr-1' src='https://placehold.co/24x24' />
                      <img alt='Member 5' className='rounded-full' src='https://placehold.co/24x24' />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className='col-span-4'>
          <div className='space-y-6'>
            {/* Storage Info */}
            <div className='bg-white p-6 rounded-lg shadow'>
              <h2 className='text-lg font-semibold mb-4'>Available Storage</h2>
              <div className='flex items-center mb-4'>
                <div className='w-16 h-16 rounded-full border-4 border-blue-500 flex items-center justify-center'>
                  <span className='text-xl font-bold'>85%</span>
                </div>
                <div className='ml-4'>
                  <p className='text-gray-500'>130GB / 512GB</p>
                </div>
              </div>
              <div className='space-y-2'>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-500'>Media</span>
                  <span className='text-gray-500'>86 GB</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
                  <div className='bg-blue-500 h-2.5 rounded-full' style={{ width: '70%' }}></div>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-500'>Documents</span>
                  <span className='text-gray-500'>26 GB</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
                  <div className='bg-yellow-500 h-2.5 rounded-full' style={{ width: '20%' }}></div>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-500'>Music</span>
                  <span className='text-gray-500'>10 GB</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2.5 mb-4'>
                  <div className='bg-red-500 h-2.5 rounded-full' style={{ width: '10%' }}></div>
                </div>
                <div className='flex justify-between items-center'>
                  <span className='text-gray-500'>Other File</span>
                  <span className='text-gray-500'>18 GB</span>
                </div>
                <div className='w-full bg-gray-200 rounded-full h-2.5'>
                  <div className='bg-green-500 h-2.5 rounded-full' style={{ width: '15%' }}></div>
                </div>
              </div>
            </div>
            {/* Activity Chart */}
            <div className='bg-white p-6 rounded-lg shadow'>
              <h2 className='text-lg font-semibold mb-4'>Activity Chart</h2>
              <img
                alt='Activity chart showing media, photos, and docs activity over time'
                src='https://placehold.co/300x200'
              />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
