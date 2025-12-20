import React, { useEffect } from 'react'
import { useState } from 'react'
// Initialization will done by useState hook
// Fc Life cycle methods will done by useEffect hook-Mounting,updating,unmounting

function FcLCM(){
    const [count, setCount]=useState(0);
    useEffect(()=>{console.log("mounting")},[]);
return(
    <>
    <h2>count:{count}</h2>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    </>
)
}
export default FcLCM