import React, { useRef, useState } from 'react'
import logo from '../../../../assets/imgs/logo-2.png'
import userApi from '../../../../apis/user.api'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import path from '../../../../constants/path'

interface Props {
  email?: string | null
}

export default function PendingOTP({ email }: Props) {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([])
  const [otp, setOtp] = useState<string>('')
  const navigate = useNavigate()

  const handleInputChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const newOtp = otp.split('')
    newOtp[index] = value
    setOtp(newOtp.join(''))

    if (value && index < inputsRef.current.length - 1) {
      inputsRef.current[index + 1]?.focus()
    }

    if (newOtp.length > 5) {
      const finalOTP = Number(newOtp.join(''))
      setTimeout(() => {
        handleVerifyOTP(email as string, finalOTP)
          .then((res) => {
            if (res?.data.message === 'Verification successful') {
              toast.success(res?.data.message, {
                position: 'top-right',
                autoClose: 3000
              })
              navigate(path.login)
            }
          })
          .catch((err) => {
            toast.error(err.response.data.data.otp, {
              position: 'top-right',
              autoClose: 2000
            })
          })
      }, 600)
    }
  }

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputsRef.current[index - 1]?.focus()
    }
  }

  const handleVerifyOTP = async (email: string, otp: number) => {
    // eslint-disable-next-line no-useless-catch
    try {
      const response = await userApi.verifyOTP({ email, otp })
      return response
    } catch (err) {
      throw err
    }
  }

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    const pastedValue = e.clipboardData.getData('Text')
    if (pastedValue.length === 6) {
      setOtp(pastedValue)
      setTimeout(() => {
        handleVerifyOTP(email as string, Number(pastedValue))
          .then((res) => {
            if (res?.data.message === 'Verification successful') {
              toast.success(res?.data.message, {
                position: 'top-right',
                autoClose: 3000
              })
              navigate(path.login)
            }
          })
          .catch((err) => {
            toast.error(err.response.data.data.otp, {
              position: 'top-right',
              autoClose: 2000
            })
          })
      }, 600)
    }
  }

  return (
    <div className='text-center'>
      <img alt='Slack logo' className='mx-auto mb-4' height={50} src={logo} width={50} />
      <h1 className='text-3xl font-bold mb-2'>Check your email for a code</h1>
      <p className='text-lg mb-6'>
        We've sent a 6-digit code to
        <span className='font-bold'> {email} </span>. The code expires shortly, so please enter it soon.
      </p>
      <div className='flex justify-center mb-6'>
        {[...Array(6)].map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputsRef.current[index] = el)}
            className='w-12 h-12 border border-gray-300 text-center text-2xl mx-1'
            maxLength={1}
            type='text'
            value={otp[index] || ''}
            onChange={(e) => handleInputChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
          />
        ))}
      </div>
      <p className='text-gray-600 mb-6'>Can't find your code? Check your spam folder!</p>
    </div>
  )
}
