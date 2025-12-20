import React from 'react'
import PhoneOtpForm from './PhoneOtpForm'

export default function Home() {
    return (
        <div className='flex justify-center items-center bg-gray-300 h-190 '>
            <div className='bg-gray-500 text-white w-100 p-8 text-center rounded-2xl'>
                <h1 className='mb-4 text-3xl font-bold'>Login with OTP</h1>
                <PhoneOtpForm />
            </div>
        </div>)
}




