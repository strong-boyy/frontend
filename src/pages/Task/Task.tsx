export default function Task() {
  return (
    <div className='grid grid-cols-12 gap-2'>
      <div className='col-span-9'>
        <div className='flex-1 p-6 overflow-y-auto'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
            {/* Backlog Column */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold'>Backlog</h2>
                <i className='fas fa-ellipsis-h text-gray-400'> </i>
              </div>
              <div className='space-y-4'>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-purple-100 text-purple-500 text-xs font-semibold px-2 py-1 rounded'>
                      Design
                    </span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <img
                    alt='Task Image'
                    className='w-full h-32 object-cover rounded mb-2'
                    height={150}
                    src='https://storage.googleapis.com/a1aa/image/oke9MkTDYTQMfEGeOmFhGffB2tdfXRHFHlZ7lj1pKGfqw6WEKA.jpg'
                    width={300}
                  />
                  <h3 className='text-sm font-semibold'>Create styleguide foundation</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Aug 20, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <img
                        alt='Member 1'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
                        width={20}
                      />
                      <img
                        alt='Member 2'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
                        width={20}
                      />
                      <span className='text-xs text-gray-400'> 0/8 </span>
                    </div>
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded'>Research</span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <h3 className='text-sm font-semibold'>Copywriting Content</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Aug 20, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <img
                        alt='Member 1'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
                        width={20}
                      />
                      <img
                        alt='Member 2'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
                        width={20}
                      />
                      <span className='text-xs text-gray-400'> 0/8 </span>
                    </div>
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-orange-100 text-orange-500 text-xs font-semibold px-2 py-1 rounded'>
                      Planning
                    </span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <h3 className='text-sm font-semibold'>Update requiment list</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Sep 20, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-xs text-gray-400'> 4 Comment </span>
                      <span className='text-xs text-gray-400'> 11 file </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* To Do Column */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold'>To Do</h2>
                <i className='fas fa-ellipsis-h text-gray-400'> </i>
              </div>
              <div className='space-y-4'>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded'>Research</span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <h3 className='text-sm font-semibold'>auditing information architecture</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Aug 20, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <img
                        alt='Member 1'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
                        width={20}
                      />
                      <img
                        alt='Member 2'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
                        width={20}
                      />
                      <span className='text-xs text-gray-400'> 0/8 </span>
                    </div>
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-orange-100 text-orange-500 text-xs font-semibold px-2 py-1 rounded'>
                      Content
                    </span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <img
                    alt='Task Image'
                    className='w-full h-32 object-cover rounded mb-2'
                    height={150}
                    src='https://storage.googleapis.com/a1aa/image/oke9MkTDYTQMfEGeOmFhGffB2tdfXRHFHlZ7lj1pKGfqw6WEKA.jpg'
                    width={300}
                  />
                  <h3 className='text-sm font-semibold'>Update support documentation</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Aug 16, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <img
                        alt='Member 1'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
                        width={20}
                      />
                      <img
                        alt='Member 2'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
                        width={20}
                      />
                      <span className='text-xs text-gray-400'> 0/8 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* In Progress Column */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold'>In Progress</h2>
                <i className='fas fa-ellipsis-h text-gray-400'> </i>
              </div>
              <div className='space-y-4'>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-orange-100 text-orange-500 text-xs font-semibold px-2 py-1 rounded'>
                      Planning
                    </span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <h3 className='text-sm font-semibold'>Listing deliverables checklist</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Sep 20, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <span className='text-xs text-gray-400'> 4 Comment </span>
                      <span className='text-xs text-gray-400'> 11 file </span>
                    </div>
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-blue-100 text-blue-500 text-xs font-semibold px-2 py-1 rounded'>Research</span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <h3 className='text-sm font-semibold'>Qualitative research planning</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Aug 20, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <img
                        alt='Member 1'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
                        width={20}
                      />
                      <img
                        alt='Member 2'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
                        width={20}
                      />
                      <span className='text-xs text-gray-400'> 0/8 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Review Column */}
            <div>
              <div className='flex items-center justify-between mb-4'>
                <h2 className='text-lg font-semibold'>Review</h2>
                <i className='fas fa-ellipsis-h text-gray-400'> </i>
              </div>
              <div className='space-y-4'>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-orange-100 text-orange-500 text-xs font-semibold px-2 py-1 rounded'>
                      Content
                    </span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <img
                    alt='Task Image'
                    className='w-full h-32 object-cover rounded mb-2'
                    height={150}
                    src='https://storage.googleapis.com/a1aa/image/oke9MkTDYTQMfEGeOmFhGffB2tdfXRHFHlZ7lj1pKGfqw6WEKA.jpg'
                    width={300}
                  />
                  <h3 className='text-sm font-semibold'>Design System</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Aug 16, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <img
                        alt='Member 1'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
                        width={20}
                      />
                      <img
                        alt='Member 2'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
                        width={20}
                      />
                      <span className='text-xs text-gray-400'> 0/8 </span>
                    </div>
                  </div>
                </div>
                <div className='bg-white p-4 rounded-lg shadow'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='bg-purple-100 text-purple-500 text-xs font-semibold px-2 py-1 rounded'>
                      Design
                    </span>
                    <i className='fas fa-ellipsis-h text-gray-400'> </i>
                  </div>
                  <img
                    alt='Task Image'
                    className='w-full h-32 object-cover rounded mb-2'
                    height={150}
                    src='https://storage.googleapis.com/a1aa/image/oke9MkTDYTQMfEGeOmFhGffB2tdfXRHFHlZ7lj1pKGfqw6WEKA.jpg'
                    width={300}
                  />
                  <h3 className='text-sm font-semibold'>High fidelity UI Desktop</h3>
                  <p className='text-xs text-gray-500'>Create content for peceland App</p>
                  <div className='flex items-center justify-between mt-2'>
                    <span className='text-xs text-gray-400'> Aug 20, 2021 </span>
                    <div className='flex items-center space-x-2'>
                      <img
                        alt='Member 1'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
                        width={20}
                      />
                      <img
                        alt='Member 2'
                        className='w-5 h-5 rounded-full'
                        height={20}
                        src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
                        width={20}
                      />
                      <span className='text-xs text-gray-400'> 0/8 </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-span-3'>
        <div className='w-80 bg-white p-6 flex flex-col'>
          <div className='flex items-center justify-between mb-4'>
            <h2 className='text-lg font-semibold'>Member (25)</h2>
            <span className='text-blue-500'> View All </span>
          </div>
          <div className='flex items-center space-x-2 mb-6'>
            <img
              alt='Member 1'
              className='w-8 h-8 rounded-full'
              height={30}
              src='https://storage.googleapis.com/a1aa/image/gj9hxz4J4j7fayRrcZKSKaUCyABT1Z5fRSZLUVqsTazd1tIUA.jpg'
              width={30}
            />
            <img
              alt='Member 2'
              className='w-8 h-8 rounded-full'
              height={30}
              src='https://storage.googleapis.com/a1aa/image/NCt5RWt6rq4DLBpqHO48j9tpx0Cm8MXAtH8QBcEMhhzXdLCF.jpg'
              width={30}
            />
            <img
              alt='Member 3'
              className='w-8 h-8 rounded-full'
              height={30}
              src='https://storage.googleapis.com/a1aa/image/RwiqghJFW9beM6ajenIXm8ouY7qHzMpcxWWePbSGXXeQW3iQB.jpg'
              width={30}
            />
            <img
              alt='Member 4'
              className='w-8 h-8 rounded-full'
              height={30}
              src='https://storage.googleapis.com/a1aa/image/QVNSqhIbTG7jIZLWiHG9BXHLYtfQgkD0XxagTn4q4ndw6WEKA.jpg'
              width={30}
            />
            <img
              alt='Member 5'
              className='w-8 h-8 rounded-full'
              height={30}
              src='https://storage.googleapis.com/a1aa/image/DyVEW1D2OMrPO5pK6LJpxRTaQTHNtszeVyuvFSrBEGMx6WEKA.jpg'
              width={30}
            />
          </div>
          <div className='flex-1 overflow-y-auto'>
            <div className='space-y-4'>
              <div className='flex items-start space-x-2'>
                <img
                  alt='User'
                  className='w-8 h-8 rounded-full'
                  height={30}
                  src='https://storage.googleapis.com/a1aa/image/4iBmVmRA9qbEHxShrZB0an4EamSWE7XU4hWhL6a2vSKXdLCF.jpg'
                  width={30}
                />
                <div>
                  <div className='bg-gray-100 p-2 rounded-lg'>
                    <p className='text-sm'>Hello! 👋</p>
                  </div>
                  <span className='text-xs text-gray-400'> 08:00 am </span>
                </div>
              </div>
              <div className='flex items-start space-x-2'>
                <img
                  alt='User'
                  className='w-8 h-8 rounded-full'
                  height={30}
                  src='https://storage.googleapis.com/a1aa/image/4iBmVmRA9qbEHxShrZB0an4EamSWE7XU4hWhL6a2vSKXdLCF.jpg'
                  width={30}
                />
                <div>
                  <div className='bg-blue-100 p-2 rounded-lg'>
                    <p className='text-sm'>Hi, Everyone 👋</p>
                  </div>
                  <span className='text-xs text-gray-400'> 08:03 am </span>
                </div>
              </div>
              <div className='flex items-start space-x-2'>
                <img
                  alt='User'
                  className='w-8 h-8 rounded-full'
                  height={30}
                  src='https://storage.googleapis.com/a1aa/image/4iBmVmRA9qbEHxShrZB0an4EamSWE7XU4hWhL6a2vSKXdLCF.jpg'
                  width={30}
                />
                <div>
                  <div className='bg-gray-100 p-2 rounded-lg'>
                    <p className='text-sm'>How are you, What did you do everyone</p>
                  </div>
                  <span className='text-xs text-gray-400'> 08:03 am </span>
                </div>
              </div>
              &lt;div class="flex items-start space-x
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
