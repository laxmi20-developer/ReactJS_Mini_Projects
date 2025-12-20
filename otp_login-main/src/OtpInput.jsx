import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router';

export default function OtpInput({ length = 4, userOtp }) {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const navigate=useNavigate();
  const inputRefs = useRef([]);
  // console.log(otp);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    // allow only one input which is typed last
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    // Move to next input if current field is filled
    if (value && index < length - 1)
      inputRefs.current[index + 1].focus();

  };
  const handleClick = (index) => {
    console.log(index);

    // inputRefs.current[index].setSelectionRange(1,1);
    if (index > 0)
      inputRefs.current[otp.indexOf("")].focus();
  };
  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0)
      inputRefs.current[index - 1].focus();
  };
  useEffect(() => {
    if (inputRefs.current[0])
      inputRefs.current[0].focus();
  }, [])
  // verifying user entered otp number
  const handleSubmit = () => {
    console.log("userOtp otp", userOtp, otp);

    const combinedOtp = otp.join("");
    if (combinedOtp.length == length)
      if(userOtp == combinedOtp)
         {alert("Correct OTP");
          navigate("/product");
         } 
    else
      {alert("Incorrect OTP")};

  }

  return (
    <div>
      {
        otp.map((value, index) => <input type="text" value={value} key={index}
          ref={input => inputRefs.current[index] = input}
          onChange={e => handleChange(index, e)}
          onClick={() => handleClick(index)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          className='border w-15 h-15 rounded ms-2 text-center font-semibold'

        />)
      }
      <button className='border mt-4 px-4 py-1 rounded font-bold bg-gray-400 cursor-pointer' onClick={handleSubmit}>Submit OTP</button>

    </div>
  )
}
