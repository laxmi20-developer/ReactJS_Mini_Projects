import React, { useState } from 'react'
import { Form } from 'react-router'
import OtpInput from './OtpInput';

export default function PhoneOtpForm() {
  const [phoneNumber, setPhonenumber] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(""); // ✅ keep OTP in state

  function handleChange(e) {
    setPhonenumber(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    //  phone validations
    const regex = /^[6-9][0-9]{9}$/;
    if (!regex.test(phoneNumber)) {
      alert("invalid phone number");
      setPhonenumber("");
      return;
    }
    // call BE API to get OTP
    // generating otp
    const userOtp = Math.floor(1000 + Math.random() * 9000);
    setGeneratedOtp(userOtp); // ✅ store OTP in state
    setShowOtpInput(true);
    alert("please Enter OTP:" + userOtp);

  }
  return (
    <div >
      {!showOtpInput ? <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Enter Phone number' onChange={handleChange} value={phoneNumber} className='bg-white text-black rounded p-1 outline-0' />
        <button type='submit' className='ms-4 border px-4 bg-gray-400 rounded py-1 cursor-pointer'>Submit</button>
      </form> : <div><p className='mb-4 text-lg'>Enter otp sent to {phoneNumber}</p>
        <OtpInput length={4} userOtp={generatedOtp} />
      </div>
      }
    </div>
  )
}
