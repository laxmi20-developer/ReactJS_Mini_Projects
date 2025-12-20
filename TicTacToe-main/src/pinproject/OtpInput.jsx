import React, { useRef, useState } from 'react'

const OtpInput = ({length=4, onOtpSubmit}) => {
  const [otp, setOtp]=useState(new Array(Number(length)).fill(" "));
  // console.log("otp field", otp,length);
  const inputRefs=useRef([]);
  console.log(inputRefs);
  const handleChange=()=>{};
  const handleClick=()=>{};
  const handlekeydown=()=>{};
  console.log('otp',otp);
  return (
    <div>{
      otp.map((Item,index)=><input type="text" value={otp[index]} key={index} onChange={(e)=>handleChange(index,e)}
      onClick={()=>handleClick(index)}
      onKeyDown={()=>handlekeydown(index,e)}
      className='otpInput'
      ref={(inp)=>inputRefs.current[index]=inp}
      />)
      }</div>
  )
}

export default OtpInput