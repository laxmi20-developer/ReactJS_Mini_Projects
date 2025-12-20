import React, { useState } from 'react'
import OtpInput from './OtpInput';
const PhoneOTPForm = () => {
    const [phoneNum, setPhonenum]=useState("");
    const [showotp, setShowotp]=useState(false);
    function handleNum(e){
         setPhonenum(e.target.value);
    }
    function handleSubmit(e){
          e.preventDefault();
          const regex=/[^0-9]/;
          if(phoneNum.length<10||regex.test(phoneNum))
          {
            alert("invalid");
            return}

        // Intigrate BE API to send OTP to user
        // show otp field
        setShowotp(true);
       
        
    }
    const onOtpSubmit=(otp)=>{
        console.log("login successfull",otp);
    }
  return (<>
   {!showotp? <form onSubmit={handleSubmit} >        
        <input type="text" value={phoneNum} onChange={handleNum} placeholder='Enter Phone Number' />
        <button type='submit'>Submit</button>
    </form>:<div><p>Enter sent otp to {phoneNum}</p>
    <OtpInput length='4' onOtpSubmit={onOtpSubmit}/>
    </div>}
    </>
  )
}

export default PhoneOTPForm