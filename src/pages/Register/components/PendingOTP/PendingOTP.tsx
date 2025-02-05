import React from 'react'

export default function PendingOTP() {
  return (
    <div className='text-center'>
      <img
        alt='Slack logo'
        className='mx-auto mb-4'
        height={50}
        src='https://storage.googleapis.com/a1aa/image/l662TPwRg222-7376jF3XaojqIrw56XterGqrILNoHQ.jpg'
        width={50}
      />
      <h1 className='text-3xl font-bold mb-2'>Check your email for a code</h1>
      <p className='text-lg mb-6'>
        We've sent a 6-digit code to
        <span className='font-bold'> dhan29112001@gmail.com </span>. The code expires shortly, so please enter it soon.
      </p>
      <div className='flex justify-center mb-6'>
        <input className='w-12 h-12 border border-gray-300 text-center text-2xl mx-1' maxLength={1} type='text' />
        <input className='w-12 h-12 border border-gray-300 text-center text-2xl mx-1' maxLength={1} type='text' />
        <input className='w-12 h-12 border border-gray-300 text-center text-2xl mx-1' maxLength={1} type='text' />
        <span className='text-2xl mx-2'> - </span>
        <input className='w-12 h-12 border border-gray-300 text-center text-2xl mx-1' maxLength={1} type='text' />
        <input className='w-12 h-12 border border-gray-300 text-center text-2xl mx-1' maxLength={1} type='text' />
        <input className='w-12 h-12 border border-gray-300 text-center text-2xl mx-1' maxLength={1} type='text' />
      </div>
      <div className='flex justify-center mb-6'>
        <button className='flex items-center mx-2'>
          <img
            alt='Gmail logo'
            className='mr-2'
            height={20}
            src='https://storage.googleapis.com/a1aa/image/KAFWPIPmj4GvA_4Xa_NoByYGcsIU2Kvk4pqpysUlHaw.jpg'
            width={20}
          />
          <span> Open Gmail </span>
        </button>
        <button className='flex items-center mx-2'>
          <img
            alt='Outlook logo'
            className='mr-2'
            height={20}
            src='https://storage.googleapis.com/a1aa/image/fYOmRHFCyn6sRlrNdWKVULsCKS9afyzx5RD1sFB4HzE.jpg'
            width={20}
          />
          <span> Open Outlook </span>
        </button>
      </div>
      <p className='text-gray-600 mb-6'>Can't find your code? Check your spam folder!</p>
      <div className='flex justify-center space-x-4'>
        <a className='text-gray-600' href='#'>
          {' '}
          Privacy &amp; Terms{' '}
        </a>
        <a className='text-gray-600' href='#'>
          {' '}
          Contact Us{' '}
        </a>
      </div>
    </div>
  )
}
