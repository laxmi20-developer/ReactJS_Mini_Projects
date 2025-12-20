import React from 'react'
import { Link } from 'react-router'

export default function Product() {
  return (
 <div className='flex justify-center items-center bg-gray-300 h-190 '>
            <div className='bg-gray-500 text-white w-100 p-8 text-center rounded-2xl
    '>
                <h1 className='mb-4 text-xl font-bold'>Payment successfull.Order placed</h1>
               <Link to="/" > <button className='cursor-pointer'>Go to Home</button></Link>
            
            </div>

        </div>  )
}
