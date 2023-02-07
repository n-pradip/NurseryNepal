import React from 'react'
import { CiDeliveryTruck, CiUser, CiTimer, CiHome } from "react-icons/ci";

const FeatureBanner = () => {
  return (
    <div className='my-10 bg-[#F8F8F8] w-100'>
      <div className="container mx-auto px-10 flex flex-wrap justify-center py-5 text-center">
        <div className="w-1/2 sm:w-1/4 p-5 flex flex-col items-center text-lg text-[#4D4D4D] font-medium">
          <CiHome size={40}/>
          All Nepal delivery
        </div>
        <div className="w-1/2 sm:w-1/4 p-5 flex flex-col items-center text-lg text-[#4D4D4D] font-medium">
          <CiDeliveryTruck size={40}/>
          Secure shipping
        </div>
        <div className="w-1/2 sm:w-1/4 p-5 flex flex-col items-center text-lg text-[#4D4D4D] font-medium">
          <CiUser size={40}/>
          Lifetime Support
        </div>
        <div className="w-1/2 sm:w-1/4 p-5 flex flex-col items-center text-lg text-[#4D4D4D] font-medium">
          <CiTimer size={40}/>
          Track Order
        </div>
      </div>


    </div>
  )
}

export default FeatureBanner