import React from 'react'
import homePic from "../../img/rad1.png"

function Homepage() {
  return (
    <div>
      <div className="w-5/6 mx-auto md:flex mt-8 mb-8 ">
        <div className='md:flex md:flex-col justify-center '>
          <div className='md:flex md:flex-col gap-8 md:w-4/6'>
          <h2 className='text-3xl md:text-5xl text-center md:text-left mt-8 md:m-0 leading-relaxed font-mainFont mb-4'>Find perfect plants for your home</h2>
            <img src={homePic} alt="" className=' w-full md:hidden '/>
            <p>Beautiful plants that encourage you to get creative</p>
            <button className='bg-black hover:bg-white text-white hover:text-black hover:border-2 hover:border-black px-8 py-2 font-bold mt-8'>SHOP NOW</button>
          </div>
        </div>
         <div className='hidden md:block'>
               <img src={homePic} alt="" className=' homeImage'/>
          </div> 
        </div>
    </div>
  )
}

export default Homepage